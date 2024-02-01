import React from "react";

import { Box, Center, Container, Flex, Group, Image, Stack, Text, Title } from "@mantine/core";

import classes from "./Home.module.scss";
import image from "@src/assets/images";
import Counter from "@src/components/counter";

export default function Home() {
	return (
		<Box component="section" className={classes.hero}>
			<Center h={"100%"}>
				<Container py={64}>
					<Stack align="center">
						<Image src={image.brand.landscape} w={{ base: "100%", md: "66%" }} />
						<Stack align="center" ta={"center"} c={"white"}>
							<Text inherit fw={500} fz={32} lh={1} c={"pri"}>
								Sarit Expo Center, Westlands
							</Text>
							<Text inherit fw={500} fz={24} lh={1}>
								Tuesday 26<sup>th</sup> - Wednesday 27<sup>th</sup> March, 2024
							</Text>
							<Flex direction={{ base: "column", sm: "row" }} fz={"sm"} gap={{ sm: "md", md: "xl" }}>
								<Text inherit fw={500}>
									info@aiconference.co.ke
								</Text>
								<Text component="span" inherit c={"pri"} visibleFrom="sm">
									|
								</Text>
								<Text inherit fw={500}>
									+254712656565
								</Text>
								<Text component="span" inherit c={"pri"} visibleFrom="sm">
									|
								</Text>
								<Text inherit fw={500}>
									www.aiconference.co.ke
								</Text>
							</Flex>
						</Stack>
					</Stack>
				</Container>
			</Center>
			<Box bg={"pri.7"} pb={"lg"}>
				<Container size={"md"}>
					<Counter.Countdown />
				</Container>
			</Box>
		</Box>
	);
}
