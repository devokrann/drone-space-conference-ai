import React from "react";
import { useLoaderData } from "react-router-dom";

import Layout from "@src/layouts";
import Partial from "@src/partials";
import { Divider, Grid, Stack, Text, Title } from "@mantine/core";
import data from "@src/data";
import Component from "@src/components";

// export async function loader() {
// 	return "data";
// }

export default function Speakers() {
	// const data = useLoaderData();

	return (
		<Layout.Body header={<Partial.Header.Main />} nav={<Partial.Navbar.Main />} footer={<Partial.Footer.Main />}>
			<Layout.Page hero={<Layout.Hero.Route />}>
				<Layout.Section containerized margined>
					{/* <Stack ta={"center"} gap={"xl"}>
						<Title order={2} fz={40} c={"pri"}>
							Speakers Coming Soon
						</Title>
						<Text>Our best Speakers will be added soon</Text>
					</Stack> */}
					<Grid justify="center" columns={20} gutter={"xl"}>
						{data.people.map(person => (
							<Grid.Col key={person.name} span={{ base: 20, xs: 10, sm: 5, md: 4 }}>
								<Component.Card.Speaker.Listing data={person} />
							</Grid.Col>
						))}
					</Grid>
				</Layout.Section>
				<Divider />
				<Layout.Section containerized containerSize="sm" margined>
					<Stack gap={"xl"}>
						<Title order={3} ta={"center"} fz={32} c={"pri"}>
							Call to Speakers
						</Title>
						<Text ta={"center"}>Fill the form below and request to speak</Text>
						<Partial.Form.Contact defaultInquiry="Speaker Registration" />
					</Stack>
				</Layout.Section>
			</Layout.Page>
		</Layout.Body>
	);
}
