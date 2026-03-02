import { Link } from "react-router";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Card, CardContent } from "../components/ui/card";

const listings = [
	{
		id: "1",
		name: "Verdana Apartments",
		address: "301 Bryant St, San Francisco, CA 94107",
		price: "$4,600+",
		beds: "2 Beds",
		phone: "(650) 440-1111",
	},
	{
		id: "2",
		name: "South Beach Lofts",
		address: "250 Brannan St, San Francisco, CA 94107",
		price: "$5,379+",
		beds: "2 Beds",
		phone: "(650) 555-0123",
	},
];

export default function PropertyListings() {
	return (
		<div className="grid min-h-[500px] grid-cols-1 gap-6 lg:grid-cols-[320px_1fr]">
			<div className="min-h-[400px] rounded-xl bg-muted" aria-label="Map placeholder" />
			<div>
				<div className="mb-4 flex flex-wrap gap-3">
					<Input
						type="text"
						defaultValue="San Francisco, CA"
						className="min-w-[200px] flex-1 flex-[1_1_200px]"
					/>
					<Button variant="outline">Price</Button>
					<Button variant="outline">Beds/Bath</Button>
					<Button>All Filters</Button>
				</div>
				<h2 className="mb-1 text-lg font-semibold text-foreground">
					2 Bedroom Apartments for Rent in San Francisco CA
				</h2>
				<p className="mb-4 text-sm text-muted-foreground">1,181 Rentals Available</p>
				<div className="space-y-4">
					{listings.map((p) => (
						<Card key={p.name}>
							<CardContent className="flex gap-4 p-4">
								<Link
									to={`/property/${p.id}`}
									className="relative block size-[200px] shrink-0 rounded-xl bg-muted"
								>
									<span className="absolute left-2 top-2 rounded-md bg-primary px-2 py-1 text-xs text-primary-foreground">
										Virtual Tours
									</span>
								</Link>
								<div className="min-w-0 flex-1">
									<h3 className="mb-1 text-base font-semibold">
										<Link
											to={`/property/${p.id}`}
											className="text-primary no-underline hover:underline"
										>
											{p.name}
										</Link>
									</h3>
									<p className="mb-2 text-sm text-muted-foreground">{p.address}</p>
									<p className="mb-1 text-sm text-foreground">
										{p.price} {p.beds}
									</p>
									<p className="mb-2 text-sm text-muted-foreground">
										In Unit Washer & Dryer, Pets Allowed, Fitness Center
									</p>
									<p className="mb-2 text-sm text-primary">{p.phone}</p>
									<Button asChild size="sm">
										<Link to={`/property/${p.id}`}>Email Property</Link>
									</Button>
								</div>
							</CardContent>
						</Card>
					))}
				</div>
			</div>
		</div>
	);
}
