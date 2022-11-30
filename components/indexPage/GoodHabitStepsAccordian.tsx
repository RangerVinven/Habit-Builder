import React from 'react'
import { Accordion, AccordionItem, AccordionButton, AccordionIcon, AccordionPanel, Box } from '@chakra-ui/react';

export default function GoodHabitStepsAccordian() {
    return (
        <Accordion allowMultiple>
            <AccordionItem>
                <h3 className="text-xl mb-2 pb-1 border-b border-slate-200">
                <AccordionButton>
                    <Box flex='1' textAlign='left'>
                        Make It <b className="inline text-purple">Obvious</b>
                    </Box>
                    <AccordionIcon />
                </AccordionButton>
                </h3>
                <AccordionPanel pb={8}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat.
                </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
                <h3 className="text-xl mb-2 pb-1 border-b border-slate-200">
                <AccordionButton>
                    <Box flex='1' textAlign='left'>
                        Make It <b className="inline text-purple">Attractive</b>
                    </Box>
                    <AccordionIcon />
                </AccordionButton>
                </h3>
                <AccordionPanel pb={8}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat.
                </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
                <h3 className="text-xl mb-2 pb-1 border-b border-slate-200">
                <AccordionButton>
                    <Box flex='1' textAlign='left'>
                        Make It <b className="inline text-purple">Easy</b>
                    </Box>
                    <AccordionIcon />
                </AccordionButton>
                </h3>
                <AccordionPanel pb={8}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat.
                </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
                <h3 className="text-xl">
                <AccordionButton>
                    <Box flex='1' textAlign='left'>
                        Make It <b className="inline text-purple">Satisfying</b>
                    </Box>
                    <AccordionIcon />
                </AccordionButton>
                </h3>
                <AccordionPanel pb={8}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat.
                </AccordionPanel>
            </AccordionItem>
        </Accordion>
    );
}
