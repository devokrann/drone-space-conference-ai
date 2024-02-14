import image from "@src/assets/images";

const people = {
	moderators: [
		{
			name: "Moses Kemibaro",
			bio: [
				"Moses Kemibaro is the Founder & CEO of Dotsavvy, Kenya’s first digital business agency which conceptualizes, develops, delivers, and manages high-performance business results for its clients via digital channels. Dotsavvy has been operational for 20+ years spearheading next practices across a broad spectrum of digital offerings.",
				"Previously, Moses was the Regional Manager for Opera Ads in East Africa, the Commercial Manager for East Africa at the Perform Group, now known as DAZN and Perform Content, as well as the Sales Director at InMobi for Africa where he led sales in Kenya, Egypt, Nigeria, and Ghana. He was also the Founding Regional Manager at Dealfish East Africa (formerly known as OLX Kenya), Kenya’s leading digital classifieds platform, now known as Jiji Kenya.",
				"Moses is a multiple award-winning Technology, Digital Media, and Digital Marketing Blogger and Industry Analyst at MosesKemibaro.com where he rants and raves about all things digital in Kenya and Africa. He is also one of the region's leading digital marketing trainers and a regular speaker and panelist in industry events and also contributes commentaries to leading media. Lastly, Moses is an avid AI practitioner and enthusiast who developed the acronym 'FESSBeC' that captures the 6 key benefits of AI in work, life, and everything in between",
			],
			occupation: { position: "CEO", pow: "Dotsavvy", image: image.companies.dotsavvy },
			image: image.people.moderators.mosesKimebaro,
			contact: {
				email: "moses@dotsavvyafrica.com",
				phone: ["+254722711907", "+254736796505"],
				socials: [
					{ label: "facebook", link: "https://www.facebook.com/dotsavvy/" },
					{ label: "twitter", link: "https://twitter.com/dotsavvy" },
					{ label: "instagram", link: "https://www.instagram.com/dotsavvy/" },
				],
			},
		},
	],
};

export default people;
