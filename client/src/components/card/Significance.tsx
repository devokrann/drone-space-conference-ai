import React from "react";

import { Box, Button, Divider, Group, List, Stack, Text, ThemeIcon, Title } from "@mantine/core";

import { Icon, IconCheck, IconChevronRight } from "@tabler/icons-react";

import classes from "./Significance.module.scss";

export default function Significance({ data }: { data: { icon: Icon; title: string; desc: string } }) {
	return (
		<Stack className={classes.card} gap={"xl"} justify="space-between">
			<Stack gap={"xl"}>
				<Stack gap={"xl"}>
					<Group justify="space-between">
						<Title
							order={3}
							fz={24}
							ta={{ base: "center", md: "start" }}
							h={56}
							className={classes.title}
							c={"pri"}
							w={{ md: "80%" }}
						>
							{data.title}
						</Title>
						<ThemeIcon size={56} variant="light" className={classes.icon}>
							<data.icon size={48} />
						</ThemeIcon>
					</Group>
					<Divider color="sec" className={classes.divider} />
				</Stack>
				<Text ta={{ base: "center", md: "start" }}>{data.desc}</Text>
			</Stack>
		</Stack>
	);
}
