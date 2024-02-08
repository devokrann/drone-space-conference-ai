import React from "react";
import { useLoaderData } from "react-router-dom";

import Layout from "@src/layouts";
import Partial from "@src/partials";
import Card from "@src/components/card";
import { Container, Divider, Grid, Stack, Text, Title } from "@mantine/core";

import data from "@src/data";
import image from "@src/assets/images";

// export async function loader() {
// 	return sponsorship.packages;
// }

export default function Sponsors() {
	// const data = useLoaderData();

	return (
		<Layout.Body header={<Partial.Header.Main />} nav={<Partial.Navbar.Main />} footer={<Partial.Footer.Main />}>
			<Layout.Page hero={<Layout.Hero.Route />}>
				<Layout.Section containerized padded id="partners">
					<Stack gap={48}>
						{/* <Stack ta={"center"} gap={"xl"}>
							<Title order={2} fz={40} c={"pri"}>
								Our Media Partners
							</Title>
							<Text></Text>
						</Stack> */}
						<Grid justify="center">
							<Grid.Col span={{ base: 12 }} mx={"auto"}>
								<Grid>
									<Grid.Col span={{ base: 8, xs: 5, sm: 4 }} mx={"auto"}>
										<Card.Partner
											data={{
												image: image.partners.media.image3,
												title: "Radio Africa Events",
												width: "60%",
											}}
										/>
									</Grid.Col>
								</Grid>
							</Grid.Col>
							{data.partners.map(item => (
								<Grid.Col key={item.title} span={{ base: 12, xs: 6, sm: 4 }}>
									<Card.Partner data={item} />
								</Grid.Col>
							))}
							<Grid.Col span={{ base: 12 }} mx={"auto"}>
								<Grid>
									<Grid.Col span={{ base: 12 }} mx={"auto"}>
										<Divider label={"powered by"} w={"50%"} mx={"auto"} />
									</Grid.Col>
									<Grid.Col span={{ base: 8, xs: 5, sm: 4 }} mx={"auto"}>
										<Card.Partner
											data={{
												image: image.partners.other.partner1,
												title: "Drone Space",
											}}
											noPadding
										/>
									</Grid.Col>
								</Grid>
							</Grid.Col>
						</Grid>
						<Text ta={"center"} fz={"xl"} tt={"uppercase"}>
							Powered by{" "}
							<Text component="span" inherit fw={"bold"} c={"sec.6"}>
								Drone Space!
							</Text>
						</Text>
					</Stack>
				</Layout.Section>
				<Layout.Section containerized margined>
					<Stack ta={"center"} gap={"xl"}>
						<Title order={2} fz={40} c={"pri"}>
							Sponsorship Opportunities
						</Title>
						<Text>Select a sponsorship package from our list and become one of our proud affiliates.</Text>
					</Stack>
				</Layout.Section>
				<Layout.Section containerized margined>
					<Grid justify="center" gutter={"xl"}>
						{data.sponsorship.packages.map(item => (
							<Grid.Col span={{ base: 12, sm: 6 }} key={item.title}>
								<Card.Sponsorship data={item} />
							</Grid.Col>
						))}
					</Grid>
				</Layout.Section>
			</Layout.Page>
		</Layout.Body>
	);
}
