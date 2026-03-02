import { Button } from "../components/ui/button";
import {
	Card,
	CardHeader,
	CardTitle,
	CardContent,
	CardFooter,
} from "../components/ui/card";
import { Link } from "react-router";

export default function Dashboard() {
	return (
		<div className="mx-auto grid max-w-[1100px] grid-cols-1 gap-6 md:grid-cols-2">
			<div className="space-y-6">
				<Card>
					<CardHeader className="flex flex-row items-center justify-between pb-2">
						<CardTitle className="text-base text-primary">Community News</CardTitle>
					</CardHeader>
					<CardContent className="space-y-2">
						<h3 className="text-lg font-semibold text-gray-700">
							Sip & Skyline: Rooftop Wine Tasting Mixer
						</h3>
						<p className="text-sm text-muted-foreground">Thursday, January 22nd, at 6:30 PM</p>
						<p className="text-sm leading-relaxed text-foreground">
							We're partnering with local favorite Mission Cellars to bring you a curated selection
							of Bay Area wines paired with artisanal charcuterie.
						</p>
						<div className="mt-4 h-36 rounded-xl bg-muted" aria-hidden />
					</CardContent>
				</Card>
				<Card>
					<CardHeader className="flex flex-row items-center justify-between pb-2">
						<CardTitle className="text-base text-primary">Maintenance</CardTitle>
						<Button size="sm">+ New Request</Button>
					</CardHeader>
					<CardContent className="space-y-4">
						<div className="flex items-start gap-4 border-b border-border py-3">
							<div className="size-14 shrink-0 rounded-lg bg-muted" />
							<div className="min-w-0 flex-1">
								<p className="font-semibold text-foreground">Heater Broken</p>
								<p className="text-xs text-muted-foreground">Submitted Mar 23, 2026.</p>
								<div className="my-2 h-1.5 overflow-hidden rounded-full bg-muted">
									<div className="h-full w-1/4 rounded-full bg-primary" aria-hidden />
								</div>
								<p className="text-xs text-primary">25% In Progress</p>
							</div>
						</div>
						<div className="flex items-start gap-4 py-3">
							<div className="size-14 shrink-0 rounded-lg bg-muted" />
							<div className="min-w-0 flex-1">
								<p className="font-semibold text-foreground">Replace Shower Head</p>
								<p className="text-xs text-muted-foreground">Completed Nov 17, 2025.</p>
								<div className="my-2 h-1.5 overflow-hidden rounded-full bg-muted">
									<div className="h-full w-full rounded-full bg-primary" aria-hidden />
								</div>
								<p className="text-xs text-green-600">100% Completed</p>
							</div>
						</div>
					</CardContent>
					<CardFooter className="justify-end pt-2">
						<Link to="/maintenance" className="text-sm font-medium text-primary hover:underline">
							See All
						</Link>
					</CardFooter>
				</Card>
			</div>
			<div>
				<Card>
					<CardHeader>
						<CardTitle className="text-primary">Weather</CardTitle>
						<p className="text-sm text-muted-foreground">26 March 2026</p>
					</CardHeader>
					<CardContent className="space-y-4">
						<p className="text-base text-foreground">Cloudy</p>
						<p className="text-4xl font-bold text-foreground">72°F</p>
						<div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
							<span>10 m/s Wind</span>
							<span>98% Humidity</span>
							<span>100% Rain</span>
						</div>
						<div className="flex gap-2 border-b border-border pb-2">
							<span className="border-b-2 border-primary pb-1 text-sm font-semibold text-primary">
								Today
							</span>
							<span className="text-sm text-muted-foreground">Tomorrow</span>
							<span className="text-sm text-muted-foreground">Next 3 Days</span>
						</div>
						<div className="flex flex-wrap gap-4">
							{["10 am", "11 am", "12 pm", "01 pm"].map((t, i) => (
								<div key={t} className="min-w-[60px] rounded-lg bg-muted/50 p-2 text-center">
									<p className="text-xs text-muted-foreground">{t}</p>
									<p className="text-base font-semibold text-foreground">{72 - i}°</p>
								</div>
							))}
						</div>
					</CardContent>
				</Card>
			</div>
		</div>
	);
}
