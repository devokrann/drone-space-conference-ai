import React from "react";

import { useDisclosure, useMediaQuery } from "@mantine/hooks";
import { Modal, Button } from "@mantine/core";

import Partial from "@src/partials";

import classes from "./Contact.module.scss";

export default function Contact({
	title,
	inquiry,
	booth,
	sponsorPackage,
	boothSize,
	sold,
	children,
	...restProps
}: {
	title: string;
	inquiry?: string;
	booth?: string;
	sponsorPackage?: string;
	boothSize?: string;
	sold?: boolean;
	children: React.ReactNode;
} & React.ComponentProps<typeof Button>) {
	const [opened, { open, close }] = useDisclosure(false);
	const desktop = useMediaQuery("(min-width: 62em)");

	return (
		<>
			<Modal
				opened={opened}
				centered
				onClose={close}
				withCloseButton={desktop ? false : true}
				title={`${title} Inquiry`}
				size={"xl"}
				classNames={{ header: classes.header, body: classes.body }}
				mah={"50vh"}
			>
				<Partial.Form.Contact
					defaultInquiry={inquiry}
					defaultBooth={booth}
					defaultBoothSize={boothSize}
					defaultPackage={sponsorPackage}
				/>
			</Modal>

			<Button disabled={sold} fullWidth {...restProps}>
				{children}
			</Button>
		</>
	);
}
