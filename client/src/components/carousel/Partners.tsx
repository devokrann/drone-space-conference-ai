import React from "react";
import { useRef } from "react";

import { Carousel } from "@mantine/carousel";
import { AspectRatio, Box, Image, useMantineColorScheme } from "@mantine/core";

import Autoplay from "embla-carousel-autoplay";

import image from "@src/assets/images";

export default function Partners() {
	const autoplay = useRef(Autoplay({ delay: 2000 }));
	const { colorScheme } = useMantineColorScheme();

	const partners = [
		{
			image: image.partners.media.image5,
			title: "Kiss",
			width: "80%",
		},
		{
			image: image.partners.media.image4,
			title: "Classic",
			width: "80%",
		},
		{
			image: image.partners.media.image2,
			title: "East",
			width: "80%",
		},
		{
			image: image.partners.media.image1,
			title: "Mpasho",
			width: "80%",
		},
		{
			image: image.partners.media.image3,
			title: "Radio Africa Events",
			width: "30%",
		},
		{
			image: colorScheme == "dark" ? image.partners.media.image7 : null,
			title: "Startinev",
			width: "50%",
		},
	];

	const slides = partners
		.concat(partners)
		.concat(partners)
		.map(
			item =>
				item.image && (
					<Carousel.Slide key={Math.random()}>
						<AspectRatio ratio={2 / 1}>
							<Box w={item.width} mx={"auto"}>
								<Image src={item.image} alt={item.title} w={"100%"} />
							</Box>
						</AspectRatio>
					</Carousel.Slide>
				)
		);

	return (
		<Carousel
			loop={true}
			slidesToScroll={1}
			slideGap={"xl"}
			withIndicators={false}
			withControls={false}
			plugins={[autoplay.current]}
			slideSize={{ base: "50%", xs: "25%", sm: "33%", md: "16.67%", lg: "14.28%" }}
			// onMouseEnter={autoplay.current.stop}
			onMouseLeave={autoplay.current.reset}
		>
			{slides}
		</Carousel>
	);
}
