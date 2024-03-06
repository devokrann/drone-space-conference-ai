import React from "react";

import { Box, Button, Divider, Group, List, Stack, Text, ThemeIcon, Title } from "@mantine/core";

import classes from "./Sponsorship.module.scss";
import { IconCheck, IconChevronRight } from "@tabler/icons-react";

import modal from "../modals";

export default function Sponsorship({ data }: { data: { title: string; price: string; desc: string[] } }) {
	return (
		<Stack className={classes.card} gap={"xl"} justify="space-between">
			<Stack gap={"xl"}>
				<Stack gap={"xs"} align="center">
					<Text ta={"center"}>
						Kshs.{" "}
						<Text component="span" inherit fw={500} fz={32} className={classes.price}>
							{data.price}
						</Text>
					</Text>
					<Title order={3} fz={24} ta={"center"}>
						{data.title} Sponsorship Package
					</Title>
				</Stack>
				<Divider color="sec" />
				<Stack fz="sm">
					{data.desc.map(item => (
						<Group key={item} wrap="nowrap" align="start">
							<ThemeIcon size={"xs"} variant="transparent" className={classes.icon}>
								<IconCheck size={16} />
							</ThemeIcon>
							<Text key={item} inherit>
								{item}
							</Text>
						</Group>
					))}
				</Stack>
			</Stack>

			{/* <Modal.Sponsorship label={data.title} /> */}

			<modal.Contact
				title={`${data.title} Sponsorship`}
				inquiry="Sponsorship Application"
				sponsorPackage={data.title}
			>
				Apply For {data.title} Sponsorship
			</modal.Contact>
		</Stack>
	);
}
