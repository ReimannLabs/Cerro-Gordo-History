'use client'

import { useState } from 'react'
import dynamic from 'next/dynamic'
import Timeline from '@/components/Timeline'
import Sidebar from '@/components/Sidebar'
import Onboarding from '@/components/Onboarding'
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
      <Onboarding />
      <Timeline activePhaseId={activePhaseId} onPhaseSelect={setActivePhaseId} />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar activePhaseId={activePhaseId} />
        <Map activePhaseId={activePhaseId} />
      </div>
    </main>
  )
}
