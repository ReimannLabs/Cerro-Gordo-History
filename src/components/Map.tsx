'use client'

import { MapContainer, ImageOverlay } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import { LatLngBounds, LatLng } from 'leaflet'
import { useMemo } from 'react'
import phases from '@/data/phases.json'

type Phase = (typeof phases.phases)[number]

const DEFAULT_BOUNDS: LatLngBounds = new LatLngBounds(
  new LatLng(0, 0),    // Southwest corner
  new LatLng(100, 100) // Northeast corner
)

export default function Map({ activePhaseId }: { activePhaseId: Phase['id'] }) {
  const phase = phases.phases.find((p) => p.id === activePhaseId) ?? phases.phases[0]
  const bounds = useMemo(() => DEFAULT_BOUNDS, [])

  return (
    <div className="flex-1 relative">
      <MapContainer
        bounds={bounds}
        style={{ height: '100%', width: '100%' }}
        zoomControl={true}
        scrollWheelZoom={true}
      >
        <ImageOverlay
          bounds={bounds}
          url={phase.mapPath}
        />
        {/* POI markers will be added here */}
      </MapContainer>
    </div>
  )
}