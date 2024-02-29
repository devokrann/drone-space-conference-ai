import React from "react";
import { Link } from "react-router-dom";

import { Anchor, Box, Card, Group, Image, Stack, Text } from "@mantine/core";

import hook from "@src/hooks";

import { typeSpeaker } from "@src/types/people";

import classes from "./Listing.module.scss";

import icons from "@src/data/icons";

export default function Listing({ data }: { data: typeSpeaker }) {
	return (
		<Card className={classes.card}>
			<Box className={classes.imageContainer}>
				<Image src={data.image} alt={data.name} className={classes.image} />
				{data.contact && data.contact.socials && (
					<Group justify="center" gap={"xs"} className={classes.socials}>
						{data.contact.socials.map(social => (
							<Anchor key={social.link} inherit href={social.link} target="_blank">
								<Image
									src={icons.social.find(i => i.label == social.label)?.icon}
									w={24}
									h={24}
									alt={social.label}
									className={classes.icon}
								/>
							</Anchor>
						))}
					</Group>
				)}
			</Box>
			<Stack gap={"xs"} mt={"md"} align="center" ta={"center"}>
				<Anchor className={classes.title} component={Link} to={`${hook.useLinkify(data.name)}`}>
					{data.name}
				</Anchor>
				<Text fz={"xs"} fw={500}>
					{data.occupation.position}
					{data.occupation.pow && `, ${data.occupation.pow}`}
				</Text>
			</Stack>
		</Card>
	);
}
