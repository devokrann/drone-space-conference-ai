import React from "react";
import { Link } from "react-router-dom";

import { Accordion, Anchor, Container, Divider, Group, Stack, Text } from "@mantine/core";

import { typeSpeaker } from "@src/types/people";

import card from "../card";

import clases from "./Program.module.scss";
import hook from "@src/hooks";

export default function Program({
	data,
}: {
	data: {
		title: { duration: string; heading: string };
		desc: { agenda: string; questions?: string[]; participants?: typeSpeaker[]; moderator?: typeSpeaker };
	}[];
}) {
	const items = data.map(item => (
		<Accordion.Item key={item.title.duration} value={item.title.duration}>
			<Accordion.Control>
				<Group>
					<Text component="span">{item.title.duration}</Text>-
					<Text component="span">{item.title.heading}</Text>
				</Group>
			</Accordion.Control>
			<Accordion.Panel fz={"sm"}>
				<Container>
					<Stack>
						{item.desc.agenda && (
							<Stack gap={"xs"}>
								{/* <Divider variant="dashed" label="Agenda" labelPosition="left" /> */}
								<Text inherit fw={500}>
									{item.desc.agenda}
								</Text>
							</Stack>
						)}

						{item.desc.questions && (
							<Stack gap={"xs"}>
								<Divider variant="dashed" label="Questions" labelPosition="left" />
								<Stack gap={"xs"}>
									{item.desc.questions?.map(question => (
										<Text inherit key={question}>
											{question}
										</Text>
									))}
								</Stack>
							</Stack>
						)}

						{item.desc.participants && item.desc.participants?.filter(p => p != undefined).length > 0 && (
							<Stack gap={"xs"}>
								<Divider variant="dashed" label={`Participants`} labelPosition="left" />
								{/* <Stack gap={"xs"}>
									{item.desc.participants?.map(participant => (
										<Text inherit key={participant}>
											{participant}
										</Text>
									))}
								</Stack> */}
								<Group>
									{item.desc.participants.map(participant => (
										<Anchor
											key={participant.name}
											underline="never"
											w={"fit-content"}
											component={Link}
											to={`/speakers/${hook.useLinkify(participant.name)}`}
										>
											<card.Speaker.Agenda data={participant} />
										</Anchor>
									))}
								</Group>
							</Stack>
						)}

						{item.desc.moderator && (
							<Stack gap={"xs"}>
								<Divider variant="dashed" label="Moderator" labelPosition="left" />
								<Group>
									<Anchor
										underline="never"
										w={"fit-content"}
										component={Link}
										to={`/speakers/${hook.useLinkify(item.desc.moderator.name)}`}
									>
										<card.Speaker.Agenda data={item.desc.moderator} />
									</Anchor>
								</Group>
							</Stack>
						)}
					</Stack>
				</Container>
			</Accordion.Panel>
		</Accordion.Item>
	));

	return (
		<Accordion
			defaultValue={data[0].title.duration}
			classNames={{ control: clases.control, content: clases.content, label: clases.label, item: clases.item }}
		>
			{items}
		</Accordion>
	);
}
