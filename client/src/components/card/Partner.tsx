import React from "react";

import { Center, Image, Text } from "@mantine/core";

import classes from "./Partner.module.scss";

export default function Partner({ data }: { data: { image: string; title: string; width: string } }) {
	return (
		<Center className={classes.card}>
			<Image src={data.image} alt={data.title} w={data.width ? data.width : "100%"} />
			<Text className={classes.label}>{data.title}</Text>
		</Center>
	);
}
