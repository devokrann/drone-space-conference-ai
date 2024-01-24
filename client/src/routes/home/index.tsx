import React from "react";
import { useLoaderData } from "react-router-dom";

// import list from "@src/data/list";

import Layout from "@src/layouts";

import typeList from "@src/types/list";
import Provider from "@src/providers";
import getSample from "@src/apis/getSample";

import { Box } from "@mantine/core";

export async function loader() {
	return getSample();
}

export default function Home() {
	const data: typeList[] = useLoaderData();

	return (
		<Layout.Body>
			{/* <ul>
				{data.map((item) => (
					<Provider.Transition.Viewport transition={"slide-up"}>
						<li key={item.id}>{item.title}</li>
					</Provider.Transition.Viewport>
				))}
			</ul> */}
			<Box mih={"200vh"}></Box>
			<Provider.Transition.Component>
				<>{data}</>
			</Provider.Transition.Component>
			<Box mih={"200vh"}></Box>
			{/* <div ref={ref}>{`${inViewport}`}</div> */}
		</Layout.Body>
	);
}
