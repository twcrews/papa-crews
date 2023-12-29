import "./App.css";
import {
	Heading,
	ChakraProvider,
	Stack,
	Link,
	Button,
	Box,
	Image,
	Text,
} from "@chakra-ui/react";

function App() {
	return (
		<Box className="centered">
			<Box className="content">
				<Image src="/papa.webp" alt="Portrait of Grant Crews" />
				<Heading className="name">Grant Paschal Crews</Heading>
				<Text className="dates">1942 &ndash; 2023</Text>
				<ChakraProvider>
					<Stack
						direction="row"
						gap="16px"
						className="buttons"
						fontFamily="'Georgia', 'Times New Roman', Times, serif"
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
	);
}

export default App;
