import image from "@src/assets/images";

const people = [
	{
		name: "Bright Gameli",
		bio: [
			"Dr. Bright Gameli Mawudor is a trailblazing CEO of CyberGuard Africa LTD, Africa's vanguard in Cyber resilience services organization. With a strong commitment to shaping Africa's CyberSecurity landscape, he is the visionary founder of Africahackon, a Cyber Security collective dedicated to nurturing excellence through capacity building and fostering a vibrant community of experts across the continent",
			"A world-class academic, Dr. Bright earned his PhD in IT Convergence and Application Engineering with a specialization in Information Security from Pukyong National University, South Korea. His outstanding professionalism has earned him prestigious positions on Advisory Boards, including EC-Council Global Advisory Board Member for CTIA, Cybersafe Foundation, Moringa School, and AfCAA – the African council for accreditation and accountability.",
			"With over a decade of experience in the Cyber Security industry, Dr. Mawudor possesses profound expertise in Cyber Security Strategy, Resilience, and system penetration testing. A seasoned speaker, he has captivated audiences at more than 315 Cyber Security conferences, and his wisdom has been shared with students at various universities and through contributions to prominent Cyber Security publications.",
			"Recognition has been no stranger to him, as he was honored by Tribe of Hackers: Blue Team 2020 and acknowledged among the Top 40 Under 40 young entrepreneurs in Kenya for his exceptional achievements.",
			"Having worked with esteemed organizations such as Dimension Data/NTT, Cellulant, and Ushahidi, Dr. Mawudor has conducted numerous evaluations and selections of Cyber Security tools, successfully implementing cutting-edge IT security systems to safeguard critical business environments and mitigate risks.",
			"A technically skilled expert, especially within the Cyber Security space, Dr. Bright is dedicated, collaborative, and exhibits excellent leadership qualities. His indomitable spirit drives him to shape a more secure digital future for Africa and beyond.",
		],
		occupation: {
			position: "CEO",
			pow: "CyberGuard Africa",
			image: null,
		},
		image: image.people.speakers.brightGameli,
		contact: {
			email: "bright.gameli@africahackon.com",
			phone: null,
			socials: null,
		},
		category: ["speaker"],
	},
	{
		name: "Moses Kemibaro",
		bio: [
			"Moses Kemibaro is the Founder & CEO of Dotsavvy, Kenya's first digital business agency which conceptualizes, develops, delivers, and manages high-performance business results for its clients via digital channels. Dotsavvy has been operational for 20+ years spearheading next practices across a broad spectrum of digital offerings.",
			"Previously, Moses was the Regional Manager for Opera Ads in East Africa, the Commercial Manager for East Africa at the Perform Group, now known as DAZN and Perform Content, as well as the Sales Director at InMobi for Africa where he led sales in Kenya, Egypt, Nigeria, and Ghana. He was also the Founding Regional Manager at Dealfish East Africa (formerly known as OLX Kenya), Kenya's leading digital classifieds platform, now known as Jiji Kenya.",
			"Moses is a multiple award-winning Technology, Digital Media, and Digital Marketing Blogger and Industry Analyst at mosesKemibaro.com where he rants and raves about all things digital in Kenya and Africa. He is also one of the region's leading digital marketing trainers and a regular speaker and panelist in industry events and also contributes commentaries to leading media. Lastly, Moses is an avid AI practitioner and enthusiast who developed the acronym 'FESSBeC' that captures the 6 key benefits of AI in work, life, and everything in between.",
		],
		occupation: { position: "CEO", pow: "Dotsavvy", image: image.companies.dotsavvy },
		image: image.people.moderators.mosesKimebaro,
		contact: {
			email: "moses@dotsavvyafrica.com",
			phone: ["+254722711907", "+254736796505"],
			socials: [
				{ label: "facebook", link: "https://www.facebook.com/dotsavvy" },
				{ label: "twitter", link: "https://twitter.com/dotsavvy" },
				{ label: "instagram", link: "https://www.instagram.com/dotsavvy" },
			],
		},
		category: ["moderator"],
	},
	{
		name: "Laban Cliff",
		bio: [
			"Laban-Cliff Onserio is the First Chief of Staff in the Office of the Group CEO at Standard Media Group in Kenya. He previously worked at Kenya's Office of the President in the President's Delivery Unit; a government project execution arm supported by the Former British Prime Minister Tony Blair's Institute. His career highlights include working with General Electric (GE) Africa as a management trainee to help the conglomerate in setting up shop in Nairobi as its Africa headquarters.",
			"Laban Cliff is also a News Anchor on KTN News and KTN Home. He has previously interviewed Africa's business and government leaders on CNBC Africa and Nation Media Group, East Africa's Largest integrated media house. In 2012, He was named Africa's Best Newcomer in business journalism at the Diageo Africa Awards held in London.",
			"Out of work he enjoys motorsports and is a rally co-driver in the World Rally Championship and assists in handling communications for the East African Safari Classic Rally. He is the East Africa Regional Director of the Chief of Staff Association, UK the World's representative body of Chiefs of Staff in government, private sector, and military circles.",
		],
		occupation: {
			position: "Regional Director",
			pow: "Chief of Staff Association",
			image: null,
		},
		image: image.people.moderators.labanCliff,
		contact: {
			email: "labancliff@gmail.com",
			phone: null,
			socials: null,
		},
		category: ["speaker"],
	},
	{
		name: "Bethany Jepchumba",
		bio: [
			"Bethany is a Cloud Advocate at Microsoft, who engages with students, aspiring developers, and entrepreneurs to help them learn and grow in Artificial Intelligence (AI). She does this through writing articles, hosting workshops, and speaking at events about AI and cloud computing.",
			"She has a strong background in community and skilling others, thanks to her previous roles as a Program Coordinator at Andela and Gold Microsoft Learn Student Ambassador which built her passion for community and skilling others.",
			"She comes from a community of marathon runners but decided to run code instead. Outside tech she defines herself as creative. You will find her testing out new hobbies, sketching or deeply engrossed in a book.",
		],
		occupation: {
			position: "Academic Cloud Advocate",
			pow: "Microsoft",
			image: image.companies.microsoft,
		},
		image: image.people.speakers.bethanyJepchumba,
		contact: {
			email: "bethanycheum@microsoft.com",
			phone: null,
			socials: null,
		},
		category: ["speaker"],
	},
	{
		name: "Mwangi Kirubi",
		bio: [
			"Mwangi Kirubi aka Mwarv has been telling stories through photography and film for over 20 years. Starting off as an advertising copywriter, Mwarv transitioned into creating photo and video documentaries for clients across the globe.",
			"The trust clients have in his skills has seen him travel to all counties in his home country Kenya, and 16 other African countries. He is currently exploring how generative AI can be ethical and more inclusive.",
		],
		occupation: {
			position: "Creative Storyteller",
			pow: "Click Pictureworks Africa",
			image: null,
		},
		image: image.people.speakers.mwangiKirubi,
		contact: null,
		category: ["speaker"],
	},

	// row 2
	{
		name: "Antony Ngatia",
		bio: [
			"Dr. Antony Ngatia is a health innovator and a former Director at the Clinton Health Access Initiative (CHAI). He has spearheaded transformative efforts to integrate artificial intelligence (AI) and digital health solutions into healthcare systems across Africa.",
			"With a medical background from the University of Nairobi and the University of Oxford, coupled with over 15 years of experience in public health, Dr. Ngatia possesses a unique ability to bridge the gap between medical expertise and cutting-edge digital innovations.",
			"Dr. Ngatia has demonstrated the potential of AI and digital technologies in enhancing healthcare delivery and decision-making processes. He has played a pivotal role in leveraging digital tools, data science, and AI to streamline vaccine distribution, manage healthcare financing, and tackle the challenges of COVID-19 vaccine hesitancy.",
		],
		occupation: {
			position: "AI strategist",
			pow: "Statsspeak",
			image: image.companies.statsspeak,
		},
		image: image.people.speakers.antonyNgatia,
		contact: {
			email: "angatia@statsspeak.co.ke",
			socials: null,
		},
		category: ["speaker"],
	},
	{
		name: "Nathan-Ross Adams",
		bio: [
			"Nathan-Ross Adams is the Trustworthy AI programme director for Michalsons and helps organizations leverage AI (law)fully. He has presented many times to governing bodies, executive committees, and many other audiences. He has facilitated many public and private workshops and he has written extensively on the topic. He is currently an advisory board member of SAAIA.",
			"In a world where everyone is suddenly an AI law expert, Nathan-Ross has been quietly working away at AI law and regulation since 2018. He is currently finishing his Doctor of Laws in AI after having completed a Master of Laws in AI in 2021. In 2022 he completed the GIZ AI pilot programme.",
		],
		occupation: {
			position: "Director",
			pow: "Michalsons",
			image: null,
		},
		image: image.people.speakers.nathanRoss,
		contact: {
			email: "nathan-ross@michalsons.com",
			phone: null,
			socials: null,
		},
		category: ["speaker"],
	},
	{
		name: "Sahil Patel",
		bio: [
			"Sahil Patel is a Data Scientist at Matogen Applied Insights - South Africa, where he harnesses artificial intelligence to enhance business operations and efficiency. He earned his Master of Science in Computer Science, with a specialization in Artificial Intelligence, from the University of Nottingham in 2022, graduating with Distinction.",
			"At Matogen Applied Insights since December 2022, Sahil has been instrumental in automating business processes and developing machine learning models that provide valuable insights across various sectors, including banking, telecommunications, and agriculture.",
			"As a participant at the AI conference in Nairobi, Sahil aims to share practical approaches to data monetization and discuss AI's role in creating new job opportunities. His work demonstrates a focused commitment to leveraging technology in addressing complex business challenges and contributing positively to the AI field.",
		],
		occupation: {
			position: "Data Scientist",
			pow: "Matogen Applied Insights",
			image: image.companies.matogen,
		},
		image: image.people.speakers.sahilPatel,
		contact: {
			email: "sahil.patel@ai.matogen.com",
			phone: null,
			socials: null,
		},
		category: ["speaker"],
	},
	// eddie wapi pay
	{
		name: "Lyela Mutisya",
		bio: [
			"Lyela Mutisya graduated from Lewis University in 2017 with a B.S. in Aviation Administration and a minor in Unmanned Aircraft Systems (UAS). In 2015 during Lyela's junior year in college she took an elective that sparked her love for Uncrewed Aircraft Systems (UAS). As a result of her newfound passion for drones Lyela ended up minoring in UAS.",
			"Over the years Lyela has been featured in several publications both local and international. She has also participated in several speaking engagements including the 2016 Drone World Expo's Women in Drones Panel.",
			"In 2021 Lyela joined LifeBank as the Drone Pilot Lead. During her time at LifeBank Lyela learned how to fly Vertical Takeoff & Landing (VTOL) drones. She underwent trainings both in Germany and London. Lyela assisted LifeBank with establishing drone operations for last mile medical delivery in Ethiopia.",
			"She has vast experience in BVLOS operations from assessing suitable areas for BVLOS operations, preflight planning, risk assessment, flight operations, cargo loading and unloading, communication, and post-flight procedures.",
			"She is currently on the forefront of using drone technology for last mile medical delivery here in Kenya. As an entrepreneur Lyela's goal is to not only inspire young women and men but to empower them as well through drone education and employment.",
		],
		occupation: {
			position: "Drone Expert",
			pow: null,
			image: null,
		},
		image: image.people.speakers.lyelaMutisya,
		contact: {
			email: "lyela.mutisya@gmail.com",
			phone: null,
			socials: null,
		},
		category: ["speaker"],
	},

	// row 3
	{
		name: "Washington Ogol",
		bio: [
			"Washington Ogol, CEO of Statsspeak and a seasoned data and technology leader with over 8 years of experience, has played an instrumental role in driving companies and consultancy projects towards operational excellence and innovation. Under his leadership, Statsspeak has become a leader in analytics and deployment of practical AI solutions.",
			"Washington's expertise spans strategic data analysis, consultancy, and deploying machine learning technologies to drive smarter decision-making. His notable work includes developing the Primary care network Observatory for AMREF Health Africa and strategizing the go-to-market plan for tax industry clients.",
			"Moreover, his previous roles at organizations like Johnson & Johnson saw him contribute significantly to global health initiatives, such as introducing new vaccines and advancing healthcare analytics.",
		],
		occupation: {
			position: "CEO",
			pow: "Statsspeak",
			image: image.companies.statsspeak,
		},
		image: image.people.speakers.washingtonOgol,
		contact: {
			email: "wokumu@statsspeak.co.ke",
			socials: null,
		},
		category: ["speaker"],
	},
	{
		name: "Tolga Ors",
		bio: [
			"Dr. Tolga Ors has over 15 years experience leveraging technology for the improvement of human lives. As the former Innovation Manager of the Future Artificial Intelligence and Robotics for Space (FAIR SPACE) programme, Dr. Ors ensured that cutting edge university research is applicable to industrial applications.",
			"Dr. Ors then did Programme Management at the prestigious Alan Turing Institute, which is UK's national institute for data science and AI. Driven by a passion for leveraging technology to address pressing global challenges, Dr. Ors turned his attention towards emerging markets, including Kenya, where he managed UK Space Agency co-fund innovative programs aimed at alleviating poverty and enhancing disaster response capabilities using drones.",
			"Tolga holds a PhD in Telecommunications and an MSc in Project Management from George Washington University in Washington DC. He completed a MSc with Distinction in Computational Cognitive Neuroscience with applications to AI at the University of London. After completing the International Space University Space Studies Programme in 2023, Dr. Ors joined Team Tumbleweed, which plans to send a swarm of fast-moving rovers to Mars, as Director of R&D.",
		],
		occupation: {
			position: "Director of R&D",
			pow: "Team Tumbleweed",
			image: null,
		},
		image: image.people.speakers.tolgaOrs,
		contact: {
			email: "tolga@teamtumbleweed.eu",
			phone: null,
			socials: [{ label: "linkedin", link: "https://www.linkedin.com/in/tolgaors/" }],
		},
		category: ["speaker"],
	},
	{
		name: "Violet Ochieng",
		bio: [
			"Violet Ochieng, the STEM advocate and KCAA-Certified Remote Pilot, is also the winner of the Carol Ellison Science Award for 2021. She is an early-career researcher with interest in the use of digital technology in pest detection and management. She holds the position of Research Officer-Drone Technology at CABI where she utilizes her research capacity to address societal challenges while creating opportunities for innovation.",
			"Motivated by her passion for environmental conservation and agricultural innovation, she pursued a Bachelor of Science in Environmental Conservation and Natural Resource Management, and a Master's of Science in Agricultural Entomology at the University of Nairobi, Kenya. During her master's program, she developed, designed, implemented and pioneered a project with the Centre for Agriculture and Bioscience International (CABI) focusing on piloting the use of drone technology for surveillance and control of Desert Locusts.",
			"In addition to her  outstanding academic and research achievements, Violet is an active member of several  prestigious organizations, including the African Association of Insect Scientists (AAIS), Association of Kenyan Entomologists, Entomological Society of America (ESA), International Association of Black Entomologists (IABE), International Society of Precision  Agriculture, Nature Kenya, Greenpeace Africa, and the Global Locusts Initiative",
			"With her unique blend of academic expertise, hands-on experience, and commitment to innovation, Violet is poised to make a meaningful impact in the field of precision agriculture. She is dedicated to advancing scientific and technological innovations that contribute to poverty alleviation and enhanced food security through agricultural research and innovation. She is intentionally dedicated to empowering youths to take a leading role in agriculture.",
		],
		occupation: {
			position: "Drone Tech Research Officer",
			pow: "CABI",
			image: null,
		},
		image: image.people.speakers.violetOchieng,
		contact: {
			email: "v.ochieng@cabi.org",
			phone: null,
			socials: null,
		},
		category: ["speaker"],
	},
	{
		name: "Dennis Mutua",
		bio: [
			"As the Founder & Managing Director of Geo Cart Surveys & Engineering Solutions Ltd, Dennis Mutua boasts a decade of experience in Geospatial Engineering and over 8 years as a specialist in providing Unmanned Aerial Systems (UAS) solutions. Dennis possesses an in-depth understanding of various aerial mapping methodologies and excels in analyzing and presenting data using various software. His expertise spans across a variety of UAS platforms, sensors, and the proficient management of associated datasets.",
			"Dennis actively engages in numerous survey and UAS mapping projects within the region, showcasing his hands-on experience and dedication to advancing the industry. He champions the adoption of UAS technology by providing consulting services and organizing training seminars for both government organizations and private entities seeking to incorporate UAS technology into their workflows.",
			"Under Dennis's leadership and entrepreneurial prowess, Geo Cart Surveys & Engineering Solutions Ltd has emerged as a prominent spatial solutions company. The company, guided by Dennis's vision, has successfully integrated emerging technologies, adding value and diversifying its product portfolio to stay at the forefront of the industry.",
		],
		occupation: {
			position: "Geospatial Specialist",
			pow: "GeoCart",
			image: null,
		},
		image: image.people.speakers.denisMutua,
		contact: {
			email: "mutuadns@gmail.com",
			phone: null,
			socials: null,
		},
		category: ["speaker"],
	},
	{
		name: "Craig Cleave",
		bio: [
			"Craig Cleave is an aviator with diverse experience and a passion for the growth and development of the Kenya drone sector. His aviation career began over 20 years ago as a Hanggliding instructor and he went on to attain a ATPL and fly for Kenyans national carrier. He has been a training captain, chief pilot and head of operation in the manned aviation sector in Kenya and is the founder and CEO of the 1st ever KCAA approved drone organization: Kendrone.",
			"As a Kenya drone pioneer his achievements include becoming the 1st KCAA UAS Designated Flight Examiner, conducting the 1st RPL Multirotor and Fixed wing UAS training in Kenya as well as being nominated as the chair of the Kenya Stakeholders Committee and recently as the chair of the newly formed Kenya Uncrewed Aircraft Systems Association.",
			"Craig is an established drone videographer having filmed for the likes of National Geographic, BBC, Meta, Adidas and other internationally distributed productions. His FPV flying and cinematic skillset is unique in Kenya. As a UAS instructor his course development and experience of training in several countries has assisted the Kenya UAS sector grow and diversify.",
		],
		occupation: {
			position: "CEO",
			pow: "Kendrone Limited",
			image: image.companies.kendrone,
		},
		image: image.people.speakers.craigCleave,
		contact: { email: "craig@kendrone.co.ke" },
		category: ["speaker"],
	},

	// row 4
	{
		name: "Tawanda Chihambakwe",
		bio: [
			"Tawanda is an award-winning technology entrepreneur and Founder of PRECISION AERIAL GROUP, a drone service, consultancy, and training group of companies based in Zimbabwe and operating across Southern Africa.",
			"Tawanda is a Certified Drone Pilot Instructor with Multirotor, Fixed Wing and BVLOS ratings and a Drone Systems Integration Consultant. Through Precision Aerial Group, he successfully secured the country license for Zimbabwe Flying Labs, the first drone technology hub in Zimbabwe, and the local country chapter of the global Flying Labs Network.",
			"He is also the Director of Precision Drone Training, Africa's first integrated Professional Pilot training school that specializes in delivering Advanced Industry Specific Drone Training courses Eg. Drones for Agriculture, Wildlife Management, Medical Drone Deliveries, and Disaster Risk Reduction.",
			"Tawanda is also the Founder of the Zimbabwe International Drone Conference, southern Africa's premier gathering of Drone Professionals, the Civil Aviation Authority, and Public and Private sector key stakeholders.",
			"As an International Speaker on Drone Technology and STEM education, Tawanda has spoken at over 35 speaking events and conferences in Kenya, Nigeria, South Africa, the USA, Zambia, and Zimbabwe.",
		],
		occupation: {
			position: "Managing Director",
			pow: "Zimbabwe Flying Labs",
			image: null,
		},
		image: image.people.speakers.tawandaChihambakwe,
		contact: null,
		category: ["speaker"],
	},
	{
		name: "Michael Michie",
		bio: [
			"Michael Michie is a thought leader in the technology industry with a decade of experience. The co-founder of Everse Technology Africa, an AI Start-up focused on AI, data protection and privacy. His professional experience includes serving as the CTO of bluBeetle AI. Prior to bluBeetle AI he served as CTO of Solv Kenya, a B2B marketplace owned by SC UK Holdings Ltd. Prior to Solv, Michael was the Head of Information Technology and Innovation at TripleOKLaw, where he successfully transformed the law firm through digitalization and implementation of innovative legal tools.",
			"Michael has an impressive track record in the industry, having risen from a management trainee at M Oriental Bank to become the Head of Information Technology and later, the Chief Information Security Officer. In 2019, he was awarded the Business Daily Top 40 under 40 Men award for his role in driving digital transformation within the legal industry, making him the youngest recipient of the award that year. A member of the Technical Working Group on Development of Media Guidelines on the Use of Artificial Intelligence and Social Media by the Media Council of Kenya and other working groups around AI focused on Africa.",
			"An advocate for dyslexic thinking and mental health in the workplace, Michael is also a published academic writer, host of the podcast Mind and Machine Africa, and commentator in the technology space. A Co-founder of the Non-Profit Nia za Akili Zetu Foundation, working on AI in Africa by Africa for Africa and preventing AI hegemony. He sits on several advisory boards, including the Advisory Council for FTLD registry services, the CIO East Africa Fintech Summit Advisory Board, and the CISO Alliances Nairobi Chapter Content Committee. Aside from his professional pursuits, Michael's passions include hyperrealism art, reading philosophy, training dogs, and game design and development.",
		],
		occupation: {
			position: "Co-founder",
			pow: "Everse Technology",
			image: image.companies.everseTech,
		},
		image: image.people.speakers.michaelMichie,
		contact: {
			email: "mmichie@eversetech.com",
			phone: ["+254706298677"],
			socials: [{ label: "linkedin", link: "https://www.linkedin.com/in/michael-michie-10a29664" }],
		},
		category: ["speaker"],
	},
	{
		name: "Benaiah Wepundi",
		bio: [
			"Benaiah Wepundi is a serial entreprenuer with a focus on fintech and AI. He is currently the Founder and Chief Maverick (CEO) at PaydHQ, building a virtual financial assistant for gig workers in Africa. He is also the Chief Operating Officer at CyphonAI, a US-based AI automation and consultancy agency and a subsidiary of Precision Consulting, a statistical consulting and academic research firm featured in inc 500 with over 16 years experience in the edtech space, where he serves as the Chief Technology Officer. Benaiah is passionate about building African solutions to perennial global problems.",
		],
		occupation: {
			position: "CEO",
			pow: "PaydHQ",
			image: null,
		},
		image: image.people.speakers.benaiahWepundi,
		contact: {
			email: "ben@paydhq.com",
			phone: null,
			socials: null,
		},
		category: ["speaker"],
	},
	{
		name: "Pamela Adede",
		bio: [
			"Pamela is a computer and data scientist, skilled in the acquisition, integration, storage, management, protection, use and extraction of data. She holds a BSC degree in Computer Science. Her professional goal is to leverage her expertise and skills to advance the field of data operations and support the utilization of high-quality data in making precise inferences. To this end, her current role is within a global CRO that offers statistical consulting, clinical trial reporting, data management, and data science services.",
			"Pamela is an avid STEM advocate who is keen on sharing her knowledge by helping people understand new technologies to manage data intelligently, effectively, and safely. With the belief that technology affects all (regardless of industry) in this information age, she simplifies high-tech concepts and articulates complex ideas in an easy-to-understand manner.",
			"She has been interviewed and featured on Women in Science by Outsourcing Pharma, a leading news source for the pharma industry. She enjoys writing and has had her latest article titled ‘Addressing Missing Data in Clinical Trials – The Data Science Approach’ published in the European Journal for Clinical Studies. The article discussed why the regular monitoring of real-time metrics is highly effective at preventing costly missing data in Clinical Trials.",
		],
		occupation: {
			position: "Computer & Data Scientist",
			pow: "",
			image: null,
		},
		image: image.people.speakers.pamelaAdede,
		contact: {
			email: "adedejnr@gmail.com",
			socials: [{ label: "linkedin", link: "https://www.linkedin.com/in/pamela-adede-40a28228/" }],
		},
		category: ["speaker"],
	},
	{
		name: "Robert Blair",
		bio: [
			"Robert Blair is a fourth generation Kendrick, Idaho farmer, entrepreneur, and Idaho State Senator. The farm is situated on the edge of the rolling hills of the Palouse and not far from his Alma Mater the University of Idaho where he received his B.S. in Agriculture Business.",
			"His journey with precision agriculture started in 2003 using a PDA for simple mapping. That evolved into all different types of equipment, including Unmanned Air Systems (UAS) in 2006. Robert is the first U.S. farmer to own and use a UAS. His vision and advocacy of these technologies helped him become the first Precision Ag Institute International Farmer of the Year in 2009. Robert has been on the leading edge of the precision agriculture utilization and is recognized as a domestic and global leader.",
			"Robert received an Eisenhower Fellowship in 2011, taking him to South America for six weeks focusing on drones and precision agriculture. During the fall of 2012 he spent three weeks in Germany on a McCloy Fellowship for agriculture. In Idaho he was recognized as one of the most influential U of I College of Agriculture and Life Science (CALS) alumni, received the 2013 Governor’s Award for Agriculture Technology and Innovation and was honored as a 2015 U of I CALS Distinguished Alumni.",
			"Robert’s vision and leadership ability has been recognized by the positions he has held including president of the Idaho Grain Producers Association, chairman of the National Association of Wheat Growers (NAWG) Research & Tech Committee, chairman of the U.S. Wheat/NAWG Joint Biotech Committee, Idaho Farm Bureau Federation county president, an initial member of Idaho’s UAS steering committee, an initial advisory board member of the Drone World Expo, and a member of the AGree Conservation and Crop Insurance Task Force. ",
			"In 2020, Robert was named to the Federal Communications Commission’s Precision Agriculture Task Force Working Group “Encouraging Adoption of Precision Agriculture and Availability of High-Quality Jobs on Connected Farms.” In 2022 Robert served as an Idaho State Senator for the 2022 Legislative Session representing Idaho Legislative District Six (6).",
		],
		occupation: {
			position: "Idaho Senator & Farmer",
			pow: "Co-Founder, ADT",
			image: null,
		},
		image: image.people.speakers.robertBlair,
		contact: null,
		category: ["speaker"],
	},

	// row 5
	{
		name: "Koyundi Bryan",
		bio: [
			"In the dynamic realm of AI, one name stands out - Koyundi Bryan, a distinguished AI researcher, passionate ethicist, and the visionary founder of a groundbreaking AI startup. With over a decade of experience, Koyundi is an influential force, contributing to the field of AI, particularly in the fascinating domain of computer vision.",
			"As an AI researcher, Koyundi has left an indelible mark on the landscape of artificial intelligence. His journey is marked by groundbreaking contributions in the realms of natural language processing, computer vision, and machine learning. He has delved deep into the intricate web of AI algorithms and models, advancing the boundaries of what AI can achieve. His impressive portfolio includes numerous papers published in leading academic journals, each offering innovative solutions to complex problems. His unrelenting commitment to pushing the frontiers of AI has not gone unnoticed, as he's garnered several prestigious awards and accolades for his pioneering work.",
			"Koyundi is not merely a researcher but also a hands-on practitioner. His expertise has been instrumental in the private and public sectors, where he's led teams of data scientists, engineers, and analysts. Together, they've designed and implemented AI solutions that have transformed industries. From enhancing efficiency and productivity to elevating customer satisfaction, Koyundi's practical insights into AI applications have sparked remarkable progress.",
			"Ethics are at the heart of Koyundi's AI journey. He's a tireless advocate for the ethical and responsible use of AI. His thought leadership has resonated across international conferences and events, where he has delivered impassioned talks, shedding light on the potential risks and benefits of AI. Koyundi emphasizes the imperative of a collaborative approach to AI development and deployment, acknowledging that the power of AI must be wielded responsibly to avoid harm and ensure fairness.",
			"What sets Koyundi apart is his multifaceted role as a policy maker. He's been pivotal in shaping the regulatory framework for AI in Kenya, collaborating with governments and international organizations to craft policies and guidelines. These guidelines are not merely bureaucratic but reflect Koyundi's deeply held belief in ethical and responsible AI. They strike a balance between fostering innovation and progress and ensuring that AI is harnessed for the greater good of society. But Koyundi's journey doesn't stop here. He's a founder, an innovator, and a trailblazer. He's brought all his expertise, insights, and passion together to establish an AI startup. This startup is not just another player in the AI landscape; it's a visionary endeavor, driven by Koyundi's commitment to making AI work for the greater good.",
			"Koyundi Bryan is not just an AI expert; he's a visionary who combines technical prowess with a profound understanding of the social, economic, and ethical implications of AI. His mission is clear: to ensure that AI benefits everyone. He believes in the transformative power of AI, and through his research, advocacy, and entrepreneurship, he's paving the way for an AI future that is both brilliant and benevolent.",
		],
		occupation: {
			position: "AI Strategist & Researcher",
			pow: "Pdfaind",
			image: image.companies.aiStartup,
		},
		image: image.people.speakers.koyundiBryan,
		contact: {
			email: "koyundibryan@gmail.com",
			phone: null,
			socials: null,
		},
		category: ["speaker"],
	},
	{
		name: "Joan Mbesya",
		bio: [
			"Joan Mbesya is an esteemed author, founder, and CEO of Tech Mindset Africa Ltd (TMA). With a deep expertise in future technologies and a particular focus on leveraging artificial intelligence (AI) for sustainable living, Joan has emerged as a prominent figure in the field. Her unwavering commitment to transforming AI for African businesses, industries, and lifestyles has positioned her as a catalyst for economic prosperity on the continent.",
			"Passionate about empowering marginalized communities, Joan actively advocates for girl child empowerment, persons with physical disabilities, orphans, and the intersex community. Firmly believing in the power of knowledge as the ultimate weapon against poverty, she spearheads TechMindset's mission to Sensitize, Empower & Educate Africa (S.E.E. Africa) through AI education initiatives.",
			'Joan\'s accomplishments in the AI landscape are commendable. She recently co-hosted a virtual event, "The Future of Work in an AI-Enabled World," in collaboration with Konza Technopolis. Moreover, she led a panel of esteemed Toastmasters speakers in exploring AI as an enabler in communication. In partnership with the UK Kenya Tech Hub, TechMindset empowered and trained over 280 AI startups through the transformative Artificial Intelligence for Africa (AiFA) bootcamp program, propelling them towards investor readiness.',
			"In recognition of her expertise and contributions, Joan has been invited to various prestigious platforms. She represented African women in digitized technology education as a panel speaker at the AGRF Ghana event, sponsored by AGRA. Her collaboration with institutions like eMobilis and Moringa has enabled the empowerment of women in technology through sponsored studies.",
			"With more than 20 years of experience in technology entrepreneurship, leadership, and education, Joan is a formidable force in her field. She holds a Bachelor's Degree (Hons.) in Commerce and an MBA in Marketing and Strategic Management from the University of Nairobi. Additionally, she is certified as an AI and ML expert for businesses by Wharton University Pennsylvania and Duke University, respectively, while currently pursuing Deep Learning for Businesses at Yonsei University. Her certifications also include Business Transformation with Google Cloud, Python from Michigan University, and Fundamentals of Business Finance and Financial Planning from Goldman Sachs, along with Design-Led Strategy from the University of Sydney",
			"Joan's extensive knowledge and passion for AI have been honed through participation in esteemed panels hosted by organizations and networks such as AGRF, Commonwealth Business Women Network, UK Embassy, Future Women Leaders Network, Centonomy, Women in Data, Capital FM, Hot96, Cybr Security forums and Twitter spaces. These experiences have contributed significantly to her expertise in the world of Artificial Intelligence.",
			"Currently, Joan is spearheading an AI project aimed at benefiting indigenous communities by providing alternative livelihood opportunities. Her vision and dedication continue to shape the future of AI in Africa and inspire positive change on a global scale.",
		],
		occupation: {
			position: "CEO",
			pow: "Tech Mindset Africa",
			image: image.companies.techMindsetAfrica,
		},
		image: image.people.speakers.joanMbesya,
		contact: {
			email: "joan@techmindset-ai.africa",
			phone: null,
			socials: null,
		},
		category: ["speaker"],
	},
	{
		name: "George Ogada",
		bio: [
			" George Ogada specializes in Planning, Program Management, and Providing Crucial Support to startups and innovation initiatives. With a wealth of experience in the FMCG planning space, George has developed the skills needed to navigate the intricate landscape of program management. His skills extend beyond traditional planning, encompassing a keen focus on startup ecosystems and fostering innovation.",
			"George's expertise lies in developing and implementing strategies that drive both operational efficiency and creative problem solving. His commitment to the realms of program management, coupled with a passion for people, supporting startups and fostering innovation, positions him as a valuable asset capable of steering projects toward success in dynamic and evolving environments.",
		],
		occupation: {
			position: "Programme Associate",
			pow: "HiiL Innovation Hub",
			image: image.companies.hiil,
		},
		image: image.people.moderators.georgeOgada,
		contact: {
			email: "george.ogada@hiil.org",
			phone: null,
			socials: null,
		},
		category: ["speaker"],
	},
	{
		name: "Joel Onditi",
		bio: [
			"Mr. Onditi is a Kenyan American and the CEO and President of Pathways Technologies LTD, a US and Africa innovation and technology company with offices in Denver, Colorado and Nairobi, Kenya. He is a professor of practice at The University of Denver, where he teaches Data Analytics and Emerging Trends in Technology. He also sits on the advisory board of the Analytics Department for the Daniels College of Business, University of Denver.",
			"He has a bachelor's degree in computer science from Jomo Kenyatta University of Agriculture and Technology, and a master's degree in data Analytics and AI from The University of Denver. He also has a post-graduate certificate in Corporate Innovation from Massachusetts Institute of Technology (MIT) as well as an executive certificate in Public Policy with a focus on Governance in Technology Innovation from Harvard Kennedy School.",
			"Mr. Onditi has over 15 years of experience delivering innovative technology and digital transformation solutions in Fintech, Manufacturing, Retail, E-commerce, Government and Not-For-Profit sectors. His experience spans the US, Africa, Canada, and Europe working with organizations in digital transformation initiatives. He has also been a contractor for the US government over the last 7 years, where his assignments include advising on emerging technology projects including open banking, data privacy and protection, as well as cloud use for government. He started his career building banking software solutions and later moved to work for one of the largest banks in the region.",
			"Beyond his passion for technology and innovation, he is dedicated to empowering youth with modern data and tech employable skills. His commitment has led him to forge partnerships and work closely with the Kenyan government and the US Embassy, which has been instrumental in actualizing the Silicon Savanna initiative.",
		],
		occupation: {
			position: "CEO",
			pow: "Pathways Technologies",
			image: image.companies.pathawaysTech,
		},
		image: image.people.speakers.joelOnditi,
		contact: {
			email: "joel.onditi@pathwaystechnologies.com",
			phone: ["+254722540328", "+17204688895"],
			socials: [
				{ label: "facebook", link: "https://www.facebook.com/PathwaysKe" },
				{ label: "twitter", link: "https://twitter.com/PathwaysInt" },
				{ label: "linkedin", link: "https://www.linkedin.com/company/pathwaystechnologies" },
			],
		},
		category: ["speaker"],
	},
	{
		name: "Dennis Mwighusa",
		bio: [
			"Dr. Mwighusa is an experienced Consultant and Researcher in both ICT and STI Policy. His primary research interests lie in the areas of Artificial Intelligence, e-Governance, ICT4D particularly ICT and (Education, Health and Finance), Information Systems Evaluation, Usability, Learning Management Systems, Innovation and Entrepreneurship in Smart Agriculture, Digital Technology, and Climate Change Technology. In STI policy he has experience in technical writing on complex policy issues, evaluations, research and analysis, problem solving, development and communication of the best evidence-based policy and practices for research, industry & governments. He is also very active in publishing in his areas of expertise – both in academic outlets such as journals and non-academic outlets that are more relevant to ICT and policy.",
			"Mwighusa holds a PhD in Image Processing, MEng. in Signal and Information Processing and BEng. (Hons) in Computer Engineering. He also holds a Higher National Diploma in Artificial Intelligence and Cognitive Computing and a Certificate of Policy for Science, Technology & Innovation. Eng. Mwighusa is a Certified Project Management Professional, Researcher, Practitioner and Registered Consulting Engineer in Computer/ICTs.",
			"Mwighusa is a member of different professional boards such as Institution of Engineers Tanzania (IET), International Federation of Consulting Engineers (FIDIC) - Geneva, Institute of Electrical & Electronics Engineers (IEEE) - Princeton, USA, Asia Pacific Signal & Information Processing Association (APSIPA) - Hung Hom, Kowloon, Hong Kong, International Association of Engineers (IAENG) - Hung to Road, Hong Kong, African Research Network on Economics of Learning, Innovation and Competence Building Systems (AfricaLics) few to mention.",
			"Mwighusa is currently associated with Africa Research Institute For AI (ARIFA) as the Executive Director, Institute of Electrical and Electronics Engineers (IEEE) Tanzania Section as a Chairman & President. Previously worked with DEN Consult (T) Ltd as a Chief Executive Officer (CEO), Science, Technology and Innovation Policy Research Organization (STIPRO) – Tanzania as a Research Fellow, Tianjin Hylanda IT Co. in China as Information Technology Manager, Government of the United Republic of Tanzania as a Technical Analyst and Lectured at different Universities.",
		],
		occupation: {
			position: "Executive Director",
			pow: "Africa Research Institute For AI",
			image: null,
		},
		image: image.people.speakers.dennisMwighusa,
		contact: {
			email: "mwighusa@arifa.org",
			phone: null,
			socials: null,
		},
		category: ["speaker"],
	},

	// row 6
	{
		name: "Solomon Wanjiru",
		bio: [
			"Mr. Solomon is a multi-talented professional excelling as a Land Surveyor, Drone Pilot Instructor and Cartographer. With a degree in surveying technology and a diploma in cartography, Solomon brings over 11 years of extensive experience to his craft.",
			"He holds a license as a Drone Pilot Instructor and approved KCAA examiner, boasting over 5 years of expertise in aerial mapping. Currently serving as the chief drone pilot at Geoid Technologies Ltd, Solomon's work transcends various industries, including real estate, agriculture, construction, and thermal inspections.",
			"Renowned for his proficiency in flying diverse drone models and capturing captivating aerial shots, seamlessly extending his expertise into various surveying projects, where he consistently delivers precision and innovation.",
		],
		occupation: {
			position: "Director",
			pow: "Geoid Technologies",
			image: image.companies.geoid,
		},
		image: image.people.speakers.solomonWanjiru,
		contact: {
			email: "solomon@geoidtechnologies.com",
			phone: ["+254726945420", "+254726884224"],
			socials: [
				{ label: "facebook", link: "https://www.facebook.com/geoidtechnologies" },
				{ label: "twitter", link: "https://twitter.com/GeoidL" },
				{ label: "linkedin", link: "https://www.linkedin.com/company/geoidtechnologies-ltd/" },
				{ label: "instagram", link: "https://www.instagram.com/geoidtechnologies_ltd/" },
			],
		},
		category: ["speaker"],
	},
	{
		name: "Robinson Muiru",
		bio: [
			"Robinson is a Computer Engineer by profession majoring in cryptography, and also a software engineer and innovation researcher. Currently, a Topcoder Ambassador in Africa and West Asia with experience in software development and data science solving NASA software problems under the NASA Tournament Lab partnership with Topcoder. ",
			"Been a globally ranked competitive programmer for 6+ years, solving global challenges and delivering outstanding outcomes for tech companies. Currently working at NASA SPACE APPS challenges for the global participants.",
		],
		occupation: {
			position: "Co-Director",
			pow: "CodeVista",
			image: null,
		},
		image: image.people.speakers.robinsonMuiru,
		contact: {
			email: "robinsonrokit@protonmail.com",
			phone: null,
			socials: [
				{ label: "linkedin", link: "https://www.linkedin.com/in/robinson-muiru-710399115/" },
				{ label: "instagram", link: "https://www.instagram.com/robinsonrokit/" },
				{ label: "twitter", link: "https://twitter.com/RobinsonMuiru1/" },
			],
		},
		category: ["speaker"],
	},
	{
		name: "Michael Zimba",
		bio: [
			"Michael Zimba is the Executive Dean of the Malawi Institute of Technology, Lead of the Center for Artificial Intelligence and STEAM (CAIST) and Associate Professor of Artificial Intelligence and Data Science at the Malawi University of Science and Technology.",
			"He is an Oxford University Press' Unit Editor for AI in Society Series. He is an EDSAFE AI Catalyst Fellow on Safe AI in Education under the USA's EDSAFE AI Alliance. He is an African Union Commission's Contributing Expert to STISA, and African Union High Level Panel on Emerging Technologies' (APET's) Contributing Expert on AI.",
			'Michael co-authored the AU Technical Report on AI titled "AI for Africa: Artificial Intelligence for Africa\'s Socioeconomic Development". He is also in the AU-AI-Strategy Team, developing the AU Continental AI Strategy.',
		],
		occupation: {
			position: "Executive Dean",
			pow: "Malawi Institute of Technology",
			image: image.companies.must,
		},
		image: image.people.speakers.michaelZimba,
		contact: {
			email: "mzimba@must.ac.mw",
			phone: ["+265888627267"],
			socials: [{ label: "linkedin", link: "https://www.linkedin.com/in/michael-zimba-611b02218" }],
		},
		category: ["speaker"],
	},
];

export default people;
