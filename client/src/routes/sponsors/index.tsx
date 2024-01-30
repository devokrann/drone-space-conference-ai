import React from "react";
import { useLoaderData } from "react-router-dom";

import Layout from "@src/layouts";
import Partial from "@src/partials";
import Card from "@src/components/card";
import { Container, Grid } from "@mantine/core";

import data from "@src/data";

// export async function loader() {
// 	return sponsorship.packages;
// }

export default function Sponsors() {
	// const data = useLoaderData();

	return (
		<Layout.Body header={<Partial.Header.Main />} nav={<Partial.Navbar.Main />} footer={<Partial.Footer.Main />}>
			<Layout.Page hero={<Layout.Hero.Route />} padded>
				<Container>
					<Grid justify="center" gutter={"xl"}>
						{data.sponsorship.packages.map(item => (
							<Grid.Col span={{ base: 12, md: 6 }} key={item.title}>
								<Card.Sponsorship data={item} />
							</Grid.Col>
						))}
					</Grid>
				</Container>
			</Layout.Page>
		</Layout.Body>
	);
}
