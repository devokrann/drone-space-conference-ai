import { Container, createTheme } from "@mantine/core";

const projectName = createTheme({
	//font
	fontSmoothing: true,

	// color
	colors: {
		pri: [
			"#f7eaff",
			"#e6d2ff",
			"#c8a2fa",
			"#a970f5",
			"#8f44f0",
			"#7e29ee",
			"#761aee",
			"#650ed4",
			"#5909bf",
			"#4c03a8",
		],
	},
	primaryColor: "pri",
	primaryShade: 4,
	defaultGradient: {
		from: "orange",
		to: "red",
		deg: 45,
	},

	cursorType: "pointer",

	components: {
		Container: Container.extend({
			defaultProps: {
				size: "lg",
			},
		}),
	},
});

export default projectName;
