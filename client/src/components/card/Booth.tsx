import React from "react";

import { Box, Button, Divider, Group, List, Stack, Text, ThemeIcon, Title } from "@mantine/core";

import { IconCheck } from "@tabler/icons-react";

import classes from "./Booth.module.scss";

import modal from "../modals";

export default function Booth({
	data,
}: {
	data: { title: string; price: string; desc: { list: string[]; dimentions: string }; sold?: boolean };
}) {
	return (
		<Stack className={classes.card} gap={"xl"} justify="space-between">
			<Stack gap={"xl"}>
				<Stack gap={"xs"} align="center">
					<Text ta={"center"}>
						Kshs.{" "}
						<Text component="span" inherit c={"pri"} fw={500} fz={32}>
							{data.price}
						</Text>
					</Text>
					<Title order={3} fz={24} ta={"center"}>
						{data.title} Booth
					</Title>
				</Stack>
				<Divider color="pri" />
				<Stack fz="sm">
					{data.desc.list.map(item => (
						<Group key={item} wrap="nowrap" align="start">
							<ThemeIcon variant="transparent" size={"xs"} className={classes.icon}>
								<IconCheck size={16} />
							</ThemeIcon>
							<Text key={item} inherit>
								{item}
							</Text>
						</Group>
					))}
				</Stack>
				<Text ta={"center"} fw={500} fz={"sm"}>
					Dimentions:{" "}
					<Text component="span" inherit c={"pri"}>
						{data.desc.dimentions}
					</Text>
				</Text>
			</Stack>

			{/* <Modal.Booth label={data.title} /> */}

			<modal.Contact
				title={`${data.title} Booth`}
				inquiry="Booth Registration"
				booth={data.title}
				boothSize={data.desc.dimentions}
				sold={data.sold}
			>
				{data.sold ? `Sold Out` : `Book ${data.title} Booth`}
			</modal.Contact>
		</Stack>
	);
}
