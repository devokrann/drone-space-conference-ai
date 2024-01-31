import React from "react";
import { useLoaderData } from "react-router-dom";

import Layout from "@src/layouts";
import Partial from "@src/partials";
import { Divider, Grid, Group, Stack, Text, Title } from "@mantine/core";
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
				<Layout.Section containerized margined>
					<Stack ta={"center"} gap={"xl"}>
						<Title order={2} fz={40} c={"pri.4"}>
							Event Programs
						</Title>
						<Text>
							Plan Your Conference Experience with Ease. Explore the sessions and tracks at the Ai
							Conference Nairobi. Stay tuned for the detailed agenda, which includes speaker session
							times, and valuable insights.
						</Text>
					</Stack>
				</Layout.Section>
				<Layout.Section containerized margined>
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
											color="pri.4"
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
										<Divider color="pri.4" label="Attendees Converge to One Platform" my={"xl"} />
									</Grid.Col>
									<Grid.Col span={21}>
										<Accordion.Program data={data.program.schedule.common.day2} />
									</Grid.Col>
								</Grid>
							</Stack>
						</Grid.Col>
					</Grid>
				</Layout.Section>
			</Layout.Page>
		</Layout.Body>
	);
}
