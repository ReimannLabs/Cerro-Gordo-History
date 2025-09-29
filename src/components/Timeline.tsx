'use client'

import phases from '@/data/phases.json'

export default function Timeline({ activePhaseId, onPhaseSelect }: {
  activePhaseId: string
  onPhaseSelect: (id: string) => void
}) {
  if (!phases.phases.length) {
    return null
  }

  return (
    <div className="h-16 border-b border-amber-200/20 flex items-center px-4 bg-[#f6f1e6]/90">
      <div className="flex gap-3">
        {phases.phases.map((phase) => (
          <button
            key={phase.id}
            type="button"
            onClick={() => onPhaseSelect(phase.id)}
            className={`px-4 py-2 rounded-full border text-sm font-semibold transition-colors ${
              activePhaseId === phase.id
                ? 'bg-[#7f5933] border-[#7f5933] text-amber-50 shadow'
                : 'border-amber-900/30 text-[#4a3724] hover:bg-amber-200/40'
            }`}
          >
            {phase.name}
          </button>
        ))}
      </div>
    </div>
  )
}