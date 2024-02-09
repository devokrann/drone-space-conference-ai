import React from "react";
import { useRef } from "react";

import { Carousel } from "@mantine/carousel";
import { AspectRatio, Box, Image } from "@mantine/core";

import Autoplay from "embla-carousel-autoplay";

import data from "@src/data";

import { typePartners } from "@src/types/carousel";

export default function Partners({ data }: typePartners) {
	const autoplay = useRef(Autoplay({ delay: 2000 }));

	const slides = data.map(item => (
		<Carousel.Slide key={Math.random()}>
			<AspectRatio ratio={2 / 1}>
				<Box w={item.width} mx={"auto"}>
					<Image src={item.image} alt={item.title} w={"100%"} />
				</Box>
			</AspectRatio>
		</Carousel.Slide>
	));

	return (
		<Carousel
			loop
			slidesToScroll={1}
			slideGap={"xl"}
			withIndicators={false}
			withControls={false}
			plugins={[autoplay.current]}
			slideSize={{ base: "50%", xs: "25%", sm: "33%", md: "16.67%", lg: "14.28%" }}
			// onMouseEnter={autoplay.current.stop}
			// onMouseLeave={autoplay.current.reset}
		>
			{slides}
		</Carousel>
	);
}
