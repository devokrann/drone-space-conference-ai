import people from "./people";

const selectSpeaker = (name: string) => people.find(speaker => speaker.name == name);

const program = {
	schedule: {
		day1: [
			{
				title: {
					duration: "09.00 AM – 09.50 AM",
					heading: "Welcome & Opening Keynote",
				},
				desc: {
					agenda: "Official opening of the expo.",
					participants: [selectSpeaker("Tony Mwangi")],
					moderators: [selectSpeaker("Laban Cliff"), selectSpeaker("Faith Maina")],
				},
			},
			{
				title: {
					duration: "09.50 AM – 10.30 AM",
					heading: "Panel Discussion",
				},
				desc: {
					agenda: "How will AI transform the Future (Man vs AI)?",
					platform: "ai",
					participants: [
						selectSpeaker("Bethany Jepchumba"),
						selectSpeaker("Dennis Mwighusa"),
						selectSpeaker("Joan Mbesya"),
						selectSpeaker("Antony Wachira"),
					],
					moderators: [selectSpeaker("Brian George")],
				},
			},
			{
				title: {
					duration: "10.30 AM – 11.00 AM",
					heading: "Coffee Break",
				},
				desc: {
					agenda: "Coffee Break",
				},
			},
			{
				title: { duration: "11.00 AM – 11.30 AM", heading: "Panel Discussion" },
				desc: {
					agenda: "Drone regulation and policy",
					platform: "drones",
					participants: [
						selectSpeaker("Lynette Shalwa"),
						selectSpeaker("Douglas Okwemba"),
						selectSpeaker("Craig Cleave"),
						selectSpeaker("Tony Mwangi"),
						selectSpeaker("Sharon Omoja"),
					],
					moderators: [selectSpeaker("Robert Yawe")],
				},
			},
			{
				title: { duration: "11.30 AM – 12.00 PM", heading: "Speaker Session" },
				desc: {
					agenda: "Masterclass on Leveraging on AI Lawfully.",
					platform: "ai",
					speaker: selectSpeaker("Nathan-Ross Adams"),
				},
			},
			{
				title: { duration: "12.00 PM – 12.30 PM", heading: "Panel Discussion" },
				desc: {
					agenda: "Policy data protection and regulation.",
					platform: "drones",
					participants: [
						selectSpeaker("Nathan-Ross Adams"),
						selectSpeaker("Michael Zimba"),
						selectSpeaker("Pamela Adede"),
					],
					moderators: [selectSpeaker("George Ogada")],
				},
			},
			{
				title: { duration: "12.30 PM – 01.00 PM", heading: "Plenary Session" },
				desc: {
					agenda: "Drones for early detection of pests and diseases.",
					platform: "drones",
					speaker: selectSpeaker("Violet Ochieng"),
				},
			},
			{
				title: { duration: "01.00 PM – 02.00 PM", heading: "Lunch Break" },
				desc: {
					agenda: "Lunch Break",
				},
			},
			{
				title: { duration: "02.00 PM – 02.40 PM", heading: "Panel Session" },
				desc: {
					agenda: "Drone deployment in agriculture and the challenges in crop spraying and data collection.",
					platform: "drones",
					participants: [
						selectSpeaker("Geoffrey Nyaga"),
						selectSpeaker("Robert Blair"),
						selectSpeaker("Hawkins Musili"),
						selectSpeaker("Tawanda Chihambakwe"),
					],
				},
			},
			{
				title: { duration: "02.40 PM – 03.10 PM", heading: "Panel Discussion" },
				desc: {
					agenda: "How can organizations successfully navigate the era of AI powered automation?",
					platform: "ai",
					participants: [
						selectSpeaker("Tolga Ors"),
						selectSpeaker("Mutembei Kariuki"),
						selectSpeaker("Benaiah Wepundi"),
						selectSpeaker("Joel Onditi"),
						selectSpeaker("Magdaline Chepkemoi"),
					],
					moderators: [selectSpeaker("Laban Cliff")],
				},
			},
			{
				title: { duration: "03.10 PM – 03.30 PM", heading: "Plenary Session" },
				desc: {
					agenda: "The future of Work. Don’t give human a Robot.",
					platform: "ai",
					speaker: selectSpeaker("Moses Kemibaro"),
				},
			},
			{
				title: { duration: "03.30 PM – 04.10 PM", heading: "Panel Session" },
				desc: {
					agenda: "Chatbots for Change: Using Conversational AI to transform rural communities in Kenya?",
					platform: "ai",
					participants: [
						selectSpeaker("Betsy Mutiithi"),
						selectSpeaker("Elias Omondi"),
						selectSpeaker("Bryan Koyundi"),
						selectSpeaker("Brian Omwenga"),
						selectSpeaker("Emman Atwa"),
					],
					moderators: [selectSpeaker("Moses Kemibaro")],
				},
			},
			{
				title: { duration: "04.10 PM – 04.30 PM", heading: "Coffee Break" },
				desc: {
					agenda: "Coffee Break",
				},
			},
			{
				title: { duration: "04.30 PM – 05:00 PM", heading: "Panel Session" },
				desc: {
					agenda: "Drones in Filming",
					platform: "drones",
					participants: [
						selectSpeaker("Mwangi Kirubi"),
						selectSpeaker("Tosh Gitonga"),
						selectSpeaker("Ezekiel Onyango"),
						selectSpeaker("Craig Cleave"),
					],
					moderators: [selectSpeaker("Barbara Karauna")],
				},
			},
		],
		day2: [
			{
				title: { duration: "09.00 AM – 09.20 AM", heading: "Plenary Session" },
				desc: {
					agenda: "Exploring data centres in the context of AI",
					platform: "ai",
					speaker: selectSpeaker("Washington Ogol"),
				},
			},
			{
				title: { duration: "09.20 AM – 10.00 AM", heading: "Panel Session" },
				desc: {
					agenda: "Geospatial professionals using drones for Surveying with Lidar and software.",
					platform: "drones",
					participants: [
						selectSpeaker("Fred Wekesa"),
						selectSpeaker("Denis Mumo"),
						selectSpeaker("Fred Awiti"),
						selectSpeaker("Solomon Kariuki"),
					],
					moderators: selectSpeaker("Kimeu"),
				},
			},
			{
				title: { duration: "10.00 AM – 10.40 AM", heading: "Panel Session" },
				desc: {
					agenda: "The future with generative AI.",
					platform: "ai",
					participants: [
						selectSpeaker("Mwangi Kirubi"),
						selectSpeaker("Nathan-Ross Adams"),
						selectSpeaker("Michael Michie"),
						selectSpeaker("Moses Kemibaro"),
					],
					moderators: [selectSpeaker("Brian Omwenga")],
				},
			},
			{
				title: { duration: "10:40 AM – 11.00 AM", heading: "Coffee Break" },
				desc: {
					agenda: "Coffee break.",
				},
			},
			{
				title: { duration: "11.00 AM – 10.30 AM", heading: "Plenary Session" },
				desc: {
					agenda: "A data monetization framework for AI.",
					platform: "ai",
					speaker: selectSpeaker("Sahil Patel"),
				},
			},
			{
				title: { duration: "11.30 AM – 12:00 PM", heading: "Panel Session" },
				desc: {
					agenda: "How can AI features empower financial institutions stay competitive and provide better services?",
					platform: "ai",
					participants: [
						selectSpeaker("Edward Ndichu"),
						selectSpeaker("Sandeep Main"),
						selectSpeaker("Jason Masai"),
						selectSpeaker("Mercy Mau"),
					],
					moderators: [selectSpeaker("Dean Gichukie")],
				},
			},
			{
				title: { duration: "12:00 PM – 12.40 PM", heading: "Plenary Session" },
				desc: {
					agenda: "Leveraging AI to monitor, address and prevent fraud (Cyber Security).",
					platform: "ai",
					speaker: selectSpeaker("Bright Gameli"),
				},
			},
			{
				title: { duration: "12.40 AM – 01.00 PM", heading: "Plenary Session" },
				desc: {
					agenda: "What are the distinctions between ChatGPT and Microsoft Copilot, and what advantages does Azure AI offer in comparison?",
					platform: "ai",
					speaker: selectSpeaker("Bethany Jepchumba"),
				},
			},
			{
				title: { duration: "01.00 PM – 02.00 PM", heading: "Lunch Break" },
				desc: {
					agenda: "Lunch Break",
				},
			},
			{
				title: { duration: "02:00 PM – 02.50 PM", heading: "Panel Session" },
				desc: {
					agenda: "Women in AI and Drone Tech - Are we making progress and inspiring others to grow their career prospects?",
					platform: "ai",
					participants: [
						selectSpeaker("Loise Mwangi"),
						selectSpeaker("Priscah Kinyanjui"),
						selectSpeaker("Lyela Mutisya"),
						selectSpeaker("Swabira Abdulrazak"),
					],
					moderators: [selectSpeaker("Mercy Makau")],
				},
			},
			{
				title: {
					duration: "02.50 PM – 03.50 PM",
					heading: "Hackathon Session",
				},
				desc: {
					agenda: "This track is designed to showcase the industry's leading startups and provide an opportunity for Venture Capitalists (VCs) on industry trends. All startups (5 Teams) that will be participating on this track are hand picked by Startinev and AI Conference Nairobi Team as the up-and-comers to be on the lookout for. These sessions of Hackathon (building models) and preparing presentations will be conducted in 48 hours and a showdown session of the finalists will each conduct a 10 minute pitch style format of their idea with prize totals of up to Kshs. 200,000.",
					participants: [
						selectSpeaker("Mary Ndinda"),
						selectSpeaker("Sandeep"),
						selectSpeaker("Mbakaya Weever"),
					],
					moderators: [selectSpeaker("Laban Cliff")],
				},
			},
			{
				title: {
					duration: "03.50 PM – 04.00 PM",
					heading: "Coffee Break",
				},
				desc: {
					agenda: "Coffee break",
				},
			},
			{
				title: { duration: "04.00 PM – 04.40 PM", heading: "Hackathon Winner Announcement" },
				desc: {
					agenda: "Announcement of hackathon winner.",
				},
			},
			{
				title: { duration: "04.40 PM – 05.00 PM", heading: "Vote of Thanks" },
				desc: {
					agenda: "Official closing of the expo.",
					// participants: ["Faith Maina"],
				},
			},
		],
	},
};

export default program;
