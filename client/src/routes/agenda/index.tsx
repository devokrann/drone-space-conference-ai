import React from "react";
import { useLoaderData } from "react-router-dom";

import Layout from "@src/layouts";
import Partial from "@src/partials";
import { Button, Divider, Grid, Group, List, Stack, Text, Title } from "@mantine/core";
import data from "@src/data";
import Accordion from "@src/components/accordion";

// export async function loader() {
// 	return "data";
// }

export default function Agenda() {
	// const data = useLoaderData();

	return (
		<Layout.Body header={<Partial.Header.Main />} nav={<Partial.Navbar.Main />} footer={<Partial.Footer.Main />}>
			<Layout.Page hero={<Layout.Hero.Route />}>
				<Layout.Section containerized containerSize="xl" margined>
					<Stack gap={48}>
						<Stack ta={"center"} gap={"xl"}>
							<Title order={2} fz={40} c={"pri"}>
								Agenda
							</Title>
							<Text>
								Plan Your Conference Experience with Ease. Explore the sessions and tracks at the Ai
								Conference Nairobi. Stay tuned for the detailed agenda, which includes speaker session
								times, and valuable insights.
							</Text>
						</Stack>
						<Stack align="center">
							<Button
								color="pri.6"
								variant="outline"
								size="lg"
								radius={"xl"}
								c={"inherit"}
								component="a"
								href="#tracks"
							>
								View All Tracks
							</Button>
						</Stack>
						<Grid columns={21}>
							<Grid.Col span={{ base: 21, md: 10 }}>
								<Stack gap={"xl"}>
									<Title ta={"center"} order={3} fz={24}>
										AI Platform
									</Title>
									<Divider color="pri" />
									<Grid>
										<Grid.Col span={{ base: 12, sm: 6 }}>
											<Stack ta={{ base: "center", sm: "start" }}>
												<Title order={4} fz={16}>
													26<sup>th</sup> March
												</Title>
												<List spacing={"xs"} listStyleType="none" size="sm">
													{data.program.schedule.ai.day1.map(item => (
														<List.Item key={item.title.duration}>
															<Group gap={"xs"} fz={{ base: "xs", lg: "sm" }}>
																<Text component="span" inherit>
																	{item.title.duration}
																</Text>
																-
																<Text component="span" inherit>
																	{item.title.heading}
																</Text>
															</Group>
														</List.Item>
													))}
												</List>
											</Stack>
										</Grid.Col>
										<Grid.Col span={{ base: 12, sm: 6 }}>
											<Stack ta={{ base: "center", sm: "start" }}>
												<Title order={4} fz={16}>
													27<sup>th</sup> March
												</Title>
												<List spacing={"xs"} listStyleType="none" size="sm">
													{data.program.schedule.ai.day2.map(item => (
														<List.Item key={item.title.duration}>
															<Group gap={"xs"} fz={{ base: "xs", lg: "sm" }}>
																<Text component="span" inherit>
																	{item.title.duration}
																</Text>
																-
																<Text component="span" inherit>
																	{item.title.heading}
																</Text>
															</Group>
														</List.Item>
													))}
												</List>
											</Stack>
										</Grid.Col>
									</Grid>
								</Stack>
							</Grid.Col>
							<Grid.Col span={{ base: 21, md: 1 }} visibleFrom="md">
								<Group justify="center" h={"100%"}>
									<Divider orientation="vertical" color="sec" />
								</Group>
							</Grid.Col>
							<Grid.Col span={{ base: 21, md: 10 }}>
								<Stack gap={"xl"}>
									<Title ta={"center"} order={3} fz={24}>
										Drone Platform
									</Title>
									<Divider color="pri" />
									<Grid>
										<Grid.Col span={{ base: 12, sm: 6 }}>
											<Stack ta={{ base: "center", sm: "start" }}>
												<Title order={4} fz={16}>
													26<sup>th</sup> March
												</Title>
												<List spacing={"xs"} listStyleType="none" size="sm">
													{data.program.schedule.drone.day1.map(item => (
														<List.Item key={item.title.duration}>
															<Group gap={"xs"} fz={{ base: "xs", lg: "sm" }}>
																<Text component="span" inherit>
																	{item.title.duration}
																</Text>
																-
																<Text component="span" inherit>
																	{item.title.heading}
																</Text>
															</Group>
														</List.Item>
													))}
												</List>
											</Stack>
										</Grid.Col>
										<Grid.Col span={{ base: 12, sm: 6 }}>
											<Stack ta={{ base: "center", sm: "start" }}>
												<Title order={4} fz={16}>
													27<sup>th</sup> March
												</Title>
												<List spacing={"xs"} listStyleType="none" size="sm">
													{data.program.schedule.drone.day2.map(item => (
														<List.Item key={item.title.duration}>
															<Group gap={"xs"} fz={{ base: "xs", lg: "sm" }}>
																<Text component="span" inherit>
																	{item.title.duration}
																</Text>
																-
																<Text component="span" inherit>
																	{item.title.heading}
																</Text>
															</Group>
														</List.Item>
													))}
												</List>
											</Stack>
										</Grid.Col>
									</Grid>
								</Stack>
							</Grid.Col>
						</Grid>
					</Stack>
				</Layout.Section>
				<Layout.Section containerized margined padded id="tracks">
					<Stack gap={48}>
						<Stack ta={"center"} gap={"xl"}>
							<Title order={2} fz={40} c={"pri"}>
								Tracks
							</Title>
							<Text>
								Discover the latest trends, advancements, and best practices shaping the future of AI,
								Drone Tech and Data Analytics as industry experts, government organizations, disruptive
								startups, investors, research labs take the stage.
							</Text>
						</Stack>
						<Stack ta={"center"} gap={"xl"}>
							<Title order={2} fz={40} c={"pri"}>
								Hackathon / Innovation Stage
							</Title>
							<Text>
								This track is designed to showcase the industry's leading startups and provide an
								opportunity for Venture Capitalists (VCs) on industry trends. All startups that will be
								participating on this track are hand picked by Startinev and AI Conference Nairobi Team
								as the up-and-comers to be on the lookout for. These sessions of Hackathon (building
								models) and preparing presentations will be conducted in 48 hours and a showdown session
								of the finalists will each conduct a 10 minute pitch style format of their idea with
								prize totals of up to Kshs. 200,000.
							</Text>
						</Stack>
						<Grid gutter={96}>
							<Grid.Col span={12}>
								<Stack gap={"xl"}>
									<Title ta={"center"} order={2} fz={24}>
										26<sup>th</sup> March (Day 1)
									</Title>
									<Grid columns={21}>
										<Grid.Col span={21}>
											<Accordion.Program data={data.program.schedule.common.day1} />
										</Grid.Col>
										<Grid.Col span={21}>
											<Divider
												color="pri"
												label="Attendees Diverge to Respective Platforms"
												my={"xl"}
											/>
										</Grid.Col>
										<Grid.Col span={{ base: 21, md: 10 }}>
											<Stack gap={"xl"}>
												<Title ta={"center"} order={3} fz={24}>
													AI Platform
												</Title>
												<Accordion.Program data={data.program.schedule.ai.day1} />
											</Stack>
										</Grid.Col>
										<Grid.Col span={{ base: 21, md: 1 }} visibleFrom="md">
											<Group justify="center" h={"100%"}>
												<Divider orientation="vertical" />
											</Group>
										</Grid.Col>
										<Grid.Col span={{ base: 21, md: 10 }}>
											<Stack gap={"xl"}>
												<Title ta={"center"} order={3} fz={24}>
													Drone Platform
												</Title>
												<Accordion.Program data={data.program.schedule.drone.day1} />
											</Stack>
										</Grid.Col>
									</Grid>
								</Stack>
							</Grid.Col>
							<Grid.Col span={12}>
								<Stack gap={"xl"}>
									<Title ta={"center"} order={2} fz={24}>
										27<sup>th</sup> March (Day 2)
									</Title>
									<Grid columns={21}>
										<Grid.Col span={{ base: 21, md: 10 }}>
											<Stack gap={"xl"}>
												<Title ta={"center"} order={3} fz={24}>
													AI Platform
												</Title>
												<Accordion.Program data={data.program.schedule.ai.day2} />
											</Stack>
										</Grid.Col>
										<Grid.Col span={{ base: 21, md: 1 }} visibleFrom="md">
											<Group justify="center" h={"100%"}>
												<Divider orientation="vertical" />
											</Group>
										</Grid.Col>
										<Grid.Col span={{ base: 21, md: 10 }}>
											<Stack gap={"xl"}>
												<Title ta={"center"} order={3} fz={24}>
													Drone Platform
												</Title>
												<Accordion.Program data={data.program.schedule.drone.day2} />
											</Stack>
										</Grid.Col>
										<Grid.Col span={21}>
											<Divider color="pri" label="Attendees Converge to One Platform" my={"xl"} />
										</Grid.Col>
										<Grid.Col span={21}>
											<Accordion.Program data={data.program.schedule.common.day2} />
										</Grid.Col>
									</Grid>
								</Stack>
							</Grid.Col>
						</Grid>
					</Stack>
				</Layout.Section>
			</Layout.Page>
		</Layout.Body>
	);
}
