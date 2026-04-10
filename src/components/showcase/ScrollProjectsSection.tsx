"use client";

import { useEffect, useRef } from "react";
import { Building, Landmark, Castle, Mountain, TowerControl, Pyramid } from "lucide-react";
import { ExpandingCards, type CardItem } from "@/components/ui/expanding-cards";
import { projectEntries } from "@/components/showcase/projectData";

// Icon map — client-only JSX, kept here to avoid polluting the server data file
const iconMap: Record<string, React.ReactNode> = {
	"punta-cana": <TowerControl size={24} />,
	"howarth-aesthetic": <Pyramid size={24} />,
	"four-seasons-spa": <Mountain size={24} />,
	woodlawn: <Castle size={24} />,
	"modera-mcgavock": <Building size={24} />,
	"modera-parkside": <Building size={24} />,
	"modera-decatur": <Building size={24} />,
	"kaum-cultural-hub": <Landmark size={24} />,
	"six-senses": <Mountain size={24} />,
};

export const projectItems: CardItem[] = projectEntries.map((entry) => ({
	...entry,
	icon: iconMap[entry.id] ?? <Building size={24} />,
}));

export default function ScrollProjectsSection() {
	const sectionRef = useRef<HTMLElement>(null);

	useEffect(() => {
		if (window.location.hash !== "#projects") return;

		const scrollToProjects = () => {
			if (!sectionRef.current) return;
			const top = sectionRef.current.getBoundingClientRect().top + window.scrollY;
			window.scrollTo({ top, behavior: "smooth" });
		};

		// Retry until the section has a real position (hero may not be laid out yet)
		const interval = setInterval(() => {
			if (sectionRef.current && sectionRef.current.getBoundingClientRect().top > 0) {
				clearInterval(interval);
				scrollToProjects();
			}
		}, 100);

		// Safety: stop retrying after 3s
		const timeout = setTimeout(() => clearInterval(interval), 3000);

		return () => {
			clearInterval(interval);
			clearTimeout(timeout);
		};
	}, []);

	return (
		<section ref={sectionRef} className="relative w-full py-24 md:py-32 bg-[#FAF9F6]" id="projects">
			<div className="max-w-7xl mx-auto px-6 mb-12 md:mb-24 text-center">
				<h2 className="font-cormorant text-4xl md:text-5xl lg:text-6xl font-light text-[#1a1a1a] mb-6">
					Portfolio
				</h2>
				<div className="w-16 md:w-24 h-[1px] bg-[#d4af37] mx-auto opacity-60" />
				<p className="mt-8 text-sm md:text-base font-cormorant tracking-[0.15em] uppercase text-[#666666] max-w-2xl mx-auto">
					A curated selection of my distinctive projects, spanning luxury hospitality and high-end multifamily developments.
				</p>
			</div>

			<div className="flex justify-center px-4 md:px-8">
				<ExpandingCards items={projectItems} defaultActiveIndex={0} />
			</div>
		</section>
	);
}
