import React from "react";

import { Box, Button, Divider, Group, List, Stack, Text, Title } from "@mantine/core";

import classes from "./Sponsorship.module.scss";
import { IconCheck, IconChevronRight } from "@tabler/icons-react";

export default function Ticket({ data }: { data: { title: string; price: string; desc: string } }) {
	return (
		<Stack className={classes.card} gap={"xl"} justify="space-between">
			<Stack gap={"xl"}>
				<Stack gap={"xs"} align="center">
					<Text ta={"center"} fw={500} fz={32} c={"pri"}>
						<Text component="span" inherit fz={"md"} c={"white"}>
							Kshs.{" "}
						</Text>
						{data.price}
					</Text>
					<Title order={3} fz={24} ta={"center"}>
						{data.title} Ticket
					</Title>
				</Stack>
				<Divider color="pri" />
				<Text ta={"center"}>{data.desc}</Text>
			</Stack>
			<Button fullWidth component="a" href="mailto:info@aiconference.co.ke">
				Buy {data.title} Ticket
			</Button>
		</Stack>
	);
}
