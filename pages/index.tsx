import Head from 'next/head'
import Navbar from '../components/Navbar';

import { animate, motion } from "framer-motion";
import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box } from '@chakra-ui/react';
import GoodHabitStepsAccordian from '../components/indexPage/GoodHabitStepsAccordian';

export default function Home() {
	return (
		<div>
			<Head>
				<title>Habitus</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className="bg-black">
				<div className="h-screen">
					<Navbar />
					
					<div className="ml-3 flex justify-center mt-44 text-white">
						<motion.div transition={{ duration: 0.75 }} initial={{
							y: 200,
							opacity: 0,
						}} animate={{
							y: 0,
							opacity: 1
						}}>
							<div className="h-full flex items-center justify-center">
									<div className="h-full w-3 bg-purple" />
									<div>
										<div className="flex justify-start">
											<div className="mx-5 font-extralight w-17 h-fit font-serif text-3xl leading-relaxed">"We don't rise to the levels of our goals, we fall to the level of our Systems."</div>
										</div>
										<div className="flex justify-end mt-6">
											<h3 className="mx-5 font-serif text-3xl">- James Clear</h3>
										</div>
									</div>
							</div>
						</motion.div>
					</div>
				</div>
				<motion.div transition={{ duration: 0.75 }} initial={{
							y: 200,
							opacity: 0,
						}} animate={{
							y: 0,
							opacity: 1,
						}}>
				<div className="h-96 -my-36 bg-white rounded-t-lg p-2">
					<div className="flex flex-col justify-center items-center">
						<h1 className="text-3xl text-center"><b className="text-purple">The</b> Website For Making Long-Lasting Habits</h1>
						<h3 className="text-xl text-center mt-2">Based Off James Clear's "Atomic Habits"</h3>
					</div>

					<div className="mt-10 flex justify-center items-center w-full">
						<div className="border-2 border-slate-200 rounded-md p-2 w-96">
							<GoodHabitStepsAccordian />
						</div>
					</div>
				</div>
				</motion.div>
			</main>

			<footer>				
			</footer>
		</div>
	);
}
