import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { App } from "@/app";
import { Toaster } from "@/components/ui/sonner.tsx";

const root = createRoot(document.getElementById("root") as HTMLElement);
root.render(
	<StrictMode>
		<App />
		<Toaster />
	</StrictMode>,
);
