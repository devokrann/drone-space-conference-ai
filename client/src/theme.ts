import { Container, createTheme } from "@mantine/core";

const projectName = createTheme({
	//font
	fontSmoothing: true,

	// color
	colors: {
		pri: [
			"#ebf9ff",
			"#d6effb",
			"#a8def8",
			"#78cdf7",
			"#58bef5",
			"#48b6f5",
			"#3fb1f6",
			"#339bdb",
			"#2589c4",
			"#0077ad",
		],
	},
	primaryColor: "pri",
	primaryShade: 6,
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
