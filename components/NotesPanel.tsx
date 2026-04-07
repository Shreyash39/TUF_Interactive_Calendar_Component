"use client"

import React, { useState, useEffect } from 'react'
import { format } from 'date-fns'
import { DateRange, Note } from '@/types'
import { Plus, Trash2 } from 'lucide-react'

interface NotesPanelProps {
  selectedRange: DateRange | null
}

export default function NotesPanel({ selectedRange }: NotesPanelProps) {
  const [notes, setNotes] = useState<Note[]>([])
  const [newNote, setNewNote] = useState('')

  // Load notes from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('calendar-notes')
    if (saved) {
      setNotes(JSON.parse(saved))
    }
  }, [])

  // Save notes to localStorage
  useEffect(() => {
    localStorage.setItem('calendar-notes', JSON.stringify(notes))
  }, [notes])

  const handleAddNote = () => {
    if (!newNote.trim() || !selectedRange?.start) return

    const note: Note = {
      id: Date.now().toString(),
      date: format(selectedRange.start, 'yyyy-MM-dd'),
      content: newNote,
      createdAt: new Date().toISOString(),
    }

    setNotes(prev => [note, ...prev])
    setNewNote('')
  }

  const handleDeleteNote = (id: string) => {
    setNotes(prev => prev.filter(note => note.id !== id))
  }

  const filteredNotes = selectedRange?.start
    ? notes.filter(note => {
        const noteDate = note.date
        const startDate = format(selectedRange.start, 'yyyy-MM-dd')
        const endDate = selectedRange.end ? format(selectedRange.end, 'yyyy-MM-dd') : startDate
        return noteDate >= startDate && noteDate <= endDate
      })
    : notes

  return (
    <div className="bg-white/50 rounded-lg shadow-inner-paper p-4 h-full">
      <h3 className="text-lg font-bold text-gray-800 mb-4">Notes</h3>

      {selectedRange?.start && (
        <div className="mb-4 p-3 bg-blue-50 rounded-lg">
          <p className="text-sm text-gray-600">
            Selected: {format(selectedRange.start, 'MMM d, yyyy')}
            {selectedRange.end && ` - ${format(selectedRange.end, 'MMM d, yyyy')}`}
          </p>
        </div>
      )}

      {/* Add Note */}
      <div className="mb-4">
        <textarea
          value={newNote}
          onChange={(e) => setNewNote(e.target.value)}
          placeholder={selectedRange?.start ? "Add a note..." : "Select a date to add notes"}
          disabled={!selectedRange?.start}
          className="w-full p-2 border border-gray-300 rounded-lg resize-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100"
          rows={3}
        />
        <button
          onClick={handleAddNote}
          disabled={!newNote.trim() || !selectedRange?.start}
          className="mt-2 w-full flex items-center justify-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
        >
          <Plus className="w-4 h-4" />
          Add Note
        </button>
      </div>

      {/* Notes List */}
      <div className="space-y-2 max-h-96 overflow-y-auto">
        {filteredNotes.length === 0 ? (
          <p className="text-center text-gray-500 py-8">No notes yet</p>
        ) : (
          filteredNotes.map(note => (
            <div key={note.id} className="bg-white p-3 rounded-lg shadow-sm border border-gray-200">
              <div className="flex justify-between items-start mb-2">
                <span className="text-xs font-semibold text-blue-600">
                  {format(new Date(note.date), 'MMM d, yyyy')}
                </span>
                <button
                  onClick={() => handleDeleteNote(note.id)}
                  className="text-red-500 hover:text-red-700 transition-colors"
                  aria-label="Delete note"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
              <p className="text-sm text-gray-700 whitespace-pre-wrap">{note.content}</p>
            </div>
          ))
        )}
      </div>
    </div>
  )
}
