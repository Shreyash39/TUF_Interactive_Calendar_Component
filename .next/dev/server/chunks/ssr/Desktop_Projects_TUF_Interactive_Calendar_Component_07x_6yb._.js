module.exports = [
"[project]/Desktop/Projects/TUF_Interactive_Calendar_Component/utils/dateUtils.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "generateCalendarGrid",
    ()=>generateCalendarGrid,
    "isDateInRange",
    ()=>isDateInRange,
    "isRangeBoundary",
    ()=>isRangeBoundary
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TUF_Interactive_Calendar_Component$2f$node_modules$2f$date$2d$fns$2f$startOfMonth$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/TUF_Interactive_Calendar_Component/node_modules/date-fns/startOfMonth.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TUF_Interactive_Calendar_Component$2f$node_modules$2f$date$2d$fns$2f$endOfMonth$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/TUF_Interactive_Calendar_Component/node_modules/date-fns/endOfMonth.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TUF_Interactive_Calendar_Component$2f$node_modules$2f$date$2d$fns$2f$startOfWeek$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/TUF_Interactive_Calendar_Component/node_modules/date-fns/startOfWeek.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TUF_Interactive_Calendar_Component$2f$node_modules$2f$date$2d$fns$2f$endOfWeek$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/TUF_Interactive_Calendar_Component/node_modules/date-fns/endOfWeek.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TUF_Interactive_Calendar_Component$2f$node_modules$2f$date$2d$fns$2f$eachDayOfInterval$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/TUF_Interactive_Calendar_Component/node_modules/date-fns/eachDayOfInterval.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TUF_Interactive_Calendar_Component$2f$node_modules$2f$date$2d$fns$2f$isSameMonth$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/TUF_Interactive_Calendar_Component/node_modules/date-fns/isSameMonth.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TUF_Interactive_Calendar_Component$2f$node_modules$2f$date$2d$fns$2f$isToday$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/TUF_Interactive_Calendar_Component/node_modules/date-fns/isToday.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TUF_Interactive_Calendar_Component$2f$node_modules$2f$date$2d$fns$2f$isWeekend$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/TUF_Interactive_Calendar_Component/node_modules/date-fns/isWeekend.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TUF_Interactive_Calendar_Component$2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/Projects/TUF_Interactive_Calendar_Component/node_modules/date-fns/format.js [app-ssr] (ecmascript) <locals>");
;
function generateCalendarGrid(currentDate) {
    const monthStart = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TUF_Interactive_Calendar_Component$2f$node_modules$2f$date$2d$fns$2f$startOfMonth$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["startOfMonth"])(currentDate);
    const monthEnd = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TUF_Interactive_Calendar_Component$2f$node_modules$2f$date$2d$fns$2f$endOfMonth$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["endOfMonth"])(currentDate);
    const calendarStart = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TUF_Interactive_Calendar_Component$2f$node_modules$2f$date$2d$fns$2f$startOfWeek$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["startOfWeek"])(monthStart);
    const calendarEnd = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TUF_Interactive_Calendar_Component$2f$node_modules$2f$date$2d$fns$2f$endOfWeek$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["endOfWeek"])(monthEnd);
    const days = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TUF_Interactive_Calendar_Component$2f$node_modules$2f$date$2d$fns$2f$eachDayOfInterval$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["eachDayOfInterval"])({
        start: calendarStart,
        end: calendarEnd
    });
    // Ensure we always have exactly 42 cells (6 rows × 7 days)
    const daysNeeded = 42;
    const currentDays = days.length;
    if (currentDays < daysNeeded) {
        const lastDay = days[days.length - 1];
        for(let i = 1; i <= daysNeeded - currentDays; i++){
            const nextDay = new Date(lastDay);
            nextDay.setDate(lastDay.getDate() + i);
            days.push(nextDay);
        }
    }
    return days.slice(0, 42).map((date)=>({
            date,
            isCurrentMonth: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TUF_Interactive_Calendar_Component$2f$node_modules$2f$date$2d$fns$2f$isSameMonth$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isSameMonth"])(date, currentDate),
            isToday: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TUF_Interactive_Calendar_Component$2f$node_modules$2f$date$2d$fns$2f$isToday$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isToday"])(date),
            isWeekend: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TUF_Interactive_Calendar_Component$2f$node_modules$2f$date$2d$fns$2f$isWeekend$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isWeekend"])(date)
        }));
}
function isDateInRange(date, start, end) {
    if (!start) return false;
    if (!end) return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TUF_Interactive_Calendar_Component$2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(date, 'yyyy-MM-dd') === (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TUF_Interactive_Calendar_Component$2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(start, 'yyyy-MM-dd');
    const dateTime = date.getTime();
    const startTime = start.getTime();
    const endTime = end.getTime();
    return dateTime >= startTime && dateTime <= endTime;
}
function isRangeBoundary(date, start, end) {
    if (!start) return false;
    const dateStr = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TUF_Interactive_Calendar_Component$2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(date, 'yyyy-MM-dd');
    const startStr = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TUF_Interactive_Calendar_Component$2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(start, 'yyyy-MM-dd');
    const endStr = end ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TUF_Interactive_Calendar_Component$2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(end, 'yyyy-MM-dd') : null;
    return dateStr === startStr || dateStr === endStr;
}
}),
"[project]/Desktop/Projects/TUF_Interactive_Calendar_Component/components/DayCell.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TUF_Interactive_Calendar_Component$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/TUF_Interactive_Calendar_Component/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TUF_Interactive_Calendar_Component$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/TUF_Interactive_Calendar_Component/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TUF_Interactive_Calendar_Component$2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/Projects/TUF_Interactive_Calendar_Component/node_modules/date-fns/format.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TUF_Interactive_Calendar_Component$2f$utils$2f$dateUtils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/TUF_Interactive_Calendar_Component/utils/dateUtils.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function DayCell({ dayInfo, selectedRange, hoverDate, onSelect, onHover, onKeyDown, tabIndex, dataIndex, holidays }) {
    const { date, isCurrentMonth, isToday, isWeekend } = dayInfo;
    const isInRange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TUF_Interactive_Calendar_Component$2f$utils$2f$dateUtils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isDateInRange"])(date, selectedRange?.start ?? null, selectedRange?.end ?? null);
    const isBoundary = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TUF_Interactive_Calendar_Component$2f$utils$2f$dateUtils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isRangeBoundary"])(date, selectedRange?.start ?? null, selectedRange?.end ?? null);
    const dateStr = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TUF_Interactive_Calendar_Component$2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(date, 'yyyy-MM-dd');
    const holiday = holidays.find((h)=>h.date === dateStr);
    const isInHoverRange = selectedRange?.start && !selectedRange.end && hoverDate ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TUF_Interactive_Calendar_Component$2f$utils$2f$dateUtils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isDateInRange"])(date, selectedRange.start, hoverDate) : false;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TUF_Interactive_Calendar_Component$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        role: "gridcell",
        "data-cell-index": dataIndex,
        tabIndex: tabIndex,
        onClick: onSelect,
        onMouseEnter: onHover,
        onKeyDown: onKeyDown,
        "aria-label": `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TUF_Interactive_Calendar_Component$2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(date, 'MMMM d, yyyy')}${holiday ? `, ${holiday.localName}` : ''}`,
        "aria-selected": isBoundary,
        className: `
        relative aspect-square p-2 rounded-lg transition-all duration-200
        ${isCurrentMonth ? 'text-gray-900' : 'text-gray-400'}
        ${isToday ? 'ring-2 ring-blue-500 font-bold' : ''}
        ${isWeekend ? 'bg-red-50' : 'bg-white'}
        ${isInRange || isInHoverRange ? 'bg-blue-100' : ''}
        ${isBoundary ? 'bg-blue-500 text-white font-bold shadow-lg scale-105' : ''}
        ${isCurrentMonth ? 'hover:bg-blue-50 hover:shadow-day-hover' : ''}
        cursor-pointer
      `,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TUF_Interactive_Calendar_Component$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col items-center justify-center h-full",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TUF_Interactive_Calendar_Component$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-sm md:text-base",
                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TUF_Interactive_Calendar_Component$2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(date, 'd')
                }, void 0, false, {
                    fileName: "[project]/Desktop/Projects/TUF_Interactive_Calendar_Component/components/DayCell.tsx",
                    lineNumber: 65,
                    columnNumber: 9
                }, this),
                holiday && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TUF_Interactive_Calendar_Component$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-xs mt-1 text-red-600 font-semibold truncate w-full text-center",
                    children: holiday.localName
                }, void 0, false, {
                    fileName: "[project]/Desktop/Projects/TUF_Interactive_Calendar_Component/components/DayCell.tsx",
                    lineNumber: 67,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/Projects/TUF_Interactive_Calendar_Component/components/DayCell.tsx",
            lineNumber: 64,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/Projects/TUF_Interactive_Calendar_Component/components/DayCell.tsx",
        lineNumber: 44,
        columnNumber: 5
    }, this);
}
const __TURBOPACK__default__export__ = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TUF_Interactive_Calendar_Component$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].memo(DayCell, (prevProps, nextProps)=>{
    return prevProps.dayInfo.date.getTime() === nextProps.dayInfo.date.getTime() && prevProps.selectedRange?.start?.getTime() === nextProps.selectedRange?.start?.getTime() && prevProps.selectedRange?.end?.getTime() === nextProps.selectedRange?.end?.getTime() && prevProps.hoverDate?.getTime() === nextProps.hoverDate?.getTime() && prevProps.tabIndex === nextProps.tabIndex && prevProps.holidays === nextProps.holidays;
});
}),
"[project]/Desktop/Projects/TUF_Interactive_Calendar_Component/components/CalendarGrid.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CalendarGrid
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TUF_Interactive_Calendar_Component$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/TUF_Interactive_Calendar_Component/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TUF_Interactive_Calendar_Component$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/TUF_Interactive_Calendar_Component/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TUF_Interactive_Calendar_Component$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/TUF_Interactive_Calendar_Component/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TUF_Interactive_Calendar_Component$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/TUF_Interactive_Calendar_Component/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TUF_Interactive_Calendar_Component$2f$node_modules$2f$date$2d$fns$2f$isSameDay$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/TUF_Interactive_Calendar_Component/node_modules/date-fns/isSameDay.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TUF_Interactive_Calendar_Component$2f$components$2f$DayCell$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/TUF_Interactive_Calendar_Component/components/DayCell.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
function CalendarGrid({ currentDate, selectedRange, hoveredDate, direction, onDateClick, onDateHover }) {
    const [focusedIndex, setFocusedIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TUF_Interactive_Calendar_Component$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const gridRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TUF_Interactive_Calendar_Component$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const getDaysInMonth = (date)=>{
        const year = date.getFullYear();
        const month = date.getMonth();
        const firstDay = new Date(year, month, 1);
        const startingDayOfWeek = firstDay.getDay();
        const lastDay = new Date(year, month + 1, 0);
        const daysInMonth = lastDay.getDate();
        const days = [];
        for(let i = startingDayOfWeek - 1; i >= 0; i--){
            const day = new Date(year, month, -i);
            days.push(day);
        }
        for(let i = 1; i <= daysInMonth; i++){
            days.push(new Date(year, month, i));
        }
        const remainingDays = 42 - days.length;
        for(let i = 1; i <= remainingDays; i++){
            days.push(new Date(year, month + 1, i));
        }
        return days;
    };
    const daysInMonth = getDaysInMonth(currentDate);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TUF_Interactive_Calendar_Component$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setFocusedIndex(0);
    }, [
        currentDate
    ]);
    const isCurrentMonth = (date)=>{
        return date.getMonth() === currentDate.getMonth();
    };
    const isToday = (date)=>{
        const today = new Date();
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TUF_Interactive_Calendar_Component$2f$node_modules$2f$date$2d$fns$2f$isSameDay$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isSameDay"])(date, today);
    };
    const isInRange = (date)=>{
        if (!selectedRange?.start || !selectedRange?.end) return false;
        return date > selectedRange.start && date < selectedRange.end;
    };
    const isInHoverRange = (date)=>{
        if (!selectedRange?.start || !hoveredDate || selectedRange?.end) return false;
        const start = selectedRange.start < hoveredDate ? selectedRange.start : hoveredDate;
        const end = selectedRange.start < hoveredDate ? hoveredDate : selectedRange.start;
        return date > start && date < end;
    };
    const handleKeyDown = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TUF_Interactive_Calendar_Component$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((e, date)=>{
        const currentIndex = daysInMonth.findIndex((d)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TUF_Interactive_Calendar_Component$2f$node_modules$2f$date$2d$fns$2f$isSameDay$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isSameDay"])(d, date));
        let newIndex = currentIndex;
        switch(e.key){
            case 'ArrowLeft':
                e.preventDefault();
                newIndex = Math.max(0, currentIndex - 1);
                break;
            case 'ArrowRight':
                e.preventDefault();
                newIndex = Math.min(daysInMonth.length - 1, currentIndex + 1);
                break;
            case 'ArrowUp':
                e.preventDefault();
                newIndex = Math.max(0, currentIndex - 7);
                break;
            case 'ArrowDown':
                e.preventDefault();
                newIndex = Math.min(daysInMonth.length - 1, currentIndex + 7);
                break;
            case 'Enter':
            case ' ':
                e.preventDefault();
                onDateClick(date);
                return;
            default:
                return;
        }
        setFocusedIndex(newIndex);
        if (gridRef.current) {
            const cells = gridRef.current.querySelectorAll('button');
            if (cells[newIndex]) {
                cells[newIndex].focus();
            }
        }
    }, [
        daysInMonth,
        onDateClick
    ]);
    const pageVariants = {
        enter: (direction)=>({
                rotateX: direction === 'next' ? -90 : 90,
                opacity: 0,
                transformOrigin: direction === 'next' ? 'top' : 'bottom'
            }),
        center: {
            rotateX: 0,
            opacity: 1
        },
        exit: (direction)=>({
                rotateX: direction === 'next' ? 90 : -90,
                opacity: 0,
                transformOrigin: direction === 'next' ? 'bottom' : 'top'
            })
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TUF_Interactive_Calendar_Component$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "perspective-1000",
        ref: gridRef,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TUF_Interactive_Calendar_Component$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TUF_Interactive_Calendar_Component$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
            mode: "wait",
            custom: direction,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TUF_Interactive_Calendar_Component$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TUF_Interactive_Calendar_Component$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                custom: direction,
                variants: pageVariants,
                initial: "enter",
                animate: "center",
                exit: "exit",
                transition: {
                    duration: 0.6,
                    ease: [
                        0.43,
                        0.13,
                        0.23,
                        0.96
                    ]
                },
                className: "preserve-3d",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TUF_Interactive_Calendar_Component$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-7 gap-1 mb-2",
                        children: [
                            'Sun',
                            'Mon',
                            'Tue',
                            'Wed',
                            'Thu',
                            'Fri',
                            'Sat'
                        ].map((day)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TUF_Interactive_Calendar_Component$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-center text-sm font-semibold text-gray-600 py-2",
                                children: day
                            }, day, false, {
                                fileName: "[project]/Desktop/Projects/TUF_Interactive_Calendar_Component/components/CalendarGrid.tsx",
                                lineNumber: 160,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Projects/TUF_Interactive_Calendar_Component/components/CalendarGrid.tsx",
                        lineNumber: 158,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TUF_Interactive_Calendar_Component$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-7 gap-1",
                        children: daysInMonth.map((date, index)=>{
                            const dayInfo = {
                                date,
                                isCurrentMonth: isCurrentMonth(date),
                                isToday: isToday(date),
                                isWeekend: date.getDay() === 0 || date.getDay() === 6
                            };
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TUF_Interactive_Calendar_Component$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TUF_Interactive_Calendar_Component$2f$components$2f$DayCell$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                dayInfo: dayInfo,
                                selectedRange: selectedRange,
                                hoverDate: hoveredDate,
                                onSelect: ()=>onDateClick(date),
                                onHover: ()=>onDateHover(date),
                                onKeyDown: (e)=>handleKeyDown(e, date),
                                tabIndex: index === focusedIndex ? 0 : -1,
                                dataIndex: index,
                                holidays: []
                            }, date.toISOString(), false, {
                                fileName: "[project]/Desktop/Projects/TUF_Interactive_Calendar_Component/components/CalendarGrid.tsx",
                                lineNumber: 179,
                                columnNumber: 17
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Projects/TUF_Interactive_Calendar_Component/components/CalendarGrid.tsx",
                        lineNumber: 169,
                        columnNumber: 11
                    }, this)
                ]
            }, `${currentDate.getFullYear()}-${currentDate.getMonth()}`, true, {
                fileName: "[project]/Desktop/Projects/TUF_Interactive_Calendar_Component/components/CalendarGrid.tsx",
                lineNumber: 145,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/Desktop/Projects/TUF_Interactive_Calendar_Component/components/CalendarGrid.tsx",
            lineNumber: 144,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/Projects/TUF_Interactive_Calendar_Component/components/CalendarGrid.tsx",
        lineNumber: 143,
        columnNumber: 5
    }, this);
}
}),
"[project]/Desktop/Projects/TUF_Interactive_Calendar_Component/hooks/useThemeExtraction.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useThemeExtraction",
    ()=>useThemeExtraction
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TUF_Interactive_Calendar_Component$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/TUF_Interactive_Calendar_Component/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
/**
 * Generate a lighter tint of a color
 */ function lightenColor(hex, percent) {
    const num = parseInt(hex.replace('#', ''), 16);
    const r = Math.min(255, Math.floor((num >> 16) + (255 - (num >> 16)) * percent));
    const g = Math.min(255, Math.floor((num >> 8 & 0x00FF) + (255 - (num >> 8 & 0x00FF)) * percent));
    const b = Math.min(255, Math.floor((num & 0x0000FF) + (255 - (num & 0x0000FF)) * percent));
    return `#${(r << 16 | g << 8 | b).toString(16).padStart(6, '0')}`;
}
/**
 * Generate a darker shade of a color
 */ function darkenColor(hex, percent) {
    const num = parseInt(hex.replace('#', ''), 16);
    const r = Math.max(0, Math.floor((num >> 16) * (1 - percent)));
    const g = Math.max(0, Math.floor((num >> 8 & 0x00FF) * (1 - percent)));
    const b = Math.max(0, Math.floor((num & 0x0000FF) * (1 - percent)));
    return `#${(r << 16 | g << 8 | b).toString(16).padStart(6, '0')}`;
}
function useThemeExtraction() {
    const [currentImageUrl, setCurrentImageUrl] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TUF_Interactive_Calendar_Component$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [extractedColors, setExtractedColors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TUF_Interactive_Calendar_Component$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        primary: '#3b82f6',
        secondary: '#60a5fa',
        accent: '#2563eb',
        light: '#dbeafe',
        dark: '#1e40af'
    });
    const setImageElement = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TUF_Interactive_Calendar_Component$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((img)=>{
        setCurrentImageUrl(img.src);
        try {
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');
            if (!ctx) return;
            canvas.width = img.width;
            canvas.height = img.height;
            ctx.drawImage(img, 0, 0);
            const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
            const data = imageData.data;
            // Extract top 5 most common colors
            const colorCounts = {};
            // Sample every 10th pixel for performance
            for(let i = 0; i < data.length; i += 40){
                const r = data[i];
                const g = data[i + 1];
                const b = data[i + 2];
                // Skip very dark and very light colors
                const brightness = (r + g + b) / 3;
                if (brightness < 30 || brightness > 240) continue;
                const key = `${r},${g},${b}`;
                colorCounts[key] = (colorCounts[key] || 0) + 1;
            }
            // Get top 5 colors
            const topColors = Object.entries(colorCounts).sort((a, b)=>b[1] - a[1]).slice(0, 5).map(([rgb])=>{
                const [r, g, b] = rgb.split(',').map(Number);
                return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;
            });
            // Apply 60-30-10 color rule
            const primary = topColors[0] || '#3b82f6';
            const secondary = topColors[1] || '#60a5fa';
            const accent = topColors[2] || '#2563eb';
            const light = lightenColor(primary, 0.6);
            const dark = darkenColor(primary, 0.3);
            const colors = {
                primary,
                secondary,
                accent,
                light,
                dark
            };
            setExtractedColors(colors);
            // Apply to CSS variables
            const root = document.documentElement;
            root.style.setProperty('--theme-primary', primary);
            root.style.setProperty('--theme-secondary', secondary);
            root.style.setProperty('--theme-accent', accent);
            root.style.setProperty('--theme-light', light);
            root.style.setProperty('--theme-dark', dark);
        } catch (error) {
            console.warn('Could not extract color from image:', error);
        }
    }, []);
    return {
        currentImageUrl,
        extractedColors,
        setImageElement
    };
}
}),
"[project]/Desktop/Projects/TUF_Interactive_Calendar_Component/components/CalendarApp.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CalendarApp
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TUF_Interactive_Calendar_Component$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/TUF_Interactive_Calendar_Component/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TUF_Interactive_Calendar_Component$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/TUF_Interactive_Calendar_Component/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TUF_Interactive_Calendar_Component$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/TUF_Interactive_Calendar_Component/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TUF_Interactive_Calendar_Component$2f$components$2f$CalendarGrid$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/TUF_Interactive_Calendar_Component/components/CalendarGrid.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TUF_Interactive_Calendar_Component$2f$hooks$2f$useThemeExtraction$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/TUF_Interactive_Calendar_Component/hooks/useThemeExtraction.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TUF_Interactive_Calendar_Component$2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/Projects/TUF_Interactive_Calendar_Component/node_modules/date-fns/format.js [app-ssr] (ecmascript) <locals>");
"use client";
;
;
;
;
;
;
function CalendarApp() {
    const [currentDate, setCurrentDate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TUF_Interactive_Calendar_Component$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(new Date());
    const [direction, setDirection] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TUF_Interactive_Calendar_Component$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('next');
    const [selectedRange, setSelectedRange] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TUF_Interactive_Calendar_Component$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [hoveredDate, setHoveredDate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TUF_Interactive_Calendar_Component$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [backgroundImage, setBackgroundImage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TUF_Interactive_Calendar_Component$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const { currentImageUrl, setImageElement } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TUF_Interactive_Calendar_Component$2f$hooks$2f$useThemeExtraction$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useThemeExtraction"])();
    const [spiralRingCount, setSpiralRingCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TUF_Interactive_Calendar_Component$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(5);
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TUF_Interactive_Calendar_Component$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TUF_Interactive_Calendar_Component$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!containerRef.current) return;
        const resizeObserver = new ResizeObserver((entries)=>{
            for (const entry of entries){
                const width = entry.contentRect.width;
                const rings = Math.max(3, Math.floor(width / 150));
                setSpiralRingCount(Math.min(rings, 8));
            }
        });
        resizeObserver.observe(containerRef.current);
        return ()=>resizeObserver.disconnect();
    }, []);
    const handleImageUpload = (e)=>{
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (event)=>{
                const imageUrl = event.target?.result;
                setBackgroundImage(imageUrl);
                // Load image for color extraction
                const img = new Image();
                img.crossOrigin = "anonymous";
                img.onload = ()=>setImageElement(img);
                img.src = imageUrl;
            };
            reader.readAsDataURL(file);
        }
    };
    const handleDateClick = (date)=>{
        setSelectedRange((prev)=>{
            if (!prev || prev.end) {
                return {
                    start: date,
                    end: null
                };
            } else {
                const start = prev.start;
                return date >= start ? {
                    start,
                    end: date
                } : {
                    start: date,
                    end: start
                };
            }
        });
    };
    const goToPreviousMonth = ()=>{
        setDirection('prev');
        setCurrentDate((prev)=>new Date(prev.getFullYear(), prev.getMonth() - 1));
    };
    const goToNextMonth = ()=>{
        setDirection('next');
        setCurrentDate((prev)=>new Date(prev.getFullYear(), prev.getMonth() + 1));
    };
    const clearSelection = ()=>{
        setSelectedRange(null);
    };
    const formatDateRange = ()=>{
        if (!selectedRange?.start) return 'No date selected';
        const startStr = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TUF_Interactive_Calendar_Component$2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(selectedRange.start, 'MMM d, yyyy');
        if (!selectedRange.end) return startStr;
        const endStr = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TUF_Interactive_Calendar_Component$2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(selectedRange.end, 'MMM d, yyyy');
        return `${startStr} - ${endStr}`;
    };
    const monthYear = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TUF_Interactive_Calendar_Component$2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(currentDate, 'MMMM yyyy');
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TUF_Interactive_Calendar_Component$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4 md:p-8",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TUF_Interactive_Calendar_Component$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-4xl mx-auto",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TUF_Interactive_Calendar_Component$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TUF_Interactive_Calendar_Component$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0,
                        y: -20
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    className: "text-center mb-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TUF_Interactive_Calendar_Component$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-4xl md:text-5xl font-bold text-gray-800 mb-2",
                            children: "Interactive Calendar"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Projects/TUF_Interactive_Calendar_Component/components/CalendarApp.tsx",
                            lineNumber: 101,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TUF_Interactive_Calendar_Component$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-gray-600",
                            children: "Select dates and customize your calendar"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Projects/TUF_Interactive_Calendar_Component/components/CalendarApp.tsx",
                            lineNumber: 104,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/Projects/TUF_Interactive_Calendar_Component/components/CalendarApp.tsx",
                    lineNumber: 96,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TUF_Interactive_Calendar_Component$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TUF_Interactive_Calendar_Component$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                    ref: containerRef,
                    initial: {
                        opacity: 0,
                        scale: 0.95
                    },
                    animate: {
                        opacity: 1,
                        scale: 1
                    },
                    transition: {
                        delay: 0.2
                    },
                    className: "relative bg-paper-light rounded-2xl shadow-2xl overflow-hidden",
                    style: {
                        backgroundImage: backgroundImage ? `url(${backgroundImage})` : undefined,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TUF_Interactive_Calendar_Component$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-[var(--theme-primary,#e0e0e0)] to-[var(--theme-dark,#d0d0d0)] shadow-inner flex flex-col justify-around py-8 z-10",
                            children: Array.from({
                                length: spiralRingCount
                            }).map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TUF_Interactive_Calendar_Component$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-8 h-8 rounded-full mx-auto relative",
                                    style: {
                                        background: `radial-gradient(circle at 30% 30%, var(--theme-light, #f0f0f0), var(--theme-primary, #d0d0d0))`,
                                        boxShadow: 'inset 2px 2px 4px rgba(0,0,0,0.3), 2px 2px 4px rgba(255,255,255,0.5)'
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TUF_Interactive_Calendar_Component$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute inset-2 rounded-full bg-paper-light"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Projects/TUF_Interactive_Calendar_Component/components/CalendarApp.tsx",
                                        lineNumber: 132,
                                        columnNumber: 17
                                    }, this)
                                }, i, false, {
                                    fileName: "[project]/Desktop/Projects/TUF_Interactive_Calendar_Component/components/CalendarApp.tsx",
                                    lineNumber: 124,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Projects/TUF_Interactive_Calendar_Component/components/CalendarApp.tsx",
                            lineNumber: 122,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TUF_Interactive_Calendar_Component$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "ml-12 p-6 md:p-8 bg-white/90 backdrop-blur-sm",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TUF_Interactive_Calendar_Component$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-wrap items-center justify-between mb-6 gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TUF_Interactive_Calendar_Component$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TUF_Interactive_Calendar_Component$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TUF_Interactive_Calendar_Component$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].button, {
                                                    whileHover: {
                                                        scale: 1.05
                                                    },
                                                    whileTap: {
                                                        scale: 0.95
                                                    },
                                                    onClick: goToPreviousMonth,
                                                    className: "px-4 py-2 bg-[var(--theme-primary,#3b82f6)] text-white rounded-lg shadow-md hover:shadow-lg transition-shadow",
                                                    "aria-label": "Previous month",
                                                    children: "← Prev"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/Projects/TUF_Interactive_Calendar_Component/components/CalendarApp.tsx",
                                                    lineNumber: 141,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TUF_Interactive_Calendar_Component$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                    className: "text-2xl md:text-3xl font-bold text-gray-800 min-w-[200px] text-center",
                                                    children: monthYear
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/Projects/TUF_Interactive_Calendar_Component/components/CalendarApp.tsx",
                                                    lineNumber: 151,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TUF_Interactive_Calendar_Component$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TUF_Interactive_Calendar_Component$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].button, {
                                                    whileHover: {
                                                        scale: 1.05
                                                    },
                                                    whileTap: {
                                                        scale: 0.95
                                                    },
                                                    onClick: goToNextMonth,
                                                    className: "px-4 py-2 bg-[var(--theme-primary,#3b82f6)] text-white rounded-lg shadow-md hover:shadow-lg transition-shadow",
                                                    "aria-label": "Next month",
                                                    children: "Next →"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/Projects/TUF_Interactive_Calendar_Component/components/CalendarApp.tsx",
                                                    lineNumber: 155,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/Projects/TUF_Interactive_Calendar_Component/components/CalendarApp.tsx",
                                            lineNumber: 140,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TUF_Interactive_Calendar_Component$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TUF_Interactive_Calendar_Component$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    htmlFor: "bg-upload",
                                                    className: "px-4 py-2 bg-[var(--theme-secondary,#10b981)] text-white rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer inline-block",
                                                    children: "📷 Upload Background"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/Projects/TUF_Interactive_Calendar_Component/components/CalendarApp.tsx",
                                                    lineNumber: 167,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TUF_Interactive_Calendar_Component$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    id: "bg-upload",
                                                    type: "file",
                                                    accept: "image/*",
                                                    onChange: handleImageUpload,
                                                    className: "hidden"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/Projects/TUF_Interactive_Calendar_Component/components/CalendarApp.tsx",
                                                    lineNumber: 173,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/Projects/TUF_Interactive_Calendar_Component/components/CalendarApp.tsx",
                                            lineNumber: 166,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/Projects/TUF_Interactive_Calendar_Component/components/CalendarApp.tsx",
                                    lineNumber: 139,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TUF_Interactive_Calendar_Component$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TUF_Interactive_Calendar_Component$2f$components$2f$CalendarGrid$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    currentDate: currentDate,
                                    selectedRange: selectedRange,
                                    hoveredDate: hoveredDate,
                                    direction: direction,
                                    onDateClick: handleDateClick,
                                    onDateHover: setHoveredDate
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Projects/TUF_Interactive_Calendar_Component/components/CalendarApp.tsx",
                                    lineNumber: 183,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TUF_Interactive_Calendar_Component$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-6 p-4 bg-gray-50 rounded-lg shadow-inner",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TUF_Interactive_Calendar_Component$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-wrap items-center justify-between gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TUF_Interactive_Calendar_Component$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TUF_Interactive_Calendar_Component$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm text-gray-600 mb-1",
                                                        children: "Selected Range:"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/Projects/TUF_Interactive_Calendar_Component/components/CalendarApp.tsx",
                                                        lineNumber: 195,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TUF_Interactive_Calendar_Component$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-lg font-semibold text-gray-800",
                                                        children: formatDateRange()
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/Projects/TUF_Interactive_Calendar_Component/components/CalendarApp.tsx",
                                                        lineNumber: 196,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/Projects/TUF_Interactive_Calendar_Component/components/CalendarApp.tsx",
                                                lineNumber: 194,
                                                columnNumber: 17
                                            }, this),
                                            selectedRange?.start && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TUF_Interactive_Calendar_Component$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$TUF_Interactive_Calendar_Component$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].button, {
                                                whileHover: {
                                                    scale: 1.05
                                                },
                                                whileTap: {
                                                    scale: 0.95
                                                },
                                                onClick: clearSelection,
                                                className: "px-4 py-2 bg-red-500 text-white rounded-lg shadow-md hover:shadow-lg transition-shadow",
                                                children: "Clear Selection"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/Projects/TUF_Interactive_Calendar_Component/components/CalendarApp.tsx",
                                                lineNumber: 202,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/Projects/TUF_Interactive_Calendar_Component/components/CalendarApp.tsx",
                                        lineNumber: 193,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Projects/TUF_Interactive_Calendar_Component/components/CalendarApp.tsx",
                                    lineNumber: 192,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/Projects/TUF_Interactive_Calendar_Component/components/CalendarApp.tsx",
                            lineNumber: 138,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/Projects/TUF_Interactive_Calendar_Component/components/CalendarApp.tsx",
                    lineNumber: 109,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/Projects/TUF_Interactive_Calendar_Component/components/CalendarApp.tsx",
            lineNumber: 95,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/Projects/TUF_Interactive_Calendar_Component/components/CalendarApp.tsx",
        lineNumber: 94,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=Desktop_Projects_TUF_Interactive_Calendar_Component_07x_6yb._.js.map