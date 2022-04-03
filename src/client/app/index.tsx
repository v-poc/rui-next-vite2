import React from "react";
// import ReactDOM from "react-dom";
import { createRoot, hydrateRoot } from "react-dom/client";
import { App } from "./App";
// @ts-ignore
if (import.meta.env.PROD) {
	// ReactDOM.hydrate(
	//	<React.StrictMode>
	//		<App />
	//	</React.StrictMode>,
	//	document.getElementById('app')
	// )
	const container = document.getElementById("app") as any;
	hydrateRoot(
		container,
		<React.StrictMode>
			<App />
		</React.StrictMode>
	);
} else {
	// ReactDOM.render(
	// 	<React.StrictMode>
	// 		<App />
	// 	</React.StrictMode>,
	// 	document.getElementById('app')
	// )
	const clientContainer = document.getElementById("app") as any;
	createRoot(clientContainer).render(
		<React.StrictMode>
			<App />
		</React.StrictMode>
	);
}
