import React from "react";

import { Affix, Box, Transition } from "@mantine/core";
import { useWindowScroll } from "@mantine/hooks";

import Partial from "@src/partials";

export default function Navbar() {
	const [scroll] = useWindowScroll();

	return (
		<Affix position={{ left: 0, top: 0, right: 0 }}>
			<Transition transition="slide-down" mounted={scroll.y > 120}>
				{transitionStyles => (
					<Box style={transitionStyles}>
						<Partial.Navbar.Main />
					</Box>
				)}
			</Transition>
		</Affix>
	);
}
