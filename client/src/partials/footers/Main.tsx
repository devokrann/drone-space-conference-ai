import React from "react";
import { Link } from "react-router-dom";

import { Text, Container, Group, Image, Stack, Box, Divider, Grid, Title, List, Flex } from "@mantine/core";

import image from "@src/assets/images";

import classes from "./Main.module.scss";

import data from "@src/data";
import { IconChevronRight } from "@tabler/icons-react";
import Counter from "@src/components/counter";

import cta from "../cta";
import Component from "@src/components";
import utility from "@src/utilities";

export default function Main() {
	const now = new Date();
	const eventDay = data.date.eventDay;
	const timeDifference = Math.max(eventDay.getTime() - now.getTime(), 0);

	return (
		<>
			<Component.Carousel.Gallery
				delay={2000}
				data={utility.shuffle.arrayCopy(data.gallery.conference.concat(data.gallery.expo)).array}
			/>
			<Component.Carousel.Gallery
				delay={3000}
				data={utility.shuffle.arrayCopy(data.gallery.expo.concat(data.gallery.conference)).arrayCopy}
			/>
			{timeDifference > 0 && <cta.Main />}
			<Box className={classes.footer}>
				<Container>
					<Stack gap={"xl"}>
						<Grid>
							<Grid.Col span={{ base: 12, md: 5 }}>
								<Flex
									direction={"column"}
									align={{ base: "center", md: "start" }}
									ta={{ base: "center", md: "start" }}
									w={{ md: "90%" }}
									gap={"xl"}
								>
									<Image src={image.brand.landscape} alt="Logo" w={200} />
									<Flex direction={"column"} align={{ base: "center", md: "start" }} gap={"xs"}>
										<Text inherit size="sm">
											The AI conference in Nairobi is a cutting-edge conference that will bring
											together thought leaders, innovators, and enthusiasts in the fields of
											Artificial Intelligence, Drone Technology, and Data Analytics. The event
											aims to explore the synergies between these rapidly evolving technologies,
											fostering collaboration, and inspiring the next wave of breakthroughs.
										</Text>
										<Group>
											{data.links.social.map(link => (
												<Text key={link.link} component="a" href={link.link} target="_blank">
													<Image
														src={link.icon}
														alt={`social icon ${data.links.social.indexOf(link)}`}
														w={32}
													/>
												</Text>
											))}
										</Group>
									</Flex>
								</Flex>
							</Grid.Col>
							<Grid.Col span={7} visibleFrom="md">
								<Grid>
									{data.links.footer.map(link => (
										<Grid.Col key={link.title} span={6}>
											<Stack gap={"xl"} align="end" ta={"end"}>
												<Title order={4} fz={24} className={classes.title}>
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
						<Divider color="sec" />
						<Group justify="center" fz="sm" fw={500}>
							<Text inherit>
								© 2024{" "}
								<Text component="span" inherit c={"sec"}>
									AI Conference
								</Text>
								. All rights reserved.
							</Text>
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
