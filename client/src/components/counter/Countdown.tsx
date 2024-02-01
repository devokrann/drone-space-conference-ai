import React, { useEffect, useState } from "react";

import { Grid, Stack, Text } from "@mantine/core";
import useCountdown from "@src/hooks/timers/countdown";

export default function Countdown() {
	const targetDate = new Date(2024, 9, 14, 23, 59, 59);

	const [time, setTime] = useState(useCountdown(targetDate));

	useEffect(() => {
		const interval = setInterval(() => {
			setTime(useCountdown(targetDate));
		}, 1000);

		return () => clearInterval(interval);
	}, []);

	const values = [
		{ label: "Months", value: time.months },
		{ label: "Days", value: time.days },
		{ label: "Hours", value: time.hours },
		{ label: "Minutes", value: time.minutes },
		{ label: "Seconds", value: time.seconds },
	];

	return (
		<Grid>
			{values.map(value => (
				<Grid.Col key={value.label} span={"auto"}>
					<Stack gap={0} align="center" c={"dark.6"}>
						<Text fz={40} fw={"bold"}>
							{value.value}
						</Text>
						<Text fz={24} fw={500} ta={"center"}>
							{value.label}
						</Text>
					</Stack>
				</Grid.Col>
			))}
		</Grid>
	);
}
