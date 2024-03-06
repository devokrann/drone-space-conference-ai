import React from "react";
import { useLoaderData } from "react-router-dom";

import Layout from "@src/layouts";
import Partial from "@src/partials";
import Card from "@src/components/card";
import { Anchor, Divider, Grid, Stack, Text, Title } from "@mantine/core";

import data from "@src/data";
import image from "@src/assets/images";

// export async function loader() {
// 	return sponsorship.packages;
// }

export default function Tickets() {
	// const data = useLoaderData();

	return (
		<Layout.Body header={<Partial.Header.Main />} nav={<Partial.Navbar.Main />} footer={<Partial.Footer.Main />}>
			<Layout.Page hero={<Layout.Hero.Route />}>
				<Layout.Section containerized margined>
					<Stack align="center" ta={"center"} gap={"xl"}>
						<Title order={2} fz={40} c={"pri"}>
							Get Your Tickets
						</Title>
						<Text>All pass types provide access to the conference & exhibition hall.</Text>
						<Divider label="tickets provided by" c={"sec"} w={{ base: "100%", xs: "66%" }} />
						<Anchor target="_blank">
							<Card.Partner
								data={{ image: image.partners.media.image6, title: "Ticketyetu", width: "50%" }}
							/>
						</Anchor>
					</Stack>
				</Layout.Section>
				<Layout.Section containerized margined>
					<Grid justify="center">
						{data.tickets.map(ticket => (
							<Grid.Col key={ticket.title} span={{ base: 12, sm: 6 }}>
								<Card.Ticket data={ticket} />
							</Grid.Col>
						))}
					</Grid>
				</Layout.Section>
			</Layout.Page>
		</Layout.Body>
	);
}
