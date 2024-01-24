import React from "react";
import { useLocation } from "react-router-dom";

import { Box, Container, Group, Title } from "@mantine/core";

import Breadcrumbs from "@src/components/breadcrumbs";
import hook from "@src/hooks";

export default function Route() {
	const location = useLocation();
	const crumbs = hook.useCrumbs(location.pathname);

	return (
		<Box
			component="section"
			style={(theme) => ({
				backgroundColor: theme.colors.sec[0],
				padding: `${theme.spacing.lg} 0`,
			})}
		>
			<Container>
				<Group align="center" justify="space-between">
					<Breadcrumbs.Hero data={crumbs} />
					<Title order={1} fw={500} fz={24}>
						{crumbs[crumbs.length - 1].label}
					</Title>
				</Group>
			</Container>
		</Box>
	);
}
