import React from "react";
import { useLoaderData, useParams } from "react-router-dom";

import Layout from "@src/layouts";
import Partial from "@src/partials";
import { Anchor, Divider, Grid, Group, Image, Stack, Text, Title } from "@mantine/core";

import data from "@src/data";
import hook from "@src/hooks";

import { typeModerator } from "@src/types/people";

import classes from "./Moderator.module.scss";

// export async function loader() {
// 	return "data";
// }

export default function Moderator() {
	// const data = useLoaderData();
	const { moderator } = useParams();

	const person: typeModerator | undefined = data.people.moderators.find(m => hook.useLinkify(m.name) == moderator);

	return (
		<Layout.Body header={<Partial.Header.Main />} nav={<Partial.Navbar.Main />} footer={<Partial.Footer.Main />}>
			<Layout.Page hero={<Layout.Hero.Route />}>
				<Layout.Section containerized margined>
					<Grid gutter={48}>
						<Grid.Col span={{ base: 12, sm: 6 }}>
							<Stack gap={"xl"} align="center" className={classes.card}>
								<Image src={person?.image} w={"100%"} className={classes.image} />
								<Stack>
									<Anchor href={`mailto:${person?.contact.email}`} inherit className={classes.link}>
										{person?.contact.email}
									</Anchor>
									<Group justify="center">
										{person?.contact.phone.map(item => (
											<Anchor href={`tel:${item}`} inherit className={classes.link}>
												{item}
											</Anchor>
										))}
									</Group>
									<Group justify="center">
										{person?.contact.socials.map(social => (
											<Anchor
												key={social.link}
												inherit
												href={social.link}
												tt={"capitalize"}
												className={classes.link}
											>
												{social.label}
											</Anchor>
										))}
									</Group>
								</Stack>
							</Stack>
						</Grid.Col>
						<Grid.Col span={{ base: 12, sm: 6 }}>
							<Stack gap={"xl"}>
								<Stack gap={0}>
									<Title order={2} fz={40} c={"pri"}>
										{person?.name}
									</Title>
									<Text fw={"bold"}>
										{person?.occupation.position}, {person?.occupation.pow}
									</Text>
									<Grid justify={"end"}>
										<Grid.Col span={{ base: 6, md: 4 }}>
											<Image src={person?.occupation.image} alt={person?.occupation.pow} />
										</Grid.Col>
									</Grid>
								</Stack>
								<Divider />
								<Stack gap={"xs"}>
									{person?.bio.map(item => (
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
