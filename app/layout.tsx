import { Metadata, Viewport } from "next";
import "@/styles/globals.css";
import {
	Box,
	Button,
	ChakraProvider,
	Heading,
	Image,
	Stack,
} from "@chakra-ui/react";
import Link from "next/link";

export const metadata: Metadata = {
	title: "In Memory of Grant Crews",
	description: "This is the memorial landing page for Grant Crews.",
};

export const viewport: Viewport = {
	themeColor: "#000000",
};

export default function RootLayout() {
	return (
		<html lang="en">
			<head>
				<link rel="icon" href="favicon.svg" />
				<link rel="mask-icon" href="favicon.svg" color="#000000" />
				<link rel="apple-touch-icon" href="apple-touch-icon.png" />
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link
					rel="preconnect"
					href="https://fonts.gstatic.com"
					crossOrigin="anonymous"
				/>
				<link
					href="https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap"
					rel="stylesheet"
				/>
			</head>
			<body>
				<Box className="centered">
					<Box className="content">
						<Image src="/papa.webp" alt="Portrait of Grant Crews" />
						<Heading className="name">Grant Paschal Crews</Heading>

						<ChakraProvider>
							<Stack
								direction="row"
								gap="16px"
								className="buttons"
								fontFamily="'Georgia', 'Times New Roman', serif"
							>
								<Link href="https://www.oklahoman.com/obituaries/pokl0671799">
									<Button colorScheme="white" variant="outline">
										Obituary
									</Button>
								</Link>
								<Link href="https://www.oklahoman.com/obituaries/pokl0671799/memoryboard">
									<Button colorScheme="white" variant="outline">
										Post a Memory
									</Button>
								</Link>
							</Stack>
						</ChakraProvider>
					</Box>
				</Box>
			</body>
		</html>
	);
}
