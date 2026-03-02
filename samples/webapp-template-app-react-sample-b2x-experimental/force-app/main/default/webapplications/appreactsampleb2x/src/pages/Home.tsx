import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";

export default function Home() {
	return (
		<div className="mx-auto max-w-[1100px]">
			<div className="mb-6 rounded-2xl bg-primary px-8 py-10 text-primary-foreground shadow-md">
				<p className="mb-2 text-xs uppercase tracking-widest opacity-90">THE ZEN WAY TO LEASE</p>
				<h1 className="mb-2 text-3xl font-bold leading-tight">Your Dream Place Starts Here</h1>
				<p className="mb-6 text-[0.95rem] opacity-90">
					Luxury Properties, Managed With Uncompromising Care
				</p>
				<Button size="lg" className="font-semibold">
					Browse All Properties
				</Button>
			</div>
			<div className="flex flex-wrap items-center gap-3 rounded-xl bg-primary/10 p-5">
				<Input
					type="text"
					placeholder="Search by address, city, location, or zipcode"
					aria-label="Search"
					className="min-w-[200px] flex-1 flex-[1_1_240px]"
				/>
				<Button variant="secondary" className="font-semibold">
					Find Home
				</Button>
			</div>
		</div>
	);
}
