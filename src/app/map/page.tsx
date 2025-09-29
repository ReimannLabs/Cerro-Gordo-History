'use client'

import { useState } from 'react'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import Timeline from '@/components/Timeline'
import Sidebar from '@/components/Sidebar'
import phases from '@/data/phases.json'

const MapView = dynamic(() => import('@/components/Map'), {
  ssr: false,
  loading: () => <div className="h-screen flex items-center justify-center">Loading map...</div>
})

export default function MapPage() {
  const [activePhaseId, setActivePhaseId] = useState(phases.phases[0]?.id ?? '')

  return (
    <main className="flex h-screen flex-col bg-slate-50">
      <header className="flex items-center justify-between border-b border-slate-200/80 bg-white/80 px-6 py-4 backdrop-blur">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Cerro Gordo</p>
          <h1 className="text-lg font-semibold text-slate-800">Interactive Map Experience</h1>
        </div>
        <div className="flex flex-wrap gap-3 text-xs font-semibold uppercase tracking-[0.18em]">
          <Link
            href="/"
            className="rounded-full border border-slate-300 px-3 py-1.5 text-slate-600 hover:border-slate-400 hover:text-slate-800"
          >
            Choose Experience
          </Link>
          <Link
            href="/history"
            className="rounded-full bg-slate-900 px-3 py-1.5 text-white shadow hover:bg-slate-700"
          >
            History Timeline
          </Link>
        </div>
      </header>
      <Timeline activePhaseId={activePhaseId} onPhaseSelect={setActivePhaseId} />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar activePhaseId={activePhaseId} />
        <MapView activePhaseId={activePhaseId} />
      </div>
    </main>
  )
}
