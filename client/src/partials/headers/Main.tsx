import React from "react";
import { Link } from "react-router-dom";

import { Box, Container, Flex, Group, Image, Text } from "@mantine/core";

import { IconPointFilled } from "@tabler/icons-react";

import classes from "./Main.module.scss";

import data from "@src/data";

export default function Main() {
	return (
		<Box className={classes.box}>
			<Container>
				<Flex direction={{ base: "column", xs: "row" }} align={"center"} justify="space-between" gap={"sm"}>
					<Flex align={"center"} direction={{ base: "column", xs: "row" }} gap={"xs"}>
						<Text inherit>26 - 27 March, 2024</Text>
						<Text inherit>Sarit expo Centre, Westlands</Text>
					</Flex>
					<Group>
						<Group gap={"xs"}>
							{data.links.social.map(link => (
								<Link key={link.link} to={link.link}>
									<Image src={link.icon} w={24} />
								</Link>
							))}
						</Group>
					</Group>
				</Flex>
			</Container>
		</Box>
	);
}
