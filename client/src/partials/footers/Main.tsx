import React from "react";
import { Link } from "react-router-dom";

import { Text, Container, Group, Image, Stack, Box, Divider, Grid, Title, List, Flex } from "@mantine/core";

import image from "@src/assets/images";

import classes from "./Main.module.scss";

import data from "@src/data";
import { IconChevronRight } from "@tabler/icons-react";
import Counter from "@src/components/counter";

import cta from "../cta";

export default function Main() {
	return (
		<>
			<cta.Main />
			<Box className={classes.footer}>
				<Container>
					<Stack gap={"xl"}>
						<Grid>
							<Grid.Col span={{ base: 12, md: 5 }}>
								<Flex
									direction={"column"}
									align={{ base: "center", md: "start" }}
									ta={{ base: "center", md: "start" }}
									w={{ md: "75%" }}
									gap={"xl"}
								>
									<Image src={image.brand.landscape} w={200} />
									<Text inherit size="sm">
										The AI conference in Nairobi is a cutting-edge conference that will bring
										together thought leaders, innovators, and enthusiasts in the fields of
										Artificial Intelligence, Drone Technology, and Data Analytics. The event aims to
										explore the synergies between these rapidly evolving technologies, fostering
										collaboration, and inspiring the next wave of breakthroughs.
									</Text>
									<Group>
										{data.links.social.map(link => (
											<Text component="a" href={link.link} target="_blank">
												<Image src={link.icon} w={32} />
											</Text>
										))}
									</Group>
								</Flex>
							</Grid.Col>
							<Grid.Col span={7} visibleFrom="md">
								<Grid>
									{data.links.footer.map(link => (
										<Grid.Col key={link.title} span={6}>
											<Stack gap={"xl"} align="end" ta={"end"}>
												<Title order={4} fz={24}>
													{link.title}
												</Title>
												<List spacing={"xs"} listStyleType="none">
													{link.links.map(item => (
														<List.Item key={item.label} fw={500}>
															<Link to={item.link} className={classes.link}>
																{item.label}
															</Link>
														</List.Item>
													))}
												</List>
											</Stack>
										</Grid.Col>
									))}
								</Grid>
							</Grid.Col>
						</Grid>
						<Divider color="pri.4" />
						<Group justify="center" c="dimmed" fz="sm" fw={500}>
							<Text inherit>© 2024 AI Conference. All rights reserved.</Text>
							{/* <Group>
							{data.links.navbar.map(link => (
								<Link to={link.link} className={classes.link}>
									{link.label}
								</Link>
							))}
						</Group> */}
						</Group>
					</Stack>
				</Container>
			</Box>
		</>
	);
}
