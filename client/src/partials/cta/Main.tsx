import React from "react";

import { Box, Button, Container, Grid, Group, Stack, Title } from "@mantine/core";

import Counter from "@src/components/counter";

import classes from "./Main.module.scss";

export default function Main() {
	return (
		<Box className={classes.cta} py={"xl"}>
			<Container size={"md"}>
				<Stack gap={48}>
					<Title order={6} fz={24} ta={"center"}>
						Don't Wait Too Long!
					</Title>
					<Counter.Countdown />
					<Group gap={"xl"} justify="center">
						<Button>Buy Ticket</Button>
						<Button variant="white">book Booth</Button>
					</Group>
				</Stack>
			</Container>
		</Box>
	);
}
