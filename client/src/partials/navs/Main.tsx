import React from "react";
import { Link, NavLink } from "react-router-dom";

import { Group, Burger, Box, Container, Drawer, Stack, Grid, ButtonGroup, Button, Image } from "@mantine/core";
import { useDisclosure, useMediaQuery } from "@mantine/hooks";

import classes from "./Main.module.scss";
import "./link.scss";
import image from "@src/assets/images";
import data from "@src/data";

export default function Main() {
	const [opened, { open, close }] = useDisclosure(false);

	const anchors = data.links.navbar.map(link => (
		<NavLink key={link.label} to={link.link} className={classes.link} onClick={() => close()}>
			{link.label}
		</NavLink>
	));

	const cta = (
		<ButtonGroup>
			<Button fullWidth variant="outline" color="sec" component={Link} to={"/registration/booths"}>
				Booths
			</Button>
			<Button fullWidth color="sec" c={"dark.9"} component={Link} to={"/registration/tickets"}>
				Tickets
			</Button>
		</ButtonGroup>
	);

	return (
		<Box className={classes.box}>
			<Container>
				<Grid align="center" gutter={0}>
					<Grid.Col span={{ base: 9, md: 3 }}>
						<Box w={200}>
							<Link to={"/"}>
								<Image src={image.brand.landscape} w={"100%"} />
							</Link>
						</Box>
					</Grid.Col>
					<Grid.Col span={{ md: 6 }} visibleFrom="md">
						<Group justify="center" gap={"xl"}>
							{anchors}
						</Group>
					</Grid.Col>
					<Grid.Col span={{ md: 3 }} visibleFrom="md">
						<Group justify="end">{cta}</Group>
					</Grid.Col>
					<Grid.Col span={3} hiddenFrom="md">
						<Group justify="end" gap={0}>
							<Burger opened={opened} onClick={open} size="sm	" />
						</Group>
					</Grid.Col>
				</Grid>

				<Drawer opened={opened} onClose={close} withCloseButton={false} size={240}>
					<Stack>
						<Stack gap={0}>{anchors}</Stack>
						{cta}
					</Stack>
				</Drawer>
			</Container>
		</Box>
	);
}
