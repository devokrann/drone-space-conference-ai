import React from "react";

import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
	RouterProvider,
} from "react-router-dom";

import Error from "./routes/error";
import Home, { loader as loaderHome } from "./routes/home";
import About from "./routes/about";
import Contact from "./routes/contact";
import Signup from "./routes/auth/signup";
import Login from "./routes/auth/login";
import Verify from "./routes/auth/verify";
import Reset from "./routes/auth/reset";
import Sent from "./routes/auth/reset/sent";
import Change from "./routes/auth/reset/change";

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" errorElement={<Error />}>
			<Route index element={<Home />} loader={loaderHome} />
			<Route path="about" element={<About />} />
			<Route path="contact" element={<Contact />} />

			<Route path="auth">
				<Route path="sign-up" element={<Signup />} />
				<Route path="log-in" element={<Login />} />
				<Route path="verify">
					<Route path=":userEmail" element={<Verify />} />
				</Route>
				<Route path="password-reset">
					<Route index element={<Reset />} />
					<Route path="sent" element={<Sent />} />

					<Route path=":id/:token" element={<Change />} />
				</Route>
			</Route>
		</Route>
	)
);

export default function App() {
	return <RouterProvider router={router} />;
}
