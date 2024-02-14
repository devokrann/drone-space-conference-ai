import React from "react";

import { AspectRatio, Card, Grid, Group, Image, Stack, Text } from "@mantine/core";

import { typeModerator } from "@src/types/people";

import classes from "./Moderator.module.scss";

export default function Moderator({ data }: { data: typeModerator }) {
	return (
		<Card className={classes.card}>
			<Group gap={"xs"}>
				<Image src={data.image} alt={data.name} className={classes.image} />
				<Stack gap={0}>
					<Text inherit>{data.name}</Text>
					<Text inherit className={classes.occupation}>
						{data.occupation.position}, {data.occupation.pow}
					</Text>
				</Stack>
			</Group>
		</Card>
	);
}
