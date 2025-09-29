'use client'

import { useState } from 'react'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import Timeline from '@/components/Timeline'
import Sidebar from '@/components/Sidebar'
import phases from '@/data/phases.json'

// Dynamically import the Map component to avoid SSR issues with Leaflet
const Map = dynamic(() => import('@/components/Map'), {
  ssr: false,
  loading: () => <div className="h-screen flex items-center justify-center">Loading map...</div>
})

export default function Home() {
  const [activePhaseId, setActivePhaseId] = useState(phases.phases[0]?.id ?? '')

  return (
    <main className="flex flex-col h-screen bg-slate-50">
      <header className="flex items-center justify-between border-b border-slate-200/80 bg-white/70 px-6 py-4">
        <h1 className="text-lg font-semibold text-slate-800">
          Cerro Gordo Interactive Map
        </h1>
        <Link
          href="/history"
          className="rounded-full bg-slate-900 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-white shadow hover:bg-slate-700"
        >
          Enter the History Gallery
        </Link>
      </header>
      <Timeline activePhaseId={activePhaseId} onPhaseSelect={setActivePhaseId} />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar activePhaseId={activePhaseId} />
        <Map activePhaseId={activePhaseId} />
      </div>
    </main>
  )
}
