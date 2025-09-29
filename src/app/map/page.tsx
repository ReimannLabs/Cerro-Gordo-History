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
    <main className="flex h-screen flex-col bg-[#f0e7d8] text-[#2e2216]">
      <header className="flex items-center justify-between border-b border-amber-900/20 bg-[#f6f1e6]/95 px-6 py-4 backdrop-blur">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-[#8a6a41]">Cerro Gordo</p>
          <h1 className="font-pt-serif text-lg font-semibold">Interactive Map Experience</h1>
        </div>
        <div className="flex flex-wrap gap-3 text-xs font-semibold uppercase tracking-[0.18em]">
          <Link
            href="/"
            className="rounded-full border border-amber-900/30 px-3 py-1.5 text-[#4a3724] hover:bg-amber-200/40"
          >
            Choose Experience
          </Link>
          <Link
            href="/history"
            className="rounded-full bg-[#7f5933] px-3 py-1.5 text-amber-50 shadow hover:bg-[#6d4c2b]"
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
