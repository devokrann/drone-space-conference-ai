import React from "react";

import { Text, Container, Group, Image, Stack, Box, Divider } from "@mantine/core";

import image from "@src/assets/images";

import classes from "./Main.module.scss";

import data from "@src/data";
import { Link } from "react-router-dom";

export default function Main() {
	return (
		<Box className={classes.footer}>
			<Container>
				<Stack gap={"xl"}>
					<Stack gap={"xl"} align="center" ta={"center"}>
						<Image src={image.brand.landscape} w={200} />
						<Text inherit size="sm">
							The AI conference in Nairobi is a cutting-edge conference that will bring together thought
							leaders, innovators, and enthusiasts in the fields of Artificial Intelligence, Drone
							Technology, and Data Analytics. The event aims to explore the synergies between these
							rapidly evolving technologies, fostering collaboration, and inspiring the next wave of
							breakthroughs.
						</Text>
						<Group gap={"xl"} justify="center">
							{data.links.social.map(link => (
								<Text component="a" href={link.link} target="_blank">
									<Image src={link.icon} w={32} />
								</Text>
							))}
						</Group>
					</Stack>
					<Divider color="pri.4" />
					<Group justify="space-between" c="dimmed" fz="sm" fw={500}>
						<Text inherit>© 2024 AI Conference. All rights reserved.</Text>
						<Group>
							{data.links.navbar.map(link => (
								<Link to={link.link} className={classes.link}>
									{link.label}
								</Link>
							))}
						</Group>
					</Group>
				</Stack>
			</Container>
		</Box>
	);
}
