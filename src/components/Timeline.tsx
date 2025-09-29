'use client'

import phases from '@/data/phases.json'

export default function Timeline({ activePhaseId, onPhaseSelect }: {
  activePhaseId: string
  onPhaseSelect: (id: string) => void
}) {
  return (
    <div className="h-16 border-b border-gray-200 flex items-center px-4 bg-white/80 backdrop-blur">
      <div className="flex space-x-4">
        {phases.phases.map((phase) => (
          <button
            key={phase.id}
            onClick={() => onPhaseSelect(phase.id)}
            className={`px-4 py-2 rounded transition-colors ${
              activePhaseId === phase.id
                ? 'bg-blue-600 text-white shadow-sm'
                : 'hover:bg-gray-100 text-gray-700'
            }`}
          >
            <span className="text-sm font-semibold leading-none">{phase.name}</span>
          </button>
        ))}
      </div>
    </div>
  )
}