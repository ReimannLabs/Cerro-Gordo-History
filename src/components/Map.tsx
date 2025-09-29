'use client'

import { useEffect, useState } from 'react'
import { MapContainer, ImageOverlay } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import { CRS, LatLngBounds, latLng } from 'leaflet'
import phases from '@/data/phases.json'

type Phase = (typeof phases.phases)[number]

const DEFAULT_BOUNDS: LatLngBounds = new LatLngBounds(latLng(0, 0), latLng(1000, 1000))

export default function Map({ activePhaseId }: { activePhaseId: Phase['id'] }) {
  const phase = phases.phases.find((p) => p.id === activePhaseId) ?? phases.phases[0]
  const [bounds, setBounds] = useState<LatLngBounds>(DEFAULT_BOUNDS)

  useEffect(() => {
    if (!phase) return

    let cancelled = false
    const image = new window.Image()
    image.src = phase.mapPath
    image.onload = () => {
      if (cancelled) return
      const { width, height } = image
      if (!width || !height) return
      setBounds(new LatLngBounds(latLng(0, 0), latLng(height, width)))
    }

    return () => {
      cancelled = true
    }
  }, [phase])

  return (
    <div className="flex-1 relative">
      <MapContainer
        key={phase.id}
        crs={CRS.Simple}
        bounds={bounds}
        style={{ height: '100%', width: '100%' }}
        boundsOptions={{ padding: [0, 0] }}
        zoomControl
        scrollWheelZoom
      >
        <ImageOverlay bounds={bounds} url={phase.mapPath} />
        {/* POI markers will be added here */}
      </MapContainer>
    </div>
  )
}