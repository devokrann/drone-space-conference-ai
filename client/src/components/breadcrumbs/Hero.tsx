import React from "react";
import { Link } from "react-router-dom";

import { Box, Breadcrumbs } from "@mantine/core";

import { IconChevronRight } from "@tabler/icons-react";

import classes from "./Hero.module.scss";

export default function Hero({ data }: { data: { label: string; link: string }[] }) {
	return (
		<Breadcrumbs separator={<IconChevronRight color="var(--mantine-color-white)" size={12} stroke={2} />}>
			{data.map(crumb => (
				<Box
					component={Link}
					to={crumb.link}
					key={crumb.link}
					className={classes.link}
					// c={data.indexOf(crumb) == data.length - 1 ? "pri" : ""}
				>
					{crumb.label}
				</Box>
			))}
		</Breadcrumbs>
	);
}
