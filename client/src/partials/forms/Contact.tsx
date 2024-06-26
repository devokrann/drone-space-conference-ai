import React from "react";
import ReactDOMServer from "react-dom/server";
import { Link } from "react-router-dom";
import { useState } from "react";

import {
	Anchor,
	Box,
	Button,
	Checkbox,
	Grid,
	Input,
	Select,
	TagsInput,
	Text,
	TextInput,
	Textarea,
} from "@mantine/core";
import { hasLength, isNotEmpty, useForm } from "@mantine/form";
import { notifications } from "@mantine/notifications";

import { IconCheck, IconWorld, IconX } from "@tabler/icons-react";

import { IMaskInput } from "react-imask";

import postContact from "@src/apis/postContact";

import email from "../email";

import emailjs from "@emailjs/browser";

import { typeContact } from "@src/types/form";

import utility from "@src/utilities";

import notificationSuccess from "@src/styles/notifications/Success.module.scss";
import notificationFail from "@src/styles/notifications/Fail.module.scss";
import Component from "@src/components";

const templates = {
	general: "general_inquiries",
	hackathon: "hackathon_inquiry",
};

export default function Contact({
	defaultInquiry = "",
	defaultPackage = "",
	defaultBooth = "",
	defaultBoothSize = "",
}: {
	defaultInquiry?: string;
	defaultPackage?: string;
	defaultBooth?: string;
	defaultBoothSize?: string;
}) {
	const [submitted, setSubmitted] = useState(false);

	const form = useForm({
		initialValues: {
			fname: "",
			lname: "",
			email: "",
			subject: defaultInquiry,

			companyName: "",

			universityName: "",
			contactPerson: "",
			contactEmail: "",
			contactPhoneNumber: "",

			sponsorshipPackage: defaultPackage,

			boothPackage: defaultBooth,
			boothSize: defaultBoothSize,

			websiteLink: "",
			teamMember1: "",
			teamMember2: "",
			teamMember3: "",
			teamMember4: "",

			message: "",
			// policy: false,
		},

		validate: {
			fname: value => utility.validator.form.special.text(value, 2, 24),
			lname: value => utility.validator.form.special.text(value, 2, 24),
			email: value => utility.validator.form.special.email(value),

			companyName: (value, values) =>
				(values.boothPackage == "Corporate" || values.subject == "Sponsorship Application") &&
				utility.validator.form.special.text(value, 2, 24),

			universityName: (value, values) =>
				(values.subject == "University Pavilion Application" || values.boothPackage == "University") &&
				utility.validator.form.special.text(value, 2, 24),
			contactPerson: (value, values) =>
				(values.subject == "University Pavilion Application" || values.subject == "Sponsorship Application") &&
				utility.validator.form.special.text(value, 2, 24),
			contactEmail: (value, values) =>
				(values.subject == "University Pavilion Application" || values.subject == "Sponsorship Application") &&
				utility.validator.form.special.email(value),
			contactPhoneNumber: (value, values) =>
				(values.subject == "University Pavilion Application" ||
					values.subject == "Sponsorship Application" ||
					values.subject == "Speaker Registration") &&
				value.trim().length > 0 &&
				utility.validator.form.special.phone(value),

			sponsorshipPackage: (value, values) =>
				values.subject == "Sponsorship Application" &&
				(value.trim().length < 1 ? "Please select a package" : null),

			boothPackage: (value, values) =>
				values.subject == "Booth Registration" && (value.trim().length < 1 ? "Please select a package" : null),
			boothSize: (value, values) =>
				values.subject == "Booth Registration" && (value.trim().length < 1 ? "Please select a size" : null),

			websiteLink: (value, values) =>
				values.subject == "Hackathon Registration" &&
				value.trim().length > 0 &&
				utility.validator.form.special.text(value, 2, 24),

			teamMember1: (value, values) =>
				values.subject == "Hackathon Registration" &&
				(value.trim().length > 0
					? utility.validator.form.special.text(value, 2, 24)
					: "At least 1 team member"),
			teamMember2: (value, values) =>
				values.subject == "Hackathon Registration" &&
				value.trim().length > 0 &&
				(values.teamMember1.trim().length > 0
					? utility.validator.form.special.text(value, 2, 24)
					: "Please add team member 1 first"),
			teamMember3: (value, values) =>
				values.subject == "Hackathon Registration" &&
				value.trim().length > 0 &&
				(values.teamMember2.trim().length > 0
					? utility.validator.form.special.text(value, 2, 24)
					: "Please add team member 2 first"),
			teamMember4: (value, values) =>
				values.subject == "Hackathon Registration" &&
				value.trim().length > 0 &&
				(values.teamMember3.trim().length > 0
					? utility.validator.form.special.text(value, 2, 24)
					: "Please add team member 3 first"),

			subject: value => (value.trim().length < 1 ? "Please select a line of inquiry" : null),
			message: hasLength({ min: 10 }, "At least 10 characters"),
			// policy: isNotEmpty("You must accept to proceed"),
		},
	});

	const parse = (rawData: typeContact) => {
		let {
			fname,
			lname,
			email,
			subject,
			message,

			companyName,
			universityName,
			contactPerson,
			contactEmail,
			contactPhoneNumber,
			sponsorshipPackage,
			boothPackage,
			boothSize,
			websiteLink,
			teamMember1,
			teamMember2,
			teamMember3,
			teamMember4,
		} = rawData;

		fname = utility.parser.string.capitalize.word(fname);
		lname = utility.parser.string.capitalize.word(lname);
		email = email.toLowerCase();

		companyName = utility.parser.string.capitalize.words(companyName);
		universityName = utility.parser.string.capitalize.words(universityName);
		contactPerson = utility.parser.string.capitalize.words(contactPerson);
		contactEmail = contactEmail.toLowerCase();
		websiteLink = websiteLink.toLowerCase();

		teamMember1 = utility.parser.string.capitalize.words(teamMember1);
		teamMember2 = utility.parser.string.capitalize.words(teamMember2);
		teamMember3 = utility.parser.string.capitalize.words(teamMember3);
		teamMember4 = utility.parser.string.capitalize.words(teamMember4);
		return {
			fname,
			lname,
			email,
			subject: subject == "Other" ? "AI Conference" : subject,
			message,

			companyName: subject != "Other" && companyName.length > 1 ? `Company Name: ${companyName}` : "",
			universityName: subject != "Other" && universityName.length > 1 ? `University Name: ${universityName}` : "",
			contactPerson: subject != "Other" && contactPerson.length > 1 ? `Contact Person: ${contactPerson}` : "",
			contactEmail: subject != "Other" && contactEmail.length > 1 ? `Contact Email: ${contactEmail}` : "",
			contactPhoneNumber:
				subject != "Other" && contactPhoneNumber.length > 1
					? `Contact Phone Number: ${contactPhoneNumber}`
					: "",
			sponsorshipPackage:
				subject != "Other" && sponsorshipPackage.length > 1
					? `Sponsorship Package: ${sponsorshipPackage} Sponsorship`
					: "",
			boothPackage: subject != "Other" && boothPackage.length > 1 ? `Booth Package: ${boothPackage} Booth` : "",
			boothSize: subject != "Other" && boothSize.length > 1 ? `Booth Size: ${boothSize}` : "",
			websiteLink: subject != "Other" && websiteLink.length > 1 ? `Link to Website: ${websiteLink}` : "",

			teamMember1:
				subject != "Other" && teamMember1.length > 1
					? `Team Member ${(teamMember2 || teamMember3 || teamMember4) && " 1"}: ${teamMember1}`
					: "",
			teamMember2: subject != "Other" && teamMember2.length > 1 ? `Team Member 2: ${teamMember2}` : "",
			teamMember3: subject != "Other" && teamMember3.length > 1 ? `Team Member 3: ${teamMember3}` : "",
			teamMember4: subject != "Other" && teamMember4.length > 1 ? `Team Member 4: ${teamMember4}` : "",
		};
	};

	const messageContent = () => {
		switch (form.values.subject) {
			case "University Pavilion Application":
				return {
					label: "University Description",
					desc: "Brief description of university's focus in Drones, Data, and AI, and any other relevant information.",
				};

			case "Sponsorship Application":
				return {
					label: "Sponsor Description",
					desc: "Brief description of the organization you represent and any other relevant information.",
				};

			case "Booth Registration":
				return {
					label: "Exhibitior Description",
					desc: "Brief description of what you would like to showcase and any other relevant information.",
				};

			case "Hackathon Registration":
				return {
					label: "Startup Description",
					desc: "Brief description of your startup and any other relevant information.",
				};

			default:
				return { label: "Message", desc: "" };
		}
	};

	const handleSubmit = async (formValues: typeContact) => {
		if (form.isValid()) {
			setSubmitted(true);

			// console.log(parse(formValues));

			await emailjs
				.send(
					"service_gmail",
					form.values.subject == "Hackathon Registration" ? templates.hackathon : templates.general,
					parse(formValues),
					"WIhPTsJnYGDJDfdIP"
				)
				.then(() =>
					notifications.show({
						id: "send-success",
						withCloseButton: false,
						icon: <IconCheck size={16} stroke={1.5} />,
						autoClose: 5000,
						title: "Sent",
						message: "Someone will get back to you within 24 hours",
						classNames: {
							root: notificationSuccess.root,
							icon: notificationSuccess.icon,
							description: notificationSuccess.description,
							title: notificationSuccess.title,
						},
					})
				)
				.then(() => form.reset())
				.then(() => setSubmitted(false))
				.catch(error =>
					notifications.show({
						id: "send-fail",
						withCloseButton: false,
						icon: <IconX size={16} stroke={1.5} />,
						autoClose: 5000,
						title: "Send Failed",
						message: `Error: ${error.message}`,
						classNames: {
							root: notificationFail.root,
							icon: notificationFail.icon,
							description: notificationFail.description,
							title: notificationFail.title,
						},
					})
				);

			setSubmitted(false);
		}
	};

	const companyNameInput = (
		<Grid.Col span={{ base: 12, sm: 6 }}>
			<Component.Input.Text
				required
				label="Company Name"
				description={"The organization you represent"}
				placeholder="Enter your company name here"
				{...form.getInputProps("companyName")}
			/>
		</Grid.Col>
	);

	return (
		<Box component="form" onSubmit={form.onSubmit(values => handleSubmit(values))} noValidate>
			<Grid>
				<Grid.Col span={{ base: 12, sm: 6 }}>
					<Component.Input.Text
						required
						label={"First Name"}
						placeholder="Your Name"
						{...form.getInputProps("fname")}
					/>
				</Grid.Col>
				<Grid.Col span={{ base: 12, sm: 6 }}>
					<Component.Input.Text
						required
						label={"Last Name"}
						placeholder="Your Name"
						{...form.getInputProps("lname")}
					/>
				</Grid.Col>
				<Grid.Col span={{ base: 12, sm: 6 }}>
					<Component.Input.Text
						required
						label={"Email"}
						description="We will never share your email"
						placeholder="Your Email"
						{...form.getInputProps("email")}
					/>
				</Grid.Col>
				<Grid.Col span={{ base: 12, sm: 6 }}>
					<Component.Input.Select
						label="Inquiry"
						description="What are you inquiring about?"
						// placeholder="Select an inquiry"
						defaultValue={defaultInquiry}
						data={[
							{
								label: "Select an inquiry",
								value: "",
							},
							{
								label: "Booth Registration",
								value: "Booth Registration",
							},
							{
								label: "Sponsorship Application",
								value: "Sponsorship Application",
							},
							{
								label: "Speaker Registration",
								value: "Speaker Registration",
							},
							{
								label: "Hackathon Registration",
								value: "Hackathon Registration",
							},
							{ label: "Other", value: "Other" },
						]}
						required
						{...form.getInputProps("subject")}
					/>
				</Grid.Col>

				{form.values.subject == "Sponsorship Application" && (
					<Grid.Col span={{ base: 12, sm: 6 }}>
						<Component.Input.Select
							label="Sponsorship Package"
							description="The package you intend to purchase"
							// placeholder="Select an inquiry"
							defaultValue={defaultPackage}
							data={[
								{
									label: "Select a package",
									value: "",
								},
								{
									label: "Title Sponsorship Package",
									value: "Title",
								},
								{
									label: "Platinum Sponsorship Package",
									value: "Platinum",
								},
								{
									label: "Gold Sponsorship Package",
									value: "Gold",
								},
								{
									label: "Silver Sponsorship Package",
									value: "Silver",
								},
								{
									label: "Bronze Sponsorship Package",
									value: "Bronze",
								},
								{
									label: "Coffee Break Sponsorship Package",
									value: "Coffee Break",
								},
								{
									label: "5G Wi-Fi Sponsorship Package",
									value: "5G Wi-Fi",
								},
								{
									label: "Hackathon Sponsorship Package",
									value: "Hackathon",
								},
							]}
							required
							{...form.getInputProps("sponsorshipPackage")}
						/>
					</Grid.Col>
				)}

				<Grid.Col
					span={{ base: 12, xs: 6, sm: 12, md: 6 }}
					display={
						form.values.subject == "University Pavilion Application" ||
						form.values.boothPackage == "University"
							? "block"
							: "none"
					}
				>
					<Component.Input.Text
						required
						label="University Name"
						description={`The ${
							form.values.subject == "University Pavilion Application" ? "university" : "organization"
						} you represent`}
						placeholder="Enter your university name here"
						{...form.getInputProps("universityName")}
					/>
				</Grid.Col>
				<Grid.Col
					span={{ base: 12, sm: 6 }}
					display={
						form.values.subject == "University Pavilion Application" ||
						form.values.subject == "Sponsorship Application"
							? "block"
							: "none"
					}
				>
					<Component.Input.Text
						required
						label="Contact Person"
						description={`Any PR representative of the ${
							form.values.subject == "University Pavilion Application" ? "university" : "organization"
						}`}
						placeholder="Enter your name(s) here"
						{...form.getInputProps("contactPerson")}
					/>
				</Grid.Col>
				<Grid.Col
					span={{ base: 12, sm: 6 }}
					display={
						form.values.subject == "University Pavilion Application" ||
						form.values.subject == "Sponsorship Application" ||
						form.values.subject == "Speaker Registration" ||
						form.values.subject == "Hackathon Registration"
							? "block"
							: "none"
					}
				>
					<Component.Input.Text
						label="Contact Phone Number"
						description={`The ${
							form.values.subject == "University Pavilion Application"
								? "university"
								: form.values.subject == "Hackathon Registration"
								? "team leader"
								: "organization"
						}'s contact number`}
						placeholder="Enter your phone number here"
						{...form.getInputProps("contactPhoneNumber")}
					/>
				</Grid.Col>
				<Grid.Col
					span={{ base: 12, xs: 6 }}
					display={form.values.subject == "Hackathon Registration" ? "block" : "none"}
				>
					<Component.Input.Text
						label="Website Link"
						leftSection={<IconWorld size={16} />}
						styles={{ input: { paddingLeft: "var(--mantine-spacing-xl)" } }}
						description={`The link to your website`}
						placeholder="Enter link here"
						{...form.getInputProps("websiteLink")}
					/>
				</Grid.Col>

				<Grid.Col
					span={{ base: 12 }}
					display={form.values.subject == "Hackathon Registration" ? "block" : "none"}
				>
					<Component.Input.Text
						required
						label={"Team Member 1"}
						description={"The member's full name"}
						placeholder="Enter name here"
						{...form.getInputProps("teamMember1")}
					/>
				</Grid.Col>
				<Grid.Col
					span={{ base: 12 }}
					display={form.values.subject == "Hackathon Registration" ? "block" : "none"}
				>
					<Component.Input.Text
						label={"Team Member 2"}
						description={"The member's full name"}
						placeholder="Enter name here"
						{...form.getInputProps("teamMember2")}
					/>
				</Grid.Col>
				<Grid.Col
					span={{ base: 12 }}
					display={form.values.subject == "Hackathon Registration" ? "block" : "none"}
				>
					<Component.Input.Text
						label={"Team Member 3"}
						description={"The member's full name"}
						placeholder="Enter name here"
						{...form.getInputProps("teamMember3")}
					/>
				</Grid.Col>
				<Grid.Col
					span={{ base: 12 }}
					display={form.values.subject == "Hackathon Registration" ? "block" : "none"}
				>
					<Component.Input.Text
						label={"Team Member 4"}
						description={"The member's full name"}
						placeholder="Enter name here"
						{...form.getInputProps("teamMember4")}
					/>
				</Grid.Col>

				<Grid.Col
					span={{ base: 12, sm: 6 }}
					display={
						form.values.subject == "University Pavilion Application" ||
						form.values.subject == "Sponsorship Application"
							? "block"
							: "none"
					}
				>
					<Component.Input.Text
						required
						label="Contact Email"
						description={`The ${
							form.values.subject == "University Pavilion Application" ? "university" : "organization"
						}'s contact email`}
						placeholder="Enter your email here"
						{...form.getInputProps("contactEmail")}
					/>
				</Grid.Col>
				<Grid.Col
					span={{ base: 12, sm: 6 }}
					display={form.values.subject == "Booth Registration" ? "block" : "none"}
				>
					<Component.Input.Select
						label="Booth Package"
						description="The package you intend to purchase"
						defaultValue={defaultPackage}
						data={[
							{
								label: "Select a booth type",
								value: "",
							},
							{
								label: "Startup II Booth",
								value: "Startup II",
							},
							{
								label: "University Booth",
								value: "University",
							},
							{
								label: "SME Booth",
								value: "SME",
							},
							{
								label: "Corporate Booth",
								value: "Corporate",
							},
						]}
						required
						{...form.getInputProps("boothPackage")}
					/>
				</Grid.Col>
				<Grid.Col
					span={{ base: 12, sm: 6 }}
					display={form.values.subject == "Booth Registration" ? "block" : "none"}
				>
					<Component.Input.Select
						label="Booth Size"
						description={"Dimentions of the booth"}
						defaultValue={defaultBoothSize}
						data={[
							{
								label: "Select a booth size",
								value: "",
							},
							{
								label: "3M by 2M (6 sqm)",
								value: "3M by 2M",
							},
							{
								label: "3M by 3M (9 sqm)",
								value: "3M by 3M",
							},
							{
								label: "6M by 3M (18 sqm)",
								value: "6M by 3M",
							},
						]}
						required
						{...form.getInputProps("boothSize")}
					/>
				</Grid.Col>

				{(form.values.boothPackage == "Corporate" || form.values.subject == "Sponsorship Application") &&
					companyNameInput}

				<Grid.Col span={12}>
					<Component.Input.Textarea
						label={messageContent().label}
						description={messageContent().desc}
						required
						placeholder="Write your message here..."
						autosize
						minRows={3}
						maxRows={10}
						{...form.getInputProps("message")}
					/>
				</Grid.Col>
				{/* <Grid.Col span={{ base: 12, sm: 12 }}>
					<Checkbox
						radius={"xl"}
						ml={"md"}
						defaultValue={0}
						label={
							<Text inherit>
								I have read and accept the{" "}
								<Anchor
									component={Link}
									to={"/policy/terms-and-conditions"}
									inherit
									fw={500}
									onClick={e => e.preventDefault()}
									c={"pri.6"}
								>
									terms of use
								</Anchor>
								.
							</Text>
						}
						{...form.getInputProps("policy", { type: "checkbox" })}
					/>
				</Grid.Col> */}
				<Grid.Col span={{ base: 12 }} mt={"xl"}>
					<Grid>
						<Grid.Col span={{ base: 12, sm: 6 }}>
							<Button
								type="reset"
								fullWidth
								color="pri.6"
								onClick={() => form.reset()}
								disabled={submitted}
							>
								Clear
							</Button>
						</Grid.Col>
						<Grid.Col span={{ base: 12, sm: 6 }}>
							<Button type="submit" color={"sec"} c={"dark.6"} fullWidth loading={submitted}>
								{submitted ? "Submitting" : "Submit"}
							</Button>
						</Grid.Col>
					</Grid>
				</Grid.Col>
			</Grid>
		</Box>
	);
}
