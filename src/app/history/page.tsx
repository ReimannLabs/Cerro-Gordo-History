'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

const events = [
	{
		id: 'discovery',
		title: 'Discovery on Buena Vista Peak',
		year: '1865',
		description:
			'Pablo Flores discovers rich silver-lead ore and builds the camp’s first crude furnaces, setting Cerro Gordo’s story in motion.',
		imageAlt: 'Discovery era illustration placeholder',
		color: 'from-amber-200 via-amber-100 to-white',
	},
	{
		id: 'belshaw-road',
		title: 'Belshaw’s Toll Road Opens',
		year: '1872',
		description:
			'Mortimer Belshaw completes the Yellow Grade Road, connecting the mines to Owens Lake and accelerating shipments to Los Angeles.',
		imageAlt: 'Yellow Grade Road construction placeholder',
		color: 'from-slate-200 via-slate-100 to-white',
	},
	{
		id: 'zinc-revival',
		title: 'Zinc Revival Sparks New Era',
		year: '1913',
		description:
			'L.D. Gordon reorganizes operations and brings electricity, inaugurating Cerro Gordo’s zinc-driven resurgence.',
		imageAlt: 'Zinc era operations placeholder',
		color: 'from-blue-200 via-blue-100 to-white',
	},
]

const timelineContainer = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.2,
			delayChildren: 0.1,
		},
	},
}

const cardVariants = {
	hidden: { opacity: 0, y: 32 },
	visible: { opacity: 1, y: 0 },
}

export default function HistoryPage() {
	return (
		<div className="flex min-h-screen flex-col bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100">
			<header className="relative overflow-hidden border-b border-white/10">
				<div
					className="absolute inset-0 bg-[radial-gradient(circle_at_top,#ffffff22,transparent_60%)]"
					aria-hidden
				/>
				<div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-16 lg:py-24">
					<div className="flex flex-wrap items-center justify-between gap-4">
						<motion.div
							initial={{ opacity: 0, y: 24 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, ease: 'easeOut' }}
							className="space-y-6"
						>
							<p className="text-sm uppercase tracking-[0.35em] text-blue-200/80">
								Chronicles of Cerro Gordo
							</p>
							<h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
								The Mining Camp That Fed a City
							</h1>
							<p className="max-w-2xl text-base sm:text-lg text-slate-300/90 leading-relaxed">
								Trace Cerro Gordo’s evolution from a remote discovery to a
								powerhouse of silver, lead, and zinc. Scroll through defining
								moments, immersive imagery, and personal stories that shaped this
								high-desert camp.
							</p>
						</motion.div>
						<motion.div
							initial={{ opacity: 0, y: 12 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, ease: 'easeOut', delay: 0.15 }}
							className="flex flex-wrap gap-3 text-xs font-semibold uppercase tracking-[0.18em]"
						>
							<Link
								href="/"
								className="rounded-full border border-white/20 px-3 py-1.5 text-slate-200/90 hover:bg-white/10"
							>
								Choose Experience
							</Link>
							<Link
								href="/map"
								className="rounded-full bg-blue-500/90 px-3 py-1.5 text-white shadow-lg shadow-blue-500/30 hover:bg-blue-500"
							>
								Interactive Map
							</Link>
						</motion.div>
					</div>
				</div>
			</header>

			<main className="relative flex-1 overflow-hidden">
				<div
					className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-r from-slate-950 via-transparent to-slate-950 opacity-70"
					aria-hidden
				/>
				<motion.div
					className="relative z-20 flex h-full snap-x snap-mandatory items-stretch gap-10 overflow-x-auto px-6 py-16 md:px-12"
					variants={timelineContainer}
					initial="hidden"
					animate="visible"
				>
					{events.map((event) => (
						<motion.section
							key={event.id}
							variants={cardVariants}
							className="group relative flex h-[520px] w-[340px] flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-transform duration-300 hover:-translate-y-2 md:w-[420px]"
						>
							<div
								className={`absolute inset-0 bg-gradient-to-br ${event.color} opacity-20 transition-opacity duration-300 group-hover:opacity-40`}
								aria-hidden
							/>
							<div className="relative flex flex-1 flex-col gap-6">
								<div className="flex items-center gap-3 text-xs uppercase tracking-[0.35em] text-blue-200/75">
									<span className="h-px flex-1 bg-blue-200/40" />
									{event.year}
									<span className="h-px flex-1 bg-blue-200/40" />
								</div>
								<h2 className="text-2xl font-semibold text-white drop-shadow-md">
									{event.title}
								</h2>
								<p className="text-sm leading-relaxed text-slate-200/90">
									{event.description}
								</p>
								<div className="relative mt-auto aspect-[4/3] overflow-hidden rounded-2xl border border-white/15 bg-slate-950/60">
									<div className="absolute inset-0 grid place-items-center px-6 text-center text-xs text-slate-500">
										{event.imageAlt}
									</div>
									<div
										className="absolute inset-0 bg-[radial-gradient(circle_at_center,#ffffff15,transparent_65%)]"
										aria-hidden
									/>
								</div>
							</div>
							<div className="relative mt-6 flex items-center gap-4 text-xs text-slate-300/70">
								<span className="inline-flex h-2 w-2 rounded-full bg-blue-300 shadow shadow-blue-500/50" />
								Upcoming: archival photos, audio histories, and immersive panoramas.
							</div>
						</motion.section>
					))}
				</motion.div>
			</main>

			<footer className="border-t border-white/10 bg-slate-950/80">
				<div className="mx-auto max-w-5xl px-6 py-10 flex flex-col gap-4 text-sm text-slate-400/80 sm:flex-row sm:items-center sm:justify-between">
					<p>
						More eras coming soon: bullion bonanza, boomtown society, and the
						preservation years.
					</p>
					<Link
						href="/"
						className="text-blue-200/80 hover:text-blue-100"
					>
						Back to timeline & map
					</Link>
				</div>
			</footer>
		</div>
	)
}
