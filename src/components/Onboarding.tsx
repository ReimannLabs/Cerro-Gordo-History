'use client'

import { useEffect, useState } from 'react'

const COOKIE_NAME = 'cerroGordoOnboarded'
const ONE_YEAR_SECONDS = 60 * 60 * 24 * 365

function hasOnboardingCookie() {
  if (typeof document === 'undefined') return false
  return document.cookie.split('; ').some((entry) => entry.startsWith(`${COOKIE_NAME}=`))
}

function setOnboardingCookie() {
  if (typeof document === 'undefined') return
  document.cookie = `${COOKIE_NAME}=true; max-age=${ONE_YEAR_SECONDS}; path=/`
}

export default function Onboarding() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (!hasOnboardingCookie()) {
      setIsOpen(true)
    }
  }, [])

  useEffect(() => {
    if (typeof document === 'undefined') return
    if (isOpen) {
      document.body.classList.add('overflow-hidden')
    } else {
      document.body.classList.remove('overflow-hidden')
    }
    return () => {
      document.body.classList.remove('overflow-hidden')
    }
  }, [isOpen])

  const handleDismiss = () => {
    setOnboardingCookie()
    setIsOpen(false)
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[2000] flex items-center justify-center bg-slate-900/80 backdrop-blur">
      <div className="max-w-lg w-full mx-4 rounded-2xl bg-white shadow-2xl border border-slate-200 overflow-hidden">
        <div className="px-6 pt-6 pb-4 space-y-3">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">Welcome to Cerro Gordo</p>
          <h1 className="text-2xl font-bold text-slate-900">Explore the Mining Camp Through Time</h1>
          <p className="text-sm text-slate-600 leading-relaxed">
            Use the timeline to jump between eras, tap markers on the map for stories about buildings and people,
            and browse the sidebar for deeper context. Start with the discovery era map and follow Cerro Gordo’s rise.
          </p>
        </div>
        <div className="px-6 pb-6 flex flex-wrap gap-3 justify-end bg-slate-50">
          <button
            type="button"
            onClick={handleDismiss}
            className="px-4 py-2 text-sm font-medium text-slate-500 hover:text-slate-700"
          >
            Skip for now
          </button>
          <button
            type="button"
            onClick={handleDismiss}
            className="px-5 py-2 rounded-md bg-blue-600 text-white text-sm font-semibold shadow-sm hover:bg-blue-700"
          >
            Start exploring
          </button>
        </div>
      </div>
    </div>
  )
}
