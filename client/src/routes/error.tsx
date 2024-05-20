import { Box, Center, Stack, Text, Title } from "@mantine/core";
import { useRouteError } from "react-router-dom";

export default function Error() {
	const error = useRouteError();
	console.error(error);

	return (
		<Box id="error-page">
			<Center mih={"100vh"}>
				<Stack gap={"xs"} ta={"center"}>
					<Title order={1} ta={"center"}>
						<i>{error.status}</i>
					</Title>
					<Text>
						<i>{error.statusText || error.message}</i>
					</Text>
					<Text>Sorry, an unexpected error has occurred.</Text>
				</Stack>
			</Center>
		</Box>
	);
}
