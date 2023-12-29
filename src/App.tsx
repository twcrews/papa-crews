import "./App.css";

function App() {
	return (
		<div className="centered">
			<div className="content">
				<img className="photo" src="/papa.webp" alt="Portrait of Grant Crews" />
				<h1 className="name">Grant Paschal Crews</h1>
				<p className="dates">1942 &ndash; 2023</p>
				<div className="buttons">
					<button
						onClick={() =>
							window.open("https://www.oklahoman.com/obituaries/pokl0671799")
						}
						className="button"
					>
						Obituary
					</button>
					<button
						className="button"
						onClick={() =>
							window.open(
								"https://www.oklahoman.com/obituaries/pokl0671799/memoryboard"
							)
						}
					>
						Post a Memory
					</button>
				</div>
			</div>
		</div>
	);
}

export default App;
