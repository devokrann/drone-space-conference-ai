import React from "react";

import { Accordion, Container, Divider, Grid, Group, Stack, Text } from "@mantine/core";

import clases from "./Program.module.scss";

export default function Program({
	data,
}: {
	data: {
		title: { duration: string; heading: string };
		desc: { agenda: string; questions?: string[]; participants?: string[]; moderator?: string };
	}[];
}) {
	const items = data.map(item => (
		<Accordion.Item key={item.title} value={item.title.duration}>
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
							<>
								<Divider variant="dashed" label="Agenda" labelPosition="left" />
								<Text inherit>{item.desc.agenda}</Text>
							</>
						)}

						{item.desc.questions && (
							<>
								<Divider variant="dashed" label="Questions" labelPosition="left" />
								<Stack gap={"xs"}>
									{item.desc.questions?.map(question => (
										<Text inherit key={question}>
											{question}
										</Text>
									))}
								</Stack>
							</>
						)}

						{item.desc.participants && (
							<>
								<Divider variant="dashed" label="Participants" labelPosition="left" />
								<Stack gap={"xs"}>
									{item.desc.participants?.map(participant => (
										<Text inherit key={participant}>
											{participant}
										</Text>
									))}
								</Stack>
							</>
						)}

						{item.desc.moderator && (
							<>
								<Divider variant="dashed" label="Moderator" labelPosition="left" />
								<Text inherit>
									<Text component="span" inherit fw={500}>
										Moderator
									</Text>{" "}
									: {item.desc.moderator}
								</Text>
							</>
						)}
					</Stack>
				</Container>
			</Accordion.Panel>
		</Accordion.Item>
	));

	return (
		<Accordion
			defaultValue={data[0].title}
			classNames={{ control: clases.control, content: clases.content, label: clases.label, item: clases.item }}
		>
			{items}
		</Accordion>
	);
}
