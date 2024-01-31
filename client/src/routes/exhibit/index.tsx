import React from "react";
import { Link, useLoaderData } from "react-router-dom";

import Layout from "@src/layouts";
import Partial from "@src/partials";
import { Button, Center, Grid, Image, Stack, Text, Title } from "@mantine/core";
import image from "@src/assets/images";
import data from "@src/data";
import Card from "@src/components/card";

// export async function loader() {
// 	return "data";
// }

export default function Exhibit() {
	// const data = useLoaderData();

	return (
		<Layout.Body header={<Partial.Header.Main />} nav={<Partial.Navbar.Main />} footer={<Partial.Footer.Main />}>
			<Layout.Page hero={<Layout.Hero.Route />}>
				<Layout.Section containerized margined>
					<Stack ta={"center"} gap={"xl"}>
						<Title order={2} fz={40} c={"pri.4"}>
							Exhibition and Booth Packages
						</Title>
						<Text>
							Unlock unparalleled opportunities for exposure, collaboration, and growth by becoming an
							exhibitor at the Ai & Drone Conference . Our event serves as a dynamic platform for you to
							showcase your products, services, and innovations to a diverse audience of industry
							professionals, enthusiasts, potential partners, and customers. As an exhibitor, you’ll gain
							access to a unique ecosystem that fosters connections, drives business growth, and positions
							you as a leader in the drone industry.
						</Text>
					</Stack>
				</Layout.Section>
				<Layout.Section containerized margined>
					<Grid gutter={"xl"}>
						<Grid.Col span={{ base: 12, md: 6 }}>
							<Center px={"xl"}>
								<Image src={image.poster.poster1} w={"100%"} />
							</Center>
						</Grid.Col>
						<Grid.Col span={{ base: 12, md: 6 }}>
							<Stack gap={"xl"}>
								<Text>
									The two-day event is an ideal platform to penetrate the market of Unmanned Aircraft
									Systems (UAS) or Drones, Big Data and AI that will put products and Services in
									front of an audience of decision-makers, investors and organizations looking for
									solutions that will increase efficiency, mitigate risk and improve safety. As an
									exhibitor you will gain unprecedented exposure to each and every one of our
									pre-qualified visitors, all of whom are looking to find the latest products and
									solutions that are revolutionizing Drones, data and AI sectors. By placing yourself
									in front of these potential clients, you have the chance to pitch to them first hand
									with the ability to achieve a direct line to market all in one place.
								</Text>
								<Button component={"a"} href={"#booths"}>
									Book A Booth
								</Button>
							</Stack>
						</Grid.Col>
					</Grid>
				</Layout.Section>
				<Layout.Section containerized margined id="booths">
					<Stack gap={48}>
						<Stack ta={"center"} gap={"xl"}>
							<Title order={2} fz={40} c={"pri.4"}>
								Book Your Space
							</Title>
							<Text>
								Additional tickets to the quantity listed in each package will have to be purchased
								separately; i.e. Additional participants will have to purchase a ticket.
							</Text>
						</Stack>
						<Grid justify="center">
							{data.exhibition.booths.map(booth => (
								<Grid.Col key={booth.title} span={{ base: 12, md: 6 }}>
									<Card.Booth data={booth} />
								</Grid.Col>
							))}
						</Grid>
					</Stack>
				</Layout.Section>
			</Layout.Page>
		</Layout.Body>
	);
}
