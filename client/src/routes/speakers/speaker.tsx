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
					<Grid>
						<Grid.Col span={{ base: 12, sm: 6, md: personDetails?.poster ? 5.5 : 4 }}>
							<Stack gap={"xl"} pb={personDetails?.contact ? "xl" : undefined} className={classes.card}>
								<Image
									src={personDetails?.poster ? personDetails?.poster : personDetails?.image}
									w={"100%"}
									className={classes.image}
								/>

								{personDetails?.contact && (
									<Stack px={"xl"}>
										{personDetails?.contact.email && (
											<Group justify="center">
												<Anchor
													href={`mailto:${personDetails?.contact.email}`}
													inherit
													className={classes.link}
												>
													{personDetails?.contact.email}
												</Anchor>
											</Group>
										)}
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
															src={
																data.icons.social.find(i => i.label == social.label)
																	?.icon
															}
															w={36}
															h={36}
															alt={social.label}
														/>
													</Anchor>
												))}
											</Group>
										)}
									</Stack>
								)}
							</Stack>
						</Grid.Col>
						<Grid.Col
							span={{ base: 12, sm: 6, md: personDetails?.poster ? 6.5 : 8 }}
							ta={{ base: "center", xs: "start" }}
							pl={{ md: "md" }}
						>
							<Stack gap={"xl"}>
								<Stack gap={0}>
									<Grid align="end">
										<Grid.Col span={{ base: 12, xs: 6, sm: 12, md: 9 }}>
											<Title order={2} fz={40} c={"pri"}>
												{personDetails?.name}
											</Title>
											<Text fw={"bold"}>
												{personDetails?.occupation.position}
												{personDetails?.occupation.pow && `, ${personDetails?.occupation.pow}`}
											</Text>
										</Grid.Col>
										{personDetails?.occupation.image && (
											<Grid.Col span={{ base: 12, xs: 6, sm: 12, md: 3 }}>
												<Image
													src={personDetails?.occupation.image}
													alt={personDetails?.occupation.pow}
													className={classes.logo}
												/>
											</Grid.Col>
										)}
									</Grid>
								</Stack>
								<Divider />
								<Stack gap={"xs"}>
									{personDetails?.bio.map(item => (
										<Text key={item} fz={"sm"}>
											{item}
										</Text>
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
