import React from "react";
import { useLoaderData } from "react-router-dom";

import Layout from "@src/layouts";
import Partial from "@src/partials";
import Card from "@src/components/card";
import { Container, Grid, Stack, Text, Title } from "@mantine/core";

import data from "@src/data";

// export async function loader() {
// 	return sponsorship.packages;
// }

export default function Sponsors() {
	// const data = useLoaderData();

	return (
		<Layout.Body header={<Partial.Header.Main />} nav={<Partial.Navbar.Main />} footer={<Partial.Footer.Main />}>
			<Layout.Page hero={<Layout.Hero.Route />}>
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
							<Grid.Col span={{ base: 12, md: 6 }} key={item.title}>
								<Card.Sponsorship data={item} />
							</Grid.Col>
						))}
					</Grid>
				</Layout.Section>
			</Layout.Page>
		</Layout.Body>
	);
}
