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

export default function Tickets() {
	// const data = useLoaderData();

	return (
		<Layout.Body header={<Partial.Header.Main />} nav={<Partial.Navbar.Main />} footer={<Partial.Footer.Main />}>
			<Layout.Page hero={<Layout.Hero.Route />}>
				<Layout.Section containerized margined>
					<Stack ta={"center"} gap={"xl"}>
						<Title order={2} fz={40} c={"pri.4"}>
							Get Your Tickets
						</Title>
						<Text>All pass types provide access to the conference & exhibition hall.</Text>
					</Stack>
				</Layout.Section>
				<Layout.Section containerized margined>
					<Grid justify="center">
						{data.tickets.map(ticket => (
							<Grid.Col key={ticket.title} span={{ base: 12, md: 6 }}>
								<Card.Ticket data={ticket} />
							</Grid.Col>
						))}
					</Grid>
				</Layout.Section>
			</Layout.Page>
		</Layout.Body>
	);
}
