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
		<div className="flex min-h-screen flex-col bg-[#1f1b17] text-amber-50">
			<div className="absolute inset-0 -z-10">
				<Image
					src={paperTexture}
					alt="Aged paper texture"
					fill
					className="object-cover opacity-[0.18]"
				/>
			</div>
			<header className="relative overflow-hidden border-b border-amber-300/20 bg-[#251f1b]/90">
				<div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#f3e1b833,transparent_65%)]" aria-hidden />
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
								className="rounded-full border border-amber-200/30 px-3 py-1.5 text-amber-100/90 hover:bg-amber-100/10"
							>
								Choose Experience
							</Link>
							<Link
								href="/map"
								className="rounded-full border border-amber-200/30 px-3 py-1.5 text-[#1f1b17] bg-amber-200/90 shadow-lg shadow-amber-900/40 hover:bg-amber-200"
							>
								Interactive Map
							</Link>
						</motion.div>
					</div>
				</div>
			</header>

			<main className="relative flex-1 overflow-hidden">
				<div
					className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-r from-[#1f1b17] via-transparent to-[#1f1b17] opacity-80"
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
							className="group relative flex min-h-[520px] w-[340px] flex-col overflow-hidden rounded-[32px] border border-amber-200/20 bg-[#2a231e]/95 p-8 shadow-2xl shadow-black/50 transition-transform duration-300 hover:-translate-y-2 md:w-[420px]"
						>
							<Image
								src={paperTexture}
								alt="Deckled paper"
								fill
								className="object-cover opacity-25"
							/>
							<div className="absolute inset-0 bg-gradient-to-br from-transparent via-[#1f1b17]/30 to-[#1f1b17]/40" aria-hidden />
							<div className="relative flex flex-1 flex-col gap-5 text-amber-100">
								<div className="flex items-center gap-3 text-xs uppercase tracking-[0.35em] text-amber-200/70">
									<span className="h-px flex-1 bg-blue-200/40" />
									{event.year}
									<span className="h-px flex-1 bg-blue-200/40" />
								</div>
								<h2 className="text-2xl font-semibold text-white drop-shadow-md">
									{event.title}
								</h2>
								<p className="text-sm leading-relaxed text-amber-100/90">
									{event.description}
								</p>
								<div className="relative mt-auto aspect-[4/3] overflow-hidden rounded-2xl border border-amber-200/20 bg-[#1a1714]/95">
									<Image
										src={paperTexture}
										alt="Aged paper detail"
										fill
										className="object-cover opacity-15"
									/>
									<div className="absolute inset-0 grid place-items-center px-6 text-center text-xs text-amber-200/60">
										{event.imageAlt}
									</div>
									<div
										className="absolute inset-0 bg-[radial-gradient(circle_at_center,#fdf5df19,transparent_68%)]"
										aria-hidden
									/>
								</div>
							</div>
							<div className="relative mt-12 flex items-center justify-between px-12 text-xs text-amber-200/60">
								<div className="flex items-center gap-4">
									<span className="inline-flex h-2 w-2 rounded-full bg-amber-300 shadow shadow-amber-600/40" />
									Upcoming: archival photos, oral histories, and immersive panoramas.
								</div>
								<div className="hidden md:flex items-center gap-2">
									<span className="text-amber-200/40">Scroll horizontally</span>
								</div>
							</div>
						</motion.section>
					))}
				</motion.div>
			</main>

			<footer className="border-t border-amber-300/20 bg-[#1a1612]/90">
				<div className="mx-auto max-w-5xl px-6 py-10 flex flex-col gap-4 text-sm text-amber-200/70 sm:flex-row sm:items-center sm:justify-between">
					<p>
						More eras coming soon: bullion bonanza, boomtown society, and the
						preservation years.
					</p>
					<Link
						href="/"
						className="text-amber-100/80 hover:text-amber-100"
					>
						Back to experience choose
					</Link>
				</div>
			</footer>
		</div>
	)
}
