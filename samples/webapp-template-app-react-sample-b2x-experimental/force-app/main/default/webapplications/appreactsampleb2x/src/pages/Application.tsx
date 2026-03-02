import { Link } from "react-router";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Card, CardHeader, CardTitle, CardContent } from "../components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../components/ui/tabs";

export default function Application() {
	return (
		<div className="mx-auto max-w-[800px]">
			<Card className="mb-6 flex gap-4 p-6">
				<div className="size-[200px] shrink-0 rounded-xl bg-muted" />
				<div className="min-w-0 flex-1">
					<h2 className="mb-1 text-lg font-semibold text-primary">Verdana Apartments</h2>
					<p className="text-sm text-muted-foreground">301 Bryant St, San Francisco, CA 94107</p>
					<p className="mt-2 text-sm text-muted-foreground">
						I have read and agree to the Terms & Conditions.
					</p>
				</div>
				<div className="flex gap-2">
					<Button variant="outline" size="sm">
						Cancel Application
					</Button>
					<Button size="sm">Save for Later</Button>
				</div>
			</Card>
			<Tabs defaultValue="applicants" className="mb-6">
				<TabsList className="mb-4 flex h-auto flex-wrap gap-4 border-b border-border bg-transparent p-0">
					<TabsTrigger
						value="applicants"
						className="rounded-none border-b-2 border-primary bg-transparent px-0 pb-1 data-[state=active]:shadow-none"
					>
						APPLICANTS & OCCUPANTS
					</TabsTrigger>
					<TabsTrigger
						value="details"
						className="rounded-none border-b-0 bg-transparent px-0 pb-1 text-muted-foreground data-[state=active]:shadow-none"
					>
						YOUR DETAILS
					</TabsTrigger>
					<TabsTrigger
						value="screening"
						className="rounded-none border-b-0 bg-transparent px-0 pb-1 text-muted-foreground data-[state=active]:shadow-none"
					>
						SCREENING
					</TabsTrigger>
					<TabsTrigger
						value="submit"
						className="rounded-none border-b-0 bg-transparent px-0 pb-1 text-muted-foreground data-[state=active]:shadow-none"
					>
						FINISH & SUBMIT
					</TabsTrigger>
				</TabsList>
				<TabsContent value="applicants" className="mt-0" />
			</Tabs>
			<Card>
				<CardContent className="pt-6">
					<h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-foreground">
						YOUR INFO
					</h3>
					<div className="mb-4 grid grid-cols-1 gap-4 md:grid-cols-2">
						<div className="space-y-2">
							<Label>First Name *</Label>
							<Input type="text" defaultValue="Sarah" />
						</div>
						<div className="space-y-2">
							<Label>Last Name</Label>
							<Input type="text" />
						</div>
					</div>
					<div className="mb-4 space-y-2">
						<Label>Email Address</Label>
						<Input type="email" />
					</div>
					<div className="mb-4 space-y-2">
						<Label>Phone Number</Label>
						<Input type="tel" />
					</div>
					<h3 className="mb-4 mt-6 text-xs font-semibold uppercase tracking-wider text-foreground">
						MOVE IN
					</h3>
					<div className="grid grid-cols-1 gap-4 md:grid-cols-2">
						<div className="space-y-2">
							<Label>MOVE IN DATE</Label>
							<Input type="text" placeholder="Select Date" />
						</div>
						<div className="space-y-2">
							<Label>PREFERRED TERM</Label>
							<select className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-xs outline-none focus-visible:ring-2 focus-visible:ring-ring">
								<option>Select One</option>
								<option>1 month</option>
								<option>6 months</option>
								<option>12 months</option>
							</select>
						</div>
					</div>
				</CardContent>
			</Card>
		</div>
	);
}
