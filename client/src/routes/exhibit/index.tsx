import React from "react";
import { useLoaderData } from "react-router-dom";

import Layout from "@src/layouts";
import Partial from "@src/partials";

export async function loader() {
	return "data";
}

export default function Exhibit() {
	const data = useLoaderData();

	return (
		<Layout.Body nav={<Partial.Navbar.Main />} footer={<Partial.Footer.Main />}>
			<Layout.Page hero={<Layout.Hero.Route />} padded>
				exhibit
			</Layout.Page>
		</Layout.Body>
	);
}
