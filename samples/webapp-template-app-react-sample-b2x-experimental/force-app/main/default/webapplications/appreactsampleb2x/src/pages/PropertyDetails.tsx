import { useParams, Link } from "react-router";
import { Button } from "../components/ui/button";
import { Card, CardHeader, CardContent } from "../components/ui/card";

export default function PropertyDetails() {
	const { id } = useParams();

	return (
		<div className="mx-auto max-w-[900px]">
			<div className="mb-4">
				<Link to="/properties" className="text-sm text-primary no-underline hover:underline">
					← Back to listings
				</Link>
			</div>
			<div className="mb-4 grid grid-cols-1 gap-4 md:grid-cols-2">
				<div className="h-72 rounded-xl bg-muted" />
				<div className="flex flex-col gap-2">
					{[1, 2, 3, 4, 5].map((i) => (
						<div key={i} className="h-12 rounded-lg bg-muted" />
					))}
				</div>
			</div>
			<div className="mb-4 flex flex-wrap gap-2">
				<Button size="sm">23 Photos</Button>
				<Button size="sm" variant="outline">
					8 Virtual Tours
				</Button>
				<Button size="sm" variant="outline">
					Property Map
				</Button>
			</div>
			<Card className="mb-4">
				<CardContent className="pt-6">
					<p className="mb-2 text-sm text-primary">
						California / San Francisco County / San Francisco / South Beach
					</p>
					<p className="mb-1 text-2xl font-bold text-foreground">$4,600 / Month</p>
					<p className="mb-4 text-sm text-muted-foreground">
						301 Bryant St. Unit 5B, San Francisco, CA 94107
					</p>
					<div className="flex flex-wrap gap-3">
						{["2 Bedroom", "2 Baths", "1040 sq ft", "Now Available"].map((s) => (
							<span key={s} className="rounded-lg bg-primary/10 px-3 py-1.5 text-sm text-primary">
								{s}
							</span>
						))}
					</div>
				</CardContent>
			</Card>
			<Card>
				<CardHeader>
					<CardTitle className="text-base">Contact Property</CardTitle>
				</CardHeader>
				<CardContent className="flex flex-col gap-2">
					<Button variant="outline" className="justify-start">
						Request Tour
					</Button>
					<Button variant="outline" className="justify-start">
						Send Message
					</Button>
					<Button asChild variant="secondary" className="justify-center">
						<Link to="/application?property=1">Fill out an application</Link>
					</Button>
				</CardContent>
			</Card>
		</div>
	);
}
