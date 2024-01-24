import React from "react";

import { Container } from "@mantine/core";

import Layout from "@src/layouts";
import Partial from "@src/partials";

const sampleValues = {
	fname: "John",
	lname: "Doe",
	email: "john.doe@example.com",
	phone: "+254 703 510-701",
	subject: "Sample Email",
	message: "This is a sample message",
};

export default function Contact() {
	return (
		<Layout.Body>
			{/* <Partial.Email.Contact formValues={sampleValues} /> */}
			<Container size={"xs"} py={"xl"}>
				<Partial.Form.Contact />
			</Container>
		</Layout.Body>
	);
}
