import React from "react";
import Background from "./components/Background";
import Foreground from "./components/Foreground";

function App() {
	return (
		<div className="relative bg-zinc-800 h-screen w-full">
			<Background />
			<Foreground />
		</div>
	);
}

export default App;
