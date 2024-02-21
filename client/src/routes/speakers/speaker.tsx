import React from "react";
import { useLoaderData, useParams } from "react-router-dom";

import Layout from "@src/layouts";
import Partial from "@src/partials";
import { Anchor, Divider, Grid, Group, Image, Stack, Text, Title } from "@mantine/core";

import data from "@src/data";
import hook from "@src/hooks";

import { typeSpeaker } from "@src/types/people";

import classes from "./Speaker.module.scss";

// export async function loader() {
// 	return "data";
// }

export default function Speaker() {
	// const data = useLoaderData();
	const { speaker } = useParams();

	const personDetails: typeSpeaker | undefined = data.people.find(p => hook.useLinkify(p.name) == speaker);

	return (
		<Layout.Body header={<Partial.Header.Main />} nav={<Partial.Navbar.Main />} footer={<Partial.Footer.Main />}>
			<Layout.Page hero={<Layout.Hero.Route />}>
				<Layout.Section containerized margined>
					<Grid gutter={48}>
						<Grid.Col span={{ base: 12, sm: 6, md: 5 }}>
							<Stack gap={"xl"} className={classes.card}>
								<Image src={personDetails?.image} w={"100%"} className={classes.image} />
								<Stack px={"xl"}>
									<Group justify="center">
										{/* <Text component="span" inherit fw={500} className={classes.label}>
											Email
										</Text> */}
										<Anchor
											href={`mailto:${personDetails?.contact.email}`}
											inherit
											className={classes.link}
										>
											{personDetails?.contact.email}
										</Anchor>
									</Group>
									{/* {personDetails?.contact.phone.map(item => (
										<Group key={item} justify="space-between">
											<Text key={item} component="span" fw={500} className={classes.label}>
												Phone{" "}
												{personDetails?.contact.phone.length > 1 &&
													personDetails?.contact.phone.indexOf(item) + 1}
											</Text>
											<Anchor href={`tel:${item}`} inherit className={classes.link}>
												{item}
											</Anchor>
										</Group>
									))} */}
									{/* <Divider color="sec.6" /> */}
									{personDetails?.contact.socials && (
										<Group justify="center">
											{personDetails?.contact.socials.map(social => (
												<Anchor
													key={social.link}
													inherit
													href={social.link}
													target="_blank"
													className={classes.link}
												>
													<Image
														src={data.icons.social.find(i => i.label == social.label)?.icon}
														w={36}
														h={36}
														alt={social.label}
													/>
												</Anchor>
											))}
										</Group>
									)}
								</Stack>
							</Stack>
						</Grid.Col>
						<Grid.Col span={{ base: 12, sm: 6, md: 7 }} ta={{ base: "center", xs: "start" }}>
							<Stack gap={"xl"}>
								<Stack gap={0}>
									<Grid align="end">
										<Grid.Col span={{ base: 12, xs: 6, sm: 12, md: 9 }}>
											<Title order={2} fz={40} c={"pri"}>
												{personDetails?.name}
											</Title>
											<Text fw={"bold"}>
												{personDetails?.occupation.position}, {personDetails?.occupation.pow}
											</Text>
										</Grid.Col>
										<Grid.Col span={{ base: 12, xs: 6, sm: 12, md: 3 }}>
											<Image
												src={personDetails?.occupation.image}
												alt={personDetails?.occupation.pow}
												className={classes.logo}
											/>
										</Grid.Col>
									</Grid>
								</Stack>
								<Divider />
								<Stack gap={"xs"}>
									{personDetails?.bio.map(item => (
										<Text key={item}>{item}</Text>
									))}
								</Stack>
							</Stack>
						</Grid.Col>
					</Grid>
				</Layout.Section>
			</Layout.Page>
		</Layout.Body>
	);
}
