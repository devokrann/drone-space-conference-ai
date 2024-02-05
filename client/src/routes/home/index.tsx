import React from "react";
import { useLoaderData } from "react-router-dom";

import Layout from "@src/layouts";

import list from "@src/data/list";

import typeList from "@src/types/list";
import Partial from "@src/partials";
import { Button, Divider, Grid, Group, Stack, Text, Title } from "@mantine/core";
import data from "@src/data";
import Card from "@src/components/card";

// export async function loader() {
// 	return list;
// }

export default function Home() {
	// const data: typeList[] = useLoaderData();

	return (
		<Layout.Body header={<Partial.Header.Main />} nav={<Partial.Navbar.Main />} footer={<Partial.Footer.Main />}>
			<Layout.Page hero={<Layout.Hero.Home />}>
				<Layout.Section containerized padded>
					<Stack gap={48}>
						<Stack ta={"center"} gap={"xl"}>
							<Title order={2} fz={40} c={"sec"}>
								Explore The Fusion of AI, Drone Tech and Data Analytics
							</Title>
							<Text>
								The AI conference in Nairobi is a cutting-edge conference that will bring together
								thought leaders, innovators, and enthusiasts in the fields of Artificial Intelligence,
								Drone Technology, and Data Analytics.
							</Text>
						</Stack>
						<Group justify="center" gap={48}>
							<Button leftSection={"1"} component="a" href="#objectives">
								Objectives
							</Button>
							<Button leftSection={"2"} component="a" href="#who">
								Who Attends
							</Button>
							<Button leftSection={"3"} component="a" href="#why">
								Why Attend
							</Button>
						</Group>
					</Stack>
				</Layout.Section>
				<Layout.Section containerized id="significance">
					<Stack gap={48}>
						<Stack ta={"center"} gap={"xl"}>
							{/* <Title order={2} fz={40} c={"pri"}>
								Fusion Significance
							</Title> */}
							<Text>
								AI, Drones and Data collectively play a significant role in various fields, contributing
								to advancements and innovations in technology, business and society.
							</Text>
						</Stack>
						<Grid justify="center">
							{data.content.significance.map(objective => (
								<Grid.Col key={objective.title} span={{ base: 12, sm: 6 }}>
									<Card.Significance data={objective} />
								</Grid.Col>
							))}
						</Grid>
					</Stack>
				</Layout.Section>
				<Layout.Section containerized padded id="objectives">
					<Stack gap={48}>
						<Stack ta={"center"} gap={"xl"}>
							<Title order={2} fz={40} c={"pri"}>
								Objectives
							</Title>
							<Text>
								The event aims to explore the synergies between these rapidly evolving technologies,
								fostering collaboration, and inspiring the next wave of breakthroughs.
							</Text>
						</Stack>
						<Grid justify="center">
							{data.content.objectives.map(objective => (
								<Grid.Col key={objective.title} span={{ base: 12, sm: 6, md: 4 }}>
									<Card.Objective data={objective} />
								</Grid.Col>
							))}
						</Grid>
					</Stack>
				</Layout.Section>
				<Layout.Section containerized padded id="who">
					<Stack gap={48}>
						<Stack ta={"center"} gap={"xl"}>
							<Title order={2} fz={40} c={"pri"}>
								Who Attends?
							</Title>
							<Text>
								The event aims to explore the synergies between these rapidly evolving technologies,
								fostering collaboration, and inspiring the next wave of breakthroughs.
							</Text>
						</Stack>
						<Grid justify="center">
							{data.content.whoAttends.map(item => (
								<Grid.Col key={item.title} span={{ base: 12, sm: 6, md: 4 }}>
									<Card.Audience data={item} />
								</Grid.Col>
							))}
						</Grid>
					</Stack>
				</Layout.Section>
				<Layout.Section containerized padded id="why">
					<Stack gap={48}>
						<Stack ta={"center"} gap={"xl"}>
							<Title order={2} fz={40} c={"pri"}>
								Why Attend?
							</Title>
							<Text>
								The AI conference in Nairobi is a cutting-edge conference that will bring together
								thought leaders, innovators, and enthusiasts in the fields of Artificial Intelligence,
								Drone Technology, and Data Analytics. The event aims to explore the synergies between
								these rapidly evolving technologies, fostering collaboration, and inspiring the next
								wave of breakthroughs.
							</Text>
						</Stack>
						<Grid justify="center">
							{data.content.whyAttend.map(item => (
								<Grid.Col key={item.title} span={{ base: 12, sm: 6, md: 4 }}>
									<Card.Why data={item} />
								</Grid.Col>
							))}
						</Grid>
					</Stack>
				</Layout.Section>
			</Layout.Page>
		</Layout.Body>
	);
}
