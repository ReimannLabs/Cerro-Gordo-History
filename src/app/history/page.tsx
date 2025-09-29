'use client'

import { useCallback, useMemo, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import paperTexture from '@/app/pictures/papertexture.png'

const events = [
	{
		id: 'discovery',
		title: 'Discovery on Buena Vista Peak',
		year: '1865',
		description:
			'Pablo Flores’ silver-lead strike sparks a camp of crude furnaces and stone dugouts high above Owens Valley.',
		body:
			'Legend places Pablo Flores on Buena Vista Peak in the mid-1860s, roasting ore in adobe furnaces that sent ribbons of smoke down into Owens Valley. Word of his strike drew Mexican prospectors, Paiute laborers, and investors from Los Angeles. Within months the ridgeline held arrastras, wind-shredded tents, and the earliest crude smelting pits. That spark set the stage for the industrial frenzy that followed.',
		images: [
			'Flores and crew roasting ore atop Buena Vista Peak',
			'Adobe furnace remnants overlooking the Inyo Mountains',
			'Early prospector trail descending toward Owens Lake',
		],
		color: 'from-amber-200 via-amber-100 to-white',
	},
	{
		id: 'belshaw-road',
		title: 'Belshaw’s Toll Road Opens',
		year: '1872',
		description:
			'Mortimer Belshaw engineers the Yellow Grade, tying Cerro Gordo to Owens Lake landings and distant markets.',
		body:
			'Engineer-financier Mortimer Belshaw arrived with capital, vision, and political sway. His Yellow Grade toll road, cut along impossible switchbacks, allowed heavy freight wagons to replace mule strings. Timber, charcoal, ore, and bullion all moved faster. Belshaw’s partnership with Victor Beaudry consolidated claims, erected the famous Belshaw furnace, and turned Cerro Gordo into the leading producer in the Inyo Range.',
		images: [
			'Survey stakes along the Yellow Grade alignment',
			'Freight wagons climbing toward Belshaw’s summit station',
			'Belshaw furnace foundations beside the toll house',
		],
		color: 'from-slate-200 via-slate-100 to-white',
	},
	{
		id: 'bullion-boom',
		title: 'Bullion Boom to Los Angeles',
		year: '1874',
		description:
			'Remi Nadeau’s wagons thunder south with Cerro Gordo bullion, injecting capital into Los Angeles banks and shops.',
		body:
			'Freight impresario Remi Nadeau fielded teams of twenty-mule wagons that creaked down the Yellow Grade, across Owens Valley, and into Los Angeles. Each run carried thousands of dollars in bullion and returned with foodstuffs, hardware, and luxury goods. Newspapers credited the bullion boom with launching Los Angeles banks, hotels, and the first telegraph links east—a rare example of a mountain camp reshaping a coastal city.',
		images: [
			'Nadeau freighting train rounding Owens Dry Lake',
			'Bullion bars stacked for shipment at the Beaudry store',
			'Los Angeles plaza receiving Cerro Gordo freight',
		],
		color: 'from-amber-300 via-amber-100 to-white',
	},
	{
		id: 'swansea-smelters',
		title: 'Swansea & Keeler Smelters',
		year: '1876',
		description:
			'Owens Lake shoreline works process ore for export, tightening Cerro Gordo’s supply chain.',
		body:
			'James G. Brady and associate investors transformed the lakeside camp of Swansea into a smelting and transport hub. Tall smokestacks rose beside the steamer Bessie Brady, which ferried bullion across the briny lake to the Carson & Colorado railhead. Auxiliary works at Keeler soon followed. The synchronized system—mine, tram, lake boat, and wagon—kept the furnaces hot even as distant markets spiked and dipped.',
		images: [
			'Bessie Brady steamer loading ingots at Swansea pier',
			'Stone chimney remains from the Swansea smelter bench',
			'Rail wagons ready for Cerro Gordo bullion at Keeler',
		],
		color: 'from-blue-200 via-slate-100 to-white',
	},
	{
		id: 'decline-turn',
		title: 'Decline & Quiet Years',
		year: '1892',
		description:
			'Silver prices collapse, ownership changes become frequent, and Cerro Gordo slips into a wind-battered lull.',
		body:
			'As Western silver values faltered, mine ownerships flipped between syndicates from San Francisco, Denver, and even London. Charcoal stacks cooled, tunnels flooded, and the once-busy commercial row saw shuttered doors. A handful of families, railroad watchmen, and prospectors kept the lamps burning; their letters describe lonely winters, rationed freight, and the creak of empty tram buckets in the wind.',
		images: [
			'Snowbound bunkhouse and quiet hotel veranda',
			'Abandoned ore cars near the Union hoist house',
			'Ledger entries showing dwindling payrolls',
		],
		color: 'from-slate-300 via-slate-100 to-white',
	},
	{
		id: 'tramway-era',
		title: 'Aerial Tramway & Four Metals',
		year: '1908',
		description:
			'Four Metals Company strings a gravity tram from Cerro Gordo to Keeler, reviving ore haulage efficiency.',
		body:
			'The short-lived Four Metals Company bet on modern infrastructure. Their double-rope tramway skimmed ore buckets over arroyos, delivering concentrates to new reverberatory furnaces at Keeler. The project drew engineers, electricians, and newspaper coverage that cast Cerro Gordo as a comeback camp. Though capital thinned by 1912, the tram towers endured as steel totems along the ridge.',
		images: [
			'Gravity tram buckets suspended over the canyon',
			'Four Metals crew posing with newly strung cable',
			'Keeler furnace floor receiving tram-delivered ore',
		],
		color: 'from-blue-300 via-blue-100 to-white',
	},
	{
		id: 'zinc-revival',
		title: 'Zinc Revival Sparks New Era',
		year: '1913',
		description:
			'Louis D. Gordon consolidates claims, adds electricity, and focuses on zinc that wartime industries crave.',
		body:
			'Louis D. Gordon’s Cerro Gordo Mines Company reopened shafts, extended drifts, and strung electric lines from Owens Valley. Zinc concentrates headed to smelters in Utah and the Midwest, filling orders for galvanizing, munitions, and chemical works. New frame houses, a hospital, and a powerhouse signaled a forward-looking town, even as the ore veins remained as fickle as ever.',
		images: [
			'Powerhouse turbines installed for electric light',
			'Gordon-era bunkhouses flanking the main street',
			'Workers loading zinc sacks bound for the railroad',
		],
		color: 'from-blue-200 via-blue-100 to-white',
	},
	{
		id: 'preservation-years',
		title: 'Stewards & Preservationists',
		year: '1970s–2000s',
		description:
			'Jody Stewart, Mike Patterson, and caretakers stabilize landmarks and share Cerro Gordo with intrepid visitors.',
		body:
			'After decades of dormancy, Jody Stewart Patterson acquired key buildings and poured sweat into preservation. The American Hotel, Beaudry store, and assay office gained new roofs and bracing. Guided tours, film shoots, and overnight stays kept the lights on. Caretakers John and Roxie Bowden chronicled each repair, proving that stewardship could keep history tangible even without an operating mine.',
		images: [
			'Jody Stewart welcoming guests to the hotel parlor',
			'Bowden caretakers cataloging artifacts in the store',
			'Fresh timbers reinforcing the Belshaw house porch',
		],
		color: 'from-amber-200 via-amber-100 to-white',
	},
	{
		id: 'modern-era',
		title: 'Modern Renewal & Rebuild',
		year: '2018–Present',
		description:
			'Brent Underwood and a dedicated crew launch preservation, storytelling, and the rebuilding of the American Hotel.',
		body:
			'Today’s era blends digital storytelling with hands-on craftsmanship. Brent Underwood and partners document daily camp life while raising timbers for the new American Hotel, salvaging original fixtures, and stabilizing mine workings. Volunteers, historians, and craftspeople from across the West pitch in. Cerro Gordo stands again as a living classroom for mining heritage and resilience in the high desert.',
		images: [
			'Reconstruction crews framing the new American Hotel',
			'Historic artifacts photographed for modern archives',
			'Visitors gathering for a sunset history talk',
		],
		color: 'from-blue-200 via-amber-100 to-white',
	},
]

const swipeVariants = {
	enter: (direction: number) => ({
		opacity: 0,
		x: direction >= 0 ? 120 : -120,
	}),
	center: {
		opacity: 1,
		x: 0,
	},
	exit: (direction: number) => ({
		opacity: 0,
		x: direction >= 0 ? -120 : 120,
	}),
}

export default function HistoryPage() {
	const [currentIndex, setCurrentIndex] = useState(0)
	const [direction, setDirection] = useState(1)
	const eventsLength = events.length

	const goTo = useCallback(
		(index: number) => {
			const target = ((index % eventsLength) + eventsLength) % eventsLength
			const delta = target - currentIndex
			const wrapDelta = Math.abs(delta) > eventsLength / 2 ? -Math.sign(delta) : Math.sign(delta)
			setDirection(wrapDelta === 0 ? 1 : wrapDelta)
			setCurrentIndex(target)
		},
		[currentIndex, eventsLength]
	)

	const currentEvent = useMemo(() => events[currentIndex], [currentIndex])

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

			<main className="relative flex-1 bg-[#1a1612] overflow-visible">
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
					className="relative z-20 mx-auto flex h-full max-w-6xl items-center px-6 py-16 md:px-12 lg:px-20"
				>
					<AnimatePresence mode="wait" initial={false} custom={direction}>
						<motion.section
							key={currentEvent.id}
							custom={direction}
							variants={swipeVariants}
							initial="enter"
							animate="center"
							exit="exit"
							transition={{ duration: 0.45, ease: 'easeOut' }}
							className="relative flex min-h-[640px] w-full flex-col overflow-hidden rounded-[30px] border border-amber-200/25 bg-[#262019]/92 p-10 shadow-[0_25px_60px_-25px_rgba(0,0,0,0.85)]"
						>
							<div className={`absolute inset-0 bg-gradient-to-br ${currentEvent.color} opacity-10`} aria-hidden />
							<div className="absolute inset-0">
								<Image
									src={paperTexture}
									alt="paper grain"
									fill
									className="object-cover opacity-[0.08]"
								/>
							</div>
							<div className="relative z-10 flex flex-col gap-8 text-amber-50">
								<div className="flex flex-wrap items-baseline justify-between gap-4">
									<div className="flex items-center gap-3 text-xs uppercase tracking-[0.35em] text-amber-200/75">
										<span className="h-px w-12 bg-amber-200/40" />
										{currentEvent.year}
										<span className="h-px w-12 bg-amber-200/40" />
									</div>
									<div className="hidden sm:flex items-center gap-4 text-xs text-amber-200/60">
										<span className="inline-flex h-2 w-2 rounded-full bg-amber-300 shadow shadow-amber-600/40" />
										Featuring curated narratives and archival imagery.
									</div>
								</div>
								<div className="space-y-4">
									<h2 className="font-pt-serif text-3xl tracking-[0.08em] text-amber-50 sm:text-4xl">
										{currentEvent.title}
									</h2>
									<p className="text-sm uppercase tracking-[0.3em] text-amber-200/70">
										{currentEvent.description}
									</p>
									<p className="text-base leading-relaxed text-amber-100/85">
										{currentEvent.body}
									</p>
								</div>
								<div className="grid gap-4 md:grid-cols-3">
									{currentEvent.images.map((caption) => (
										<div
											key={caption}
											className="relative min-h-[160px] overflow-hidden rounded-2xl border border-amber-200/20 bg-[#15110d]/80"
										>
											<Image
												src={paperTexture}
												alt="paper detail"
												fill
												className="object-cover opacity-[0.12]"
											/>
											<div className="absolute inset-0 grid place-items-center px-5 text-center text-xs text-amber-200/60">
												{caption}
											</div>
											<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#fff5dd1c,transparent_70%)]" aria-hidden />
										</div>
									))}
								</div>
							</div>

							<div className="absolute inset-y-0 left-0 flex items-center">
								<button
									type="button"
									onClick={() => goTo(currentIndex - 1)}
									className="z-30 flex h-12 w-12 -translate-x-1/2 items-center justify-center rounded-full border border-amber-200/30 bg-[#1f1b17]/95 text-amber-100 shadow-lg shadow-black/50 transition hover:-translate-x-3 hover:bg-[#291f19]"
									aria-label="Previous era"
								>
									←
								</button>
							</div>
							<div className="absolute inset-y-0 right-0 flex items-center">
								<button
									type="button"
									onClick={() => goTo(currentIndex + 1)}
									className="z-30 flex h-12 w-12 translate-x-1/2 items-center justify-center rounded-full border border-amber-200/30 bg-[#1f1b17]/95 text-amber-100 shadow-lg shadow-black/50 transition hover:translate-x-3 hover:bg-[#291f19]"
									aria-label="Next era"
								>
									→
								</button>
							</div>
						</motion.section>
					</AnimatePresence>
				</motion.div>
				<div className="absolute bottom-10 left-1/2 flex -translate-x-1/2 items-center gap-3 text-xs text-amber-200/70 md:hidden">
					<button
						type="button"
						onClick={() => goTo(currentIndex - 1)}
						className="rounded-full border border-amber-200/30 px-3 py-1"
					>
						Prev
					</button>
					<span>
						{currentIndex + 1} / {eventsLength}
					</span>
					<button
						type="button"
						onClick={() => goTo(currentIndex + 1)}
						className="rounded-full border border-amber-200/30 px-3 py-1"
					>
						Next
					</button>
				</div>
				<div className="mt-6 flex justify-center gap-2">
					{events.map((event, index) => (
						<button
							key={event.id}
							type="button"
							onClick={() => goTo(index)}
							className={`h-2.5 w-2.5 rounded-full transition ${
								index === currentIndex ? 'bg-amber-300' : 'bg-amber-200/30 hover:bg-amber-200/60'
							}`}
							aria-label={`Go to ${event.year}`}
						/>
					))}
				</div>
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
