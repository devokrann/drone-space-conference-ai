import React from "react";

import { Box, Button, Divider, Group, List, Stack, Text, Title } from "@mantine/core";

import { Icon, IconCheck, IconChevronRight } from "@tabler/icons-react";

import classes from "./Objective.module.scss";

export default function Objective({ data }: { data: { icon: Icon; title: string; desc: string } }) {
	return (
		<Stack className={classes.card} gap={"xl"}>
			<Stack gap={"xl"}>
				<Group gap={"xs"} justify="space-between">
					<Title order={3} fz={24} ta={"center"} c={"pri"}>
						{data.title}
					</Title>
					<data.icon size={48} color="var(--mantine-color-sec-6)" />
				</Group>
				<Text ta={{ base: "center", md: "start" }}>{data.desc}</Text>
			</Stack>
		</Stack>
	);
}
