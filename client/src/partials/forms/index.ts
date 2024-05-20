import Booth from "./Booth";
import Change from "./Change";
import Contact from "./Contact";
import Login from "./Login";
import Newsletter from "./Newsletter";
import Reset from "./Reset";
import Signup from "./Signup";
import Speaker from "./Speaker";
import Sponsorship from "./Sponsorship";
import Verify from "./Verify";

const form = {
	Signup: Signup,
	Verify: Verify,
	Login: Login,
	Reset: Reset,
	Change: Change,
	Contact: Contact,

	Booth: Booth,
	Sponsorship: Sponsorship,
	Speaker: Speaker,

	// Newsletter: Newsletter,
};
export default form;
