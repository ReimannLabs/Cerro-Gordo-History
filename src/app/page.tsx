'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export default function ExperienceChooser() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-slate-950 text-slate-100">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#4f83ff33,transparent_65%)]" aria-hidden />
      <div className="absolute inset-y-0 left-0 w-1/3 bg-[radial-gradient(circle_at_center,#f5deb333,transparent_70%)] opacity-40" aria-hidden />
      <div className="absolute inset-y-0 right-0 w-1/3 bg-[radial-gradient(circle_at_center,#76a9ff22,transparent_70%)] opacity-30" aria-hidden />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="relative z-10 mx-auto flex max-w-5xl flex-col gap-12 px-6 text-center"
      >
        <div className="space-y-4">
          <p className="text-xs uppercase tracking-[0.45em] text-blue-200/80">Choose Your Journey</p>
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
            Cerro Gordo, Two Ways to Explore
          </h1>
          <p className="mx-auto max-w-2xl text-sm text-slate-300/90 sm:text-base">
            Start with an interactive map of the mining camp or dive into a cinematic timeline of its defining eras. You can switch
            anytime from within each experience.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <Link href="/map" className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 text-left backdrop-blur">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-transparent" aria-hidden />
            <div className="relative flex flex-col gap-4">
              <span className="inline-flex w-fit rounded-full border border-white/20 px-3 py-1 text-xs uppercase tracking-[0.3em] text-blue-200/90">
                Interactive
              </span>
              <h2 className="text-2xl font-semibold text-white">Map Experience</h2>
              <p className="text-sm text-slate-200/85">
                Pan, zoom, and reveal stories by tapping points of interest across Cerro Gordo. Follow a timeline of site phases to see
                how the camp evolved.
              </p>
              <div className="flex items-center text-sm font-semibold text-blue-200/80 group-hover:text-blue-100">
                Start exploring
                <span className="ml-2 inline-flex h-6 w-6 items-center justify-center rounded-full border border-blue-200/40 text-xs">
                  →
                </span>
              </div>
            </div>
          </Link>

          <Link href="/history" className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 text-left backdrop-blur">
            <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 via-transparent to-transparent" aria-hidden />
            <div className="relative flex flex-col gap-4">
              <span className="inline-flex w-fit rounded-full border border-white/20 px-3 py-1 text-xs uppercase tracking-[0.3em] text-amber-200/90">
                Narrative
              </span>
              <h2 className="text-2xl font-semibold text-white">History Timeline</h2>
              <p className="text-sm text-slate-200/85">
                Scroll through pivotal moments with rich visuals and stories—from discovery through boom years to preservation—in a
                cinematic timeline format.
              </p>
              <div className="flex items-center text-sm font-semibold text-amber-200/80 group-hover:text-amber-100">
                Enter the timeline
                <span className="ml-2 inline-flex h-6 w-6 items-center justify-center rounded-full border border-amber-200/40 text-xs">
                  →
                </span>
              </div>
            </div>
          </Link>
        </div>
      </motion.div>
    </main>
  )
}
