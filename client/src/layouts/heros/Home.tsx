import React from "react";

import { Box, Center, Container, Flex, Grid, Group, Image, Stack, Text, Title } from "@mantine/core";

import classes from "./Home.module.scss";
import image from "@src/assets/images";
import Counter from "@src/components/counter";

export default function Home() {
	return (
		<Box component="section" className={classes.hero}>
			<Center h={"100%"}>
				<Container py={64}>
					<Grid>
						<Grid.Col span={12}>
							<Image src={image.brand.landscape} alt="Logo" w={{ base: "100%", md: "66%" }} mx={"auto"} />
						</Grid.Col>
						<Grid.Col span={{ md: 5 }}></Grid.Col>
						<Grid.Col span={{ md: 6 }}>
							<Stack c={"white"} px={{ md: "xs" }} ta={{ base: "center", md: "start" }}>
								<Text inherit fw={500} fz={32} lh={1} c={"pri"}>
									Sarit Expo Center, Westlands
								</Text>
								<Text inherit fw={500} fz={24} lh={1}>
									Tuesday 26<sup>th</sup> - Wednesday 27<sup>th</sup> March, 2024
								</Text>
								<Flex
									direction={{ base: "column", sm: "row" }}
									gap={{ sm: "md" }}
									justify={{ base: "center", sm: "start" }}
								>
									<Text inherit fw={500}>
										info@aiconference.co.ke
									</Text>
									<Text component="span" inherit c={"pri"} visibleFrom="sm">
										|
									</Text>
									<Text inherit fw={500}>
										+254712656565
									</Text>
								</Flex>
							</Stack>
						</Grid.Col>
					</Grid>
				</Container>
			</Center>
			<Box bg={"pri.6"} pb={"lg"}>
				<Container size={"md"}>
					<Counter.Countdown />
				</Container>
			</Box>
		</Box>
	);
}
