export interface typeModerator {
	name: string;
	bio: string[];
	occupation: { position: string; pow: string; image: string };
	image: string;
	contact: {
		email: string;
		phone: string[];
		socials: { label: string; link: string }[];
	};
}
