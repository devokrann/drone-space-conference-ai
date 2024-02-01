import React from "react";
import { useLoaderData } from "react-router-dom";

import Layout from "@src/layouts";
import Partial from "@src/partials";
import Card from "@src/components/card";
import { Grid, Stack, Text, Title } from "@mantine/core";

import data from "@src/data";

// export async function loader() {
// 	return sponsorship.packages;
// }

export default function Booths() {
	// const data = useLoaderData();

	return (
		<Layout.Body header={<Partial.Header.Main />} nav={<Partial.Navbar.Main />} footer={<Partial.Footer.Main />}>
			<Layout.Page hero={<Layout.Hero.Route />}>
				<Layout.Section containerized margined>
					<Stack ta={"center"} gap={"xl"}>
						<Title order={2} fz={40} c={"pri"}>
							Book Your Space
						</Title>
						<Text>
							Additional tickets to the quantity listed in each package will have to be purchased
							separately; i.e. Additional participants will have to purchase a ticket.
						</Text>
					</Stack>
				</Layout.Section>
				<Layout.Section containerized margined>
					<Grid justify="center">
						{data.exhibition.booths.map(booth => (
							<Grid.Col key={booth.title} span={{ base: 12, md: 6 }}>
								<Card.Booth data={booth} />
							</Grid.Col>
						))}
					</Grid>
				</Layout.Section>
			</Layout.Page>
		</Layout.Body>
	);
}
