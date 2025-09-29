'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import heroBackground from '@/app/pictures/cerrogordopic.jpg'
import paperTexture from '@/app/pictures/papertexture.png'

const options = [
	{
		href: '/map',
		badge: 'Interactive',
		title: 'Map Experience',
		description:
			'Pan across Cerro Gordo and uncover stories by selecting points of interest. Follow the evolving layout through each documented era.',
		cta: 'Enter Map',
		accent: 'bg-blue-900/30',
	},
	{
		href: '/history',
		badge: 'Narrative',
		title: 'Historical Timeline',
		description:
			'Walk through defining moments with imagery and narrative detail, from discovery through the zinc revival and ongoing preservation.',
		cta: 'Enter Timeline',
		accent: 'bg-amber-900/30',
	},
]

export default function ExperienceChooser() {
	return (
		<main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#1c1a19] text-slate-100">
			<div className="absolute inset-0">
				<Image
					src={heroBackground}
					alt="Cerro Gordo historic landscape"
					fill
					priority
					className="object-cover object-center opacity-60"
				/>
				<div className="absolute inset-0 bg-gradient-to-b from-[#1c1a19]/40 via-[#1c1a19]/65 to-[#1c1a19]/85" aria-hidden />
			</div>

			<motion.div
				initial={{ opacity: 0, y: 24 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6, ease: 'easeOut' }}
				className="relative z-10 mx-auto flex max-w-5xl flex-col gap-12 px-6 text-center"
			>
				<div className="space-y-3 text-slate-50">
					<p className="text-xs uppercase tracking-[0.45em] text-amber-200/90">
						Choose Your Journey
					</p>
					<h1 className="text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
						Cerro Gordo, Two Paths Through Time
					</h1>
					<p className="mx-auto max-w-2xl text-sm text-amber-100/90 sm:text-base">
						Continue your exploration via an immersive map or a story-driven
						timeline. Each path draws from archives, photographs, and oral
						histories of the mountain camp.
					</p>
				</div>

				<div className="grid gap-6 md:grid-cols-2">
					{options.map((option) => (
						<Link
							key={option.href}
							href={option.href}
							className="group relative overflow-hidden rounded-[28px] border border-black/30 shadow-2xl shadow-black/40"
						>
							<div className="absolute inset-0">
								<Image
									src={paperTexture}
									alt="Aged parchment texture"
									fill
									className="object-cover opacity-60 mix-blend-multiply"
								/>
								<div
									className={`absolute inset-0 ${option.accent} mix-blend-multiply`}
									aria-hidden
								/>
								<div
									className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.35),transparent_65%)]"
									aria-hidden
								/>
							</div>
							<div className="relative flex h-full flex-col gap-4 p-8 text-left text-slate-100">
								<span className="inline-flex w-fit rounded-full border border-slate-200/40 px-3 py-1 text-xs uppercase tracking-[0.3em] text-amber-100/90">
									{option.badge}
								</span>
								<h2 className="font-pt-serif text-2xl font-semibold text-amber-50 drop-shadow-lg">
									{option.title}
								</h2>
								<p className="text-sm leading-relaxed text-amber-100/90">
									{option.description}
								</p>
								<div className="mt-auto flex items-center text-sm font-semibold text-amber-100/90">
									{option.cta}
									<span className="ml-2 inline-flex h-7 w-7 items-center justify-center rounded-full border border-amber-100/50 text-xs transition-colors group-hover:border-amber-300 group-hover:text-amber-200">
										→
									</span>
								</div>
							</div>
						</Link>
					))}
				</div>
			</motion.div>
		</main>
	)
}
