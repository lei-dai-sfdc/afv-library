import { createBrowserRouter, RouterProvider } from "react-router";
import { routes } from "@/routes";
import { StrictMode, Component, type ReactNode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/global.css";

class ErrorBoundary extends Component<
	{ children: ReactNode },
	{ hasError: boolean; error: Error | null }
> {
	state = { hasError: false, error: null as Error | null };
	static getDerivedStateFromError(error: Error) {
		return { hasError: true, error };
	}
	render() {
		if (this.state.hasError && this.state.error) {
			return (
				<div className="mx-auto max-w-[600px] p-8 font-sans">
					<h1 className="text-xl text-destructive">Something went wrong</h1>
					<pre className="mt-2 overflow-auto rounded-md bg-destructive/10 p-4 text-sm">
						{this.state.error.message}
					</pre>
				</div>
			);
		}
		return this.props.children;
	}
}

const baseUrl = import.meta.env.BASE_URL ?? "/";
const router = createBrowserRouter(routes, { basename: baseUrl === "/" ? undefined : baseUrl });
const rootEl = document.getElementById("root");
if (rootEl) {
	createRoot(rootEl).render(
		<StrictMode>
			<ErrorBoundary>
				<RouterProvider router={router} />
			</ErrorBoundary>
		</StrictMode>,
	);
}
