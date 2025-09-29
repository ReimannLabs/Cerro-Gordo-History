'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import paperTexture from '@/app/pictures/papertexture.png'

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
			<header className="relative overflow-hidden border-b border-amber-200/30 bg-[#1f1b17]/95 text-amber-50">
				<Image
					src={paperTexture}
					alt="Aged paper background"
					fill
					className="absolute inset-0 object-cover opacity-[0.15]"
				/>
				<div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#f6e7c733,transparent_70%)]" aria-hidden />
				<div className="relative mx-auto max-w-6xl px-6 py-16 lg:py-24">
					<motion.div
						initial={{ opacity: 0, y: 24 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, ease: 'easeOut' }}
						className="space-y-8 text-center"
					>
						<div className="mx-auto flex max-w-5xl flex-col gap-4">
							<p className="text-xs uppercase tracking-[0.6em] text-amber-200/90">
								The Cerro Gordo Ledger
							</p>
							<div className="mx-auto flex items-center justify-center gap-4 text-amber-200/70">
								<span className="h-px w-16 bg-amber-200/40" />
								<span className="font-serif text-sm tracking-[0.4em]">Est. 1865</span>
								<span className="h-px w-16 bg-amber-200/40" />
							</div>
							<h1 className="font-serif uppercase text-4xl tracking-[0.16em] sm:text-5xl lg:text-6xl font-pt-serif">
								Chronicles of the Mountain Camp
							</h1>
							<p className="mx-auto max-w-3xl text-sm leading-relaxed text-amber-100/85 sm:text-base">
								Dispatches, sketches, and recollections from Cerro Gordo’s richest years. Move through time with curated accounts
								of the people, structures, and events that forged this high-desert settlement.
							</p>
						</div>
						<div className="flex flex-wrap justify-center gap-3 text-xs font-semibold uppercase tracking-[0.18em]">
							<Link
								href="/"
								className="rounded-full border border-amber-200/40 px-4 py-2 text-amber-100/80 hover:bg-amber-100/10"
							>
								Back to Experience Picker
							</Link>
							<Link
								href="/map"
								className="rounded-full bg-amber-400/90 px-4 py-2 text-[#2d2113] shadow-lg shadow-amber-900/40 hover:bg-amber-300"
							>
								Interactive Map
							</Link>
						</div>
					</motion.div>
				</div>
			</header>

			<main className="relative flex-1 overflow-hidden bg-[#1a1612]">
				<Image
					src={paperTexture}
					alt="Paper texture"
					fill
					className="absolute inset-0 object-cover opacity-[0.08]"
				/>
				<div
					className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-r from-[#1a1612] via-transparent to-[#1a1612] opacity-80"
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
							className="group relative flex min-h-[540px] w-[340px] flex-col overflow-hidden rounded-[30px] border border-amber-200/20 bg-[#262019]/90 p-8 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.75)] transition-transform duration-300 hover:-translate-y-3 md:w-[420px]"
						>
							<div
								className={`absolute inset-0 bg-gradient-to-br ${event.color} opacity-10 transition-opacity duration-300 group-hover:opacity-30`}
								aria-hidden
							/>
							<div className="relative flex flex-1 flex-col gap-6 text-amber-50">
								<div className="flex items-center gap-3 text-xs uppercase tracking-[0.35em] text-amber-200/75">
									<span className="h-px flex-1 bg-amber-200/40" />
									{event.year}
									<span className="h-px flex-1 bg-amber-200/40" />
								</div>
								<h2 className="font-pt-serif text-2xl tracking-[0.1em] text-amber-50">
									{event.title}
								</h2>
								<p className="text-sm leading-relaxed text-amber-100/85">
									{event.description}
								</p>
								<div className="flex flex-wrap gap-3 text-[0.68rem] uppercase tracking-[0.2em] text-amber-200/60">
									<span className="rounded-full border border-amber-200/25 px-3 py-1">Primary sources</span>
									<span className="rounded-full border border-amber-200/25 px-3 py-1">Eyewitness accounts</span>
									<span className="rounded-full border border-amber-200/25 px-3 py-1">Archival imagery</span>
								</div>
								<div className="relative mt-auto aspect-[4/3] overflow-hidden rounded-2xl border border-amber-200/20 bg-[#15110d]/80">
									<Image
										src={paperTexture}
										alt="paper detail"
										fill
										className="object-cover opacity-[0.12]"
									/>
									<div className="absolute inset-0 grid place-items-center px-6 text-center text-xs text-amber-200/60">
										{event.imageAlt}
									</div>
									<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#fff5dd1f,transparent_70%)]" aria-hidden />
								</div>
							</div>
							<div className="relative mt-6 flex items-center gap-4 text-xs text-amber-200/60">
								<span className="inline-flex h-2 w-2 rounded-full bg-amber-300 shadow shadow-amber-600/40" />
								Upcoming: archival photos, oral histories, and immersive panoramas.
							</div>
						</motion.section>
					))}
				</motion.div>
			</main>

			<footer className="border-t border-amber-200/20 bg-[#19130f]/95 text-amber-100/75">
				<div className="mx-auto max-w-5xl px-6 py-10 flex flex-col gap-4 text-sm sm:flex-row sm:items-center sm:justify-between">
					<p>
						More eras coming soon: bullion bonanza, boomtown society, and the preservation years.
					</p>
					<Link href="/map" className="text-amber-100/90 hover:text-amber-50">
						Visit the map experience →
					</Link>
				</div>
			</footer>
		</div>
	)
}
