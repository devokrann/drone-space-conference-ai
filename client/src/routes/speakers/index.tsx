import React from "react";
import { useLoaderData } from "react-router-dom";

import Layout from "@src/layouts";
import Partial from "@src/partials";
import { Stack, Text, Title } from "@mantine/core";

// export async function loader() {
// 	return "data";
// }

export default function Speakers() {
	// const data = useLoaderData();

	return (
		<Layout.Body header={<Partial.Header.Main />} nav={<Partial.Navbar.Main />} footer={<Partial.Footer.Main />}>
			<Layout.Page hero={<Layout.Hero.Route />}>
				<Layout.Section containerized margined>
					<Stack ta={"center"} gap={"xl"}>
						<Title order={2} fz={40} c={"pri.4"}>
							Speakers Coming Soon
						</Title>
						<Text>Our best speakers will be added soon</Text>
					</Stack>
				</Layout.Section>
			</Layout.Page>
		</Layout.Body>
	);
}
