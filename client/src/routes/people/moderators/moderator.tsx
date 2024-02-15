import React from "react";
import { useLoaderData, useParams } from "react-router-dom";

import Layout from "@src/layouts";
import Partial from "@src/partials";
import { Anchor, Divider, Grid, Group, Image, Stack, Text, Title } from "@mantine/core";

import data from "@src/data";
import hook from "@src/hooks";

import { typeModerator } from "@src/types/people";

import classes from "./Moderator.module.scss";
import image from "@src/assets/images";

// export async function loader() {
// 	return "data";
// }

const iconsSocial = [
	{
		label: "facebook",
		icon: image.icon.social.facebook,
	},
	{
		label: "twitter",
		icon: image.icon.social.twitter,
	},
	{
		label: "instagram",
		icon: image.icon.social.instagram,
	},
	{
		label: "linkedin",
		icon: image.icon.social.linkedin,
	},
];

export default function Moderator() {
	// const data = useLoaderData();
	const { moderator } = useParams();

	const person: typeModerator | undefined = data.people.moderators.find(m => hook.useLinkify(m.name) == moderator);

	return (
		<Layout.Body header={<Partial.Header.Main />} nav={<Partial.Navbar.Main />} footer={<Partial.Footer.Main />}>
			<Layout.Page hero={<Layout.Hero.Route />}>
				<Layout.Section containerized margined>
					<Grid gutter={48}>
						<Grid.Col span={{ base: 12, sm: 6, md: 5 }}>
							<Stack gap={"xl"} className={classes.card}>
								<Image src={person?.image} w={"100%"} className={classes.image} />
								<Stack px={"xl"}>
									<Group justify="space-between">
										<Text component="span" inherit fw={500} className={classes.label}>
											Email
										</Text>
										<Anchor
											href={`mailto:${person?.contact.email}`}
											inherit
											className={classes.link}
										>
											{person?.contact.email}
										</Anchor>
									</Group>
									{person?.contact.phone.map(item => (
										<Group key={item} justify="space-between">
											<Text key={item} component="span" fw={500} className={classes.label}>
												Phone{" "}
												{person?.contact.phone.length > 1 &&
													person?.contact.phone.indexOf(item) + 1}
											</Text>
											<Anchor href={`tel:${item}`} inherit className={classes.link}>
												{item}
											</Anchor>
										</Group>
									))}
									<Divider color="sec.6" />
									<Group justify="center">
										{person?.contact.socials.map(social => (
											<Anchor
												key={social.link}
												inherit
												href={social.link}
												target="_blank"
												className={classes.link}
											>
												<Image
													src={iconsSocial.find(i => i.label == social.label)?.icon}
													w={36}
													h={36}
													alt={social.label}
												/>
											</Anchor>
										))}
									</Group>
								</Stack>
							</Stack>
						</Grid.Col>
						<Grid.Col span={{ base: 12, sm: 6, md: 7 }}>
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
