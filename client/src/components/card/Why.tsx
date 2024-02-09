import React from "react";

import { Box, Button, Divider, Group, List, Stack, Text, Title } from "@mantine/core";

import { Icon, IconCheck, IconChevronRight } from "@tabler/icons-react";

import classes from "./Why.module.scss";

export default function Why({ data }: { data: { icon: Icon; title: string; desc: string } }) {
	return (
		<Stack className={classes.card} gap={"xl"} justify="space-between">
			<Stack gap={"xl"}>
				<Title order={3} fz={24} ta={{ base: "center", md: "start" }} h={56} className={classes.title}>
					{data.title}
				</Title>
				<Text ta={{ base: "center", md: "start" }}>{data.desc}</Text>
			</Stack>
			<Group justify="end" className={classes.icon}>
				<data.icon size={48} />
			</Group>
		</Stack>
	);
}
