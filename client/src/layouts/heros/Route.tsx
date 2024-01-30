import React from "react";
import { useLocation } from "react-router-dom";

import { Box, Container, Group, Stack, Title } from "@mantine/core";

import Breadcrumbs from "@src/components/breadcrumbs";
import hook from "@src/hooks";

import classes from "./Route.module.scss";

export default function Route() {
	const location = useLocation();
	const crumbs = hook.useCrumbs(location.pathname);

	return (
		<Box component="section" className={classes.hero}>
			<Container>
				<Stack align="center" gap={"md"}>
					<Title order={1} fw={500} fz={40}>
						{crumbs[crumbs.length - 1].label}
					</Title>
					<Breadcrumbs.Hero data={crumbs} />
				</Stack>
			</Container>
		</Box>
	);
}
