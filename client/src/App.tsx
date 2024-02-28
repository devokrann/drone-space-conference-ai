import React from "react";

import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";

import Error from "./routes/error";
import Home from "./routes/home";
import About from "./routes/about";
import Exhibit from "./routes/exhibit";
import Agenda from "./routes/agenda";
import Speakers from "./routes/speakers";
import Speaker from "./routes/speakers/speaker";
import Sponsors from "./routes/sponsors";
import Tickets from "./routes/registration/tickets";
import Booths from "./routes/registration/booths";
import Hackathon from "./routes/hackathon";
// import Contact from "./routes/contact";
// import Signup from "./routes/auth/signup";
// import Login from "./routes/auth/login";
// import Verify from "./routes/auth/verify";
// import Reset from "./routes/auth/reset";
// import Sent from "./routes/auth/reset/sent";
// import Change from "./routes/auth/reset/change";

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" errorElement={<Error />}>
			<Route index element={<Home />} />
			{/* <Route path="about" element={<About />} /> */}
			<Route path="exhibit" element={<Exhibit />} />
			<Route path="agenda" element={<Agenda />} />
			<Route path="hackathon" element={<Hackathon />} />
			<Route path="speakers">
				<Route index element={<Speakers />} />
				<Route path=":speaker" element={<Speaker />} />
			</Route>
			<Route path="sponsors" element={<Sponsors />} />
			<Route path="registration">
				<Route path="tickets" element={<Tickets />} />
				<Route path="booths" element={<Booths />} />
			</Route>

			{/* <Route path="contact" element={<Contact />} /> */}

			{/* <Route path="auth">
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
			</Route> */}
		</Route>
	)
);

export default function App() {
	return <RouterProvider router={router} />;
}
