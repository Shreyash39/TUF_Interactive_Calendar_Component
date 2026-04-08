import { useEffect, useState } from 'react';

interface RGBColor {
  r: number;
  g: number;
  b: number;
}

interface ExtractedColors {
  primary: string;
  secondary: string;
  accent: string;
  light: string;
  dark: string;
}

/**
 * Converts RGB values to hex color string
 */
function rgbToHex(r: number, g: number, b: number): string {
  return `#${[r, g, b].map(x => {
    const hex = Math.round(x).toString(16);
    return hex.length === 1 ? '0' + hex : hex;
  }).join('')}`;
}

/**
 * Calculate color distance using Euclidean distance in RGB space
 */
function colorDistance(c1: RGBColor, c2: RGBColor): number {
  return Math.sqrt(
    Math.pow(c1.r - c2.r, 2) +
    Math.pow(c1.g - c2.g, 2) +
    Math.pow(c1.b - c2.b, 2)
  );
}

/**
 * Calculate perceived brightness of a color (0-255)
 */
function getBrightness(color: RGBColor): number {
  return (color.r * 299 + color.g * 587 + color.b * 114) / 1000;
}

/**
 * Create a lighter tint of a color
 */
function createTint(color: RGBColor, amount: number = 0.3): RGBColor {
  return {
    r: Math.min(255, color.r + (255 - color.r) * amount),
    g: Math.min(255, color.g + (255 - color.g) * amount),
    b: Math.min(255, color.b + (255 - color.b) * amount),
  };
}

/**
 * Create a darker shade of a color
 */
function createShade(color: RGBColor, amount: number = 0.3): RGBColor {
  return {
    r: Math.max(0, color.r * (1 - amount)),
    g: Math.max(0, color.g * (1 - amount)),
    b: Math.max(0, color.b * (1 - amount)),
  };
}

/**
 * K-means clustering implementation for color extraction
 * @param colors - Array of RGB colors from image
 * @param k - Number of clusters (colors to extract)
 * @param maxIterations - Maximum iterations for convergence
 */
function kMeansColors(colors: RGBColor[], k: number = 5, maxIterations: number = 10): RGBColor[] {
  if (colors.length === 0) return [];

  // Initialize centroids with random colors
  let centroids: RGBColor[] = [];
  for (let i = 0; i < k; i++) {
    centroids.push(colors[Math.floor(Math.random() * colors.length)]);
  }

  for (let iteration = 0; iteration < maxIterations; iteration++) {
    // Assign each color to nearest centroid
    const clusters: RGBColor[][] = Array(k).fill(null).map(() => []);
    
    colors.forEach(color => {
      let minDistance = Infinity;
      let closestCentroid = 0;
      
      centroids.forEach((centroid, index) => {
        const distance = colorDistance(color, centroid);
        if (distance < minDistance) {
          minDistance = distance;
          closestCentroid = index;
        }
      });
      
      clusters[closestCentroid].push(color);
    });

    // Recalculate centroids
    const newCentroids: RGBColor[] = clusters.map(cluster => {
      if (cluster.length === 0) return centroids[0]; // Fallback
      
      const sum = cluster.reduce((acc, color) => ({
        r: acc.r + color.r,
        g: acc.g + color.g,
        b: acc.b + color.b,
      }), { r: 0, g: 0, b: 0 });
      
      return {
        r: sum.r / cluster.length,
        g: sum.g / cluster.length,
        b: sum.b / cluster.length,
      };
    });

    centroids = newCentroids;
  }

  return centroids;
}

/**
 * Extract colors from an image and apply 60-30-10 color theory
 * Primary (60%): Most dominant color
 * Secondary (30%): Second most dominant
 * Accent (10%): Vibrant/contrasting color
 * Light: Tint of primary
 * Dark: Shade of primary
 */
export function useThemeExtraction(imageUrl: string | null): ExtractedColors | null {
  const [colors, setColors] = useState<ExtractedColors | null>(null);

  useEffect(() => {
    if (!imageUrl) {
      setColors(null);
      return;
    }

    const img = new Image();
    img.crossOrigin = 'Anonymous';
    
    img.onload = () => {
      try {
        // Create canvas and get image data
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        // Scale down for performance
        const scale = 0.25;
        canvas.width = img.width * scale;
        canvas.height = img.height * scale;
        
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const pixels = imageData.data;

        // Extract all colors (sample every 4th pixel for performance)
        const colorArray: RGBColor[] = [];
        for (let i = 0; i < pixels.length; i += 16) { // Step by 16 (every 4th pixel)
          const r = pixels[i];
          const g = pixels[i + 1];
          const b = pixels[i + 2];
          const a = pixels[i + 3];

          // Skip transparent and very dark/light pixels
          if (a > 128) {
            const brightness = getBrightness({ r, g, b });
            if (brightness > 20 && brightness < 235) {
              colorArray.push({ r, g, b });
            }
          }
        }

        if (colorArray.length === 0) {
          console.warn('No valid colors extracted from image');
          return;
        }

        // Apply k-means to get 5 representative colors
        const extractedColors = kMeansColors(colorArray, 5);

        // Sort by brightness and saturation to identify roles
        const sortedColors = extractedColors.sort((a, b) => {
          const satA = Math.max(a.r, a.g, a.b) - Math.min(a.r, a.g, a.b);
          const satB = Math.max(b.r, b.g, b.b) - Math.min(b.r, b.g, b.b);
          return satB - satA; // Higher saturation first
        });

        // Assign colors based on 60-30-10 rule
        const primary = sortedColors[0]; // Most saturated (dominant)
        const secondary = sortedColors[1]; // Second most saturated
        const accent = sortedColors[2]; // Third for accent (10%)
        
        // Create light and dark variants of primary
        const light = createTint(primary, 0.5);
        const dark = createShade(primary, 0.4);

        const theme: ExtractedColors = {
          primary: rgbToHex(primary.r, primary.g, primary.b),
          secondary: rgbToHex(secondary.r, secondary.g, secondary.b),
          accent: rgbToHex(accent.r, accent.g, accent.b),
          light: rgbToHex(light.r, light.g, light.b),
          dark: rgbToHex(dark.r, dark.g, dark.b),
        };

        setColors(theme);

        // Apply CSS custom properties for dynamic theming
        if (typeof document !== 'undefined') {
          const root = document.documentElement;
          root.style.setProperty('--theme-primary', theme.primary);
          root.style.setProperty('--theme-secondary', theme.secondary);
          root.style.setProperty('--theme-accent', theme.accent);
          root.style.setProperty('--theme-light', theme.light);
          root.style.setProperty('--theme-dark', theme.dark);
        }

      } catch (error) {
        console.error('Error extracting colors:', error);
      }
    };

    img.onerror = () => {
      console.error('Error loading image for color extraction');
    };

    img.src = imageUrl;

    // Cleanup
    return () => {
      if (typeof document !== 'undefined') {
        const root = document.documentElement;
        root.style.removeProperty('--theme-primary');
        root.style.removeProperty('--theme-secondary');
        root.style.removeProperty('--theme-accent');
        root.style.removeProperty('--theme-light');
        root.style.removeProperty('--theme-dark');
      }
    };
  }, [imageUrl]);

  return colors;
}