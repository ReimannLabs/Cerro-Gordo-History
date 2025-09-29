'use client'

import { useMemo, useState } from 'react'
import phases from '@/data/phases.json'

const TABS = ['buildings', 'people', 'business'] as const

type TabKey = (typeof TABS)[number]

const PEOPLE = [
  {
    name: 'Pablo Flores',
    description:
      'Mexican prospector credited with the 1865 discovery and first smelting on Buena Vista Peak.'
  },
  {
    name: 'Victor Beaudry',
    description:
      'Merchant-turned-mine magnate; built smelters, acquired key claims, and ran the Beaudry Store.'
  },
  {
    name: 'Mortimer W. Belshaw',
    description:
      'Mining engineer and financier; co-owned the Union Mine and built the Yellow Grade toll road and Belshaw smelter.'
  },
  {
    name: 'Remi Nadeau',
    description:
      'Freight king whose wagon teams moved Cerro Gordo bullion to Los Angeles, fueling both the camp and the city.'
  },
  {
    name: 'James (J.G.) Brady',
    description:
      'Superintendent of the Owens Lake Silver-Lead Co.; founded Swansea and operated lakeshore smelting and the steamer Bessie Brady.'
  },
  {
    name: 'Pierre Desormeaux',
    description:
      'Early furnace builder who collaborated with Victor Beaudry on Cerro Gordo smelters.'
  },
  {
    name: 'L.D. (Louis D.) Gordon',
    description:
      'Leader of the early-1900s zinc revival; reorganized as Cerro Gordo Mines Co. and brought electricity in 1916.'
  },
  {
    name: 'E. McGrath',
    description:
      'Four Metals Co. manager during the 1908–1912 tramway and smelter expansion period.'
  },
  {
    name: 'Jody Stewart (Patterson)',
    description:
      'Owner and restorer from the 1970s–2001 who stabilized key buildings and opened the museum and lodging.'
  },
  {
    name: 'Mike Patterson',
    description:
      'Partner with Jody Stewart in ongoing restorations and operations.'
  },
  {
    name: 'John & Roxie Bowden',
    description:
      'Caretakers who continued preservation efforts after Stewart’s passing.'
  },
  {
    name: 'Brent Underwood',
    description:
      'Current owner (since 2018) leading preservation and rebuilding of the American Hotel after the 2020 fire.'
  }
]

const BUILDINGS = [
  {
    name: 'American Hotel',
    description:
      '1871 landmark hotel and saloon, currently being rebuilt after the June 15, 2020 fire.'
  },
  {
    name: 'Beaudry’s General Store / Museum',
    description:
      'Historic mercantile turned museum showcasing Cerro Gordo artifacts.'
  },
  {
    name: 'Belshaw House',
    description:
      'Residence of Mortimer Belshaw overlooking the camp.'
  },
  {
    name: 'L.D. Gordon House',
    description:
      'Large two-story home from the zinc era in the early 1900s.'
  },
  {
    name: 'Bunkhouse',
    description:
      '1904 structure providing lodging for miners and today’s guests.'
  },
  {
    name: 'Assay Office',
    description:
      'Facility for testing ore, situated near the historic “Lola’s Palace of Pleasure” locale.'
  },
  {
    name: 'Crapo & Hunter Houses',
    description:
      'Notable residences adjacent to the hotel block in period photographs.'
  },
  {
    name: 'Union Mine Hoist House',
    description:
      'Headworks area supporting primary operations of the Union Mine above town.'
  },
  {
    name: 'Charcoal Kilns',
    description:
      'Scattered production sites supplying fuel for Cerro Gordo smelters.'
  },
  {
    name: 'Beaudry & Belshaw Smelter Ruins',
    description:
      'Stone chimney and furnace remains along the Yellow Grade approach and near town.'
  },
  {
    name: 'Yellow Grade Road',
    description:
      'Belshaw’s toll road linking Cerro Gordo to Owens Lake transport hubs.'
  },
  {
    name: 'Aerial Tramway Remnants',
    description:
      'Vestiges of the 1908–1909 Four Metals tram descending to Keeler.'
  },
  {
    name: 'Swansea & Keeler Smelter Sites',
    description:
      'Owens Lake shoreline facilities that processed and shipped Cerro Gordo ore.'
  }
]

const BUSINESS_PLACEHOLDER =
  'Add notable Cerro Gordo businesses, commercial ventures, and support enterprises here.'

export default function Sidebar({ activePhaseId }: { activePhaseId: string }) {
  const [activeTab, setActiveTab] = useState<TabKey>('buildings')
  const activePhase = useMemo(() => phases.phases.find((p) => p.id === activePhaseId), [activePhaseId])

  return (
    <div className="w-80 border-r border-gray-200 flex flex-col">
      <div className="border-b border-gray-200">
        <nav className="flex" aria-label="Tabs">
          {TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`
                flex-1 py-4 px-1 text-center border-b-2
                ${activeTab === tab 
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}
              `}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </nav>
      </div>
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        <header className="space-y-1">
          <h2 className="text-sm font-semibold text-gray-900">
            Phase: {activePhaseId}
          </h2>
          <p className="text-xs text-gray-500">
            {activePhase?.description ?? 'Explore Cerro Gordo across time.'}
          </p>
        </header>

        {activeTab === 'people' &&
          PEOPLE.map((person) => (
            <article key={person.name} className="space-y-1">
              <h3 className="text-sm font-semibold text-gray-900">{person.name}</h3>
              <p className="text-sm text-gray-600">{person.description}</p>
            </article>
          ))}

        {activeTab === 'buildings' &&
          BUILDINGS.map((building) => (
            <article key={building.name} className="space-y-1">
              <h3 className="text-sm font-semibold text-gray-900">{building.name}</h3>
              <p className="text-sm text-gray-600">{building.description}</p>
            </article>
          ))}

        {activeTab === 'business' && (
          <p className="text-sm text-gray-600">{BUSINESS_PLACEHOLDER}</p>
        )}
      </div>
    </div>
  )
}