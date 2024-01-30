import React from "react";
import { useLoaderData } from "react-router-dom";

import Layout from "@src/layouts";

import list from "@src/data/list";

import typeList from "@src/types/list";
import Partial from "@src/partials";

export async function loader() {
	return list;
}

export default function Home() {
	const data: typeList[] = useLoaderData();

	return (
		<Layout.Body nav={<Partial.Navbar.Main />}>{data[0].title}</Layout.Body>
	);
}
