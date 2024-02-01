import React from "react";

import { Box, Button, Divider, Group, List, Stack, Text, Title } from "@mantine/core";

import { IconCheck, IconChevronRight } from "@tabler/icons-react";

import classes from "./Booth.module.scss";

export default function Booth({
	data,
}: {
	data: { title: string; price: string; desc: { list: string[]; dimentions: string } };
}) {
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
						{data.title} Booth
					</Title>
				</Stack>
				<Divider color="pri" />
				<Stack fz="sm">
					{data.desc.list.map(item => (
						<Group key={item} wrap="nowrap" align="start">
							<Text component="span" c={"sec"}>
								<IconCheck size={16} />
							</Text>
							<Text key={item} inherit>
								{item}
							</Text>
						</Group>
					))}
				</Stack>
			</Stack>
			<Button fullWidth color="sec" c={"dark.9"} component="a" href="mailto:info@aiconference.co.ke">
				Book {data.title} Booth
			</Button>
		</Stack>
	);
}
