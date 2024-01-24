import { Container, createTheme } from "@mantine/core";

const projectName = createTheme({
	//font
	fontSmoothing: true,

	// color
	colors: {
		pri: [
			"#e1f9ff",
			"#ccedff",
			"#9ad7ff",
			"#64c1ff",
			"#3baefe",
			"#20a2fe",
			"#099cff",
			"#0088e4",
			"#0078cd",
			"#0069b6",
		],
		sec: [
			"#ffe9f1",
			"#ffd1e0",
			"#faa1bd",
			"#f66e99",
			"#f2437a",
			"#f02866",
			"#f0185c",
			"#d6094d",
			"#c00043",
			"#a90039",
		], // (optional)
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
