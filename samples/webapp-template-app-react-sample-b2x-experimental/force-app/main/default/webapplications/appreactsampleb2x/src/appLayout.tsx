import { useState } from "react";
import { Outlet, NavLink } from "react-router";
import { Button } from "./components/ui/button";
import { cn } from "./lib/utils";
import {
	Home,
	Search,
	BarChart3,
	Wrench,
	HelpCircle,
	Menu,
	Heart,
	Bell,
	Building2,
} from "lucide-react";

const SIDEBAR_WIDTH = 200;
const FLOAT_INSET = 20;
const FLOAT_GAP = 20;

function AppShell() {
	const [navHidden, setNavHidden] = useState(false);

	return (
		<div className="flex min-h-screen flex-col">
			<header
				className="flex shrink-0 items-center justify-between bg-primary px-6 py-3 text-primary-foreground"
				role="banner"
			>
				<div className="flex items-center gap-3">
					<Button
						type="button"
						variant="ghost"
						size="icon"
						className="min-h-11 min-w-11 text-primary-foreground hover:bg-primary-foreground/20"
						aria-label={navHidden ? "Show menu" : "Hide menu"}
						onClick={() => setNavHidden((h) => !h)}
					>
						<Menu className="size-6" aria-hidden />
					</Button>
					<div className="flex size-8 items-center justify-center">
						<Building2 className="size-7" aria-hidden />
					</div>
					<span className="text-xl font-semibold tracking-wide">ZENLEASE</span>
				</div>
				<div className="flex items-center gap-4">
					<Button
						type="button"
						variant="ghost"
						size="icon"
						className="text-primary-foreground hover:bg-primary-foreground/20"
						aria-label="Favorites"
					>
						<Heart className="size-5" aria-hidden />
					</Button>
					<Button
						type="button"
						variant="ghost"
						size="icon"
						className="text-primary-foreground hover:bg-primary-foreground/20"
						aria-label="Notifications"
					>
						<Bell className="size-5" aria-hidden />
					</Button>
					<div className="flex items-center gap-2">
						<div className="size-9 shrink-0 rounded-full bg-primary-foreground/25" aria-hidden />
						<span className="text-sm font-medium">SARAH</span>
					</div>
				</div>
			</header>
			<div className="relative flex min-h-0 flex-1">
				{!navHidden && (
					<nav
						className="absolute left-5 top-5 bottom-5 z-10 flex w-[200px] flex-col items-start gap-1 overflow-hidden rounded-2xl border border-border bg-card p-4 py-2 shadow-lg"
						aria-label="Main navigation"
					>
						<NavLink
							to="/"
							end
							className={({ isActive }) =>
								cn(
									"flex min-h-11 w-full flex-shrink-0 items-center justify-start gap-3 rounded-xl px-3 py-2 text-muted-foreground no-underline transition-colors",
									isActive && "bg-primary text-primary-foreground",
								)
							}
							aria-label="Home"
						>
							<Home className="size-[22px] shrink-0" aria-hidden />
							<span className="text-sm font-medium">Home</span>
						</NavLink>
						<NavLink
							to="/properties"
							className={({ isActive }) =>
								cn(
									"flex min-h-11 w-full flex-shrink-0 items-center justify-start gap-3 rounded-xl px-3 py-2 text-muted-foreground no-underline transition-colors",
									isActive && "bg-primary text-primary-foreground",
								)
							}
							aria-label="Property Search"
						>
							<Search className="size-[22px] shrink-0" aria-hidden />
							<span className="text-sm font-medium">Property Search</span>
						</NavLink>
						<NavLink
							to="/dashboard"
							className={({ isActive }) =>
								cn(
									"flex min-h-11 w-full flex-shrink-0 items-center justify-start gap-3 rounded-xl px-3 py-2 text-muted-foreground no-underline transition-colors",
									isActive && "bg-primary text-primary-foreground",
								)
							}
							aria-label="Dashboard"
						>
							<BarChart3 className="size-[22px] shrink-0" aria-hidden />
							<span className="text-sm font-medium">Dashboard</span>
						</NavLink>
						<NavLink
							to="/maintenance"
							className={({ isActive }) =>
								cn(
									"flex min-h-11 w-full flex-shrink-0 items-center justify-start gap-3 rounded-xl px-3 py-2 text-muted-foreground no-underline transition-colors",
									isActive && "bg-primary text-primary-foreground",
								)
							}
							aria-label="Maintenance"
						>
							<Wrench className="size-[22px] shrink-0" aria-hidden />
							<span className="text-sm font-medium">Maintenance</span>
						</NavLink>
						<NavLink
							to="/help"
							className={({ isActive }) =>
								cn(
									"flex min-h-11 w-full flex-shrink-0 items-center justify-start gap-3 rounded-xl px-3 py-2 text-muted-foreground no-underline transition-colors",
									isActive && "bg-primary text-primary-foreground",
								)
							}
							aria-label="Help Center"
						>
							<HelpCircle className="size-[22px] shrink-0" aria-hidden />
							<span className="text-sm font-medium">Help Center</span>
						</NavLink>
					</nav>
				)}
				<main
					className="min-h-full flex-1 overflow-auto bg-muted/30 p-6 transition-[margin-left] duration-200 ease-[cubic-bezier(0.4,0,0.2,1)]"
					style={{
						marginLeft: navHidden ? 0 : FLOAT_INSET + SIDEBAR_WIDTH + FLOAT_GAP,
					}}
					role="main"
				>
					<Outlet />
				</main>
			</div>
		</div>
	);
}

export default function AppLayout() {
	return <AppShell />;
}
