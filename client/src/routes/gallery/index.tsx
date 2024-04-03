import React from "react";
import { useLoaderData } from "react-router-dom";

import Layout from "@src/layouts";
import Partial from "@src/partials";
import { Divider, Grid, Stack, Text, Title } from "@mantine/core";
import data from "@src/data";
import Component from "@src/components";
import utility from "@src/utilities";

// export async function loader() {
// 	return "data";
// }

export default function Gallery() {
	// const data = useLoaderData();

	return (
		<Layout.Body header={<Partial.Header.Main />} nav={<Partial.Navbar.Main />} footer={<Partial.Footer.Main />}>
			<Layout.Page hero={<Layout.Hero.Route />}>
				<Layout.Section>
					<Stack gap={48}>
						{/* <Stack ta={"center"} gap={"xl"}>
							<Title order={2} fz={40} c={"pri"}>
								2024 Moments
							</Title>
							<Text>Our best Speakers will be added soon</Text>
						</Stack> */}
						<Grid justify="center" gutter={0}>
							{utility.shuffle.array(data.gallery.conference.concat(data.gallery.expo)).map(item => (
								<Grid.Col key={item.image} span={{ base: 12, xs: 4, md: 3 }}>
									<Component.Modal.Image image={item.image} />
								</Grid.Col>
							))}
						</Grid>
					</Stack>
				</Layout.Section>
			</Layout.Page>
		</Layout.Body>
	);
}
