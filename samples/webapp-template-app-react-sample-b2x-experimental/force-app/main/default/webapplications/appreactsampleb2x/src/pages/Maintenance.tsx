import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Card, CardHeader, CardTitle, CardContent } from "../components/ui/card";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "../components/ui/table";
import { Calendar, Upload, ArrowRight } from "lucide-react";

export default function Maintenance() {
	return (
		<div className="mx-auto max-w-[900px]">
			<Card className="mb-6">
				<CardHeader>
					<CardTitle className="text-2xl text-primary">Maintenance</CardTitle>
				</CardHeader>
				<CardContent className="space-y-4">
					<div className="grid grid-cols-1 gap-4 md:grid-cols-2">
						<div className="space-y-2">
							<Label>Date Reported</Label>
							<div className="relative">
								<Input
									type="text"
									readOnly
									value="Today"
									className="pr-10"
									aria-label="Date reported"
								/>
								<span className="absolute right-3 top-1/2 -translate-y-1/2">
									<Calendar className="size-[18px] text-muted-foreground" />
								</span>
							</div>
						</div>
						<div className="space-y-2">
							<Label>Urgency</Label>
							<select
								className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-2 focus-visible:ring-ring"
								aria-label="Urgency"
								defaultValue="urgent"
							>
								<option value="urgent">Urgent</option>
								<option value="normal">Normal</option>
								<option value="low">Low</option>
							</select>
						</div>
					</div>
					<div className="space-y-2">
						<Label>Room</Label>
						<select
							className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-2 focus-visible:ring-ring"
							aria-label="Room"
							defaultValue="living-room"
						>
							<option value="living-room">Living Room</option>
							<option value="bathroom">Bathroom</option>
							<option value="bedroom">Bedroom</option>
							<option value="kitchen">Kitchen</option>
						</select>
					</div>
					<div className="space-y-2">
						<Label>Description</Label>
						<textarea
							rows={4}
							placeholder="Input text"
							className="min-h-[100px] w-full resize-y rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-xs outline-none focus-visible:ring-2 focus-visible:ring-ring"
							aria-label="Description"
						/>
					</div>
					<div className="grid grid-cols-2 gap-4">
						<div />
						<div className="flex flex-col items-center justify-center rounded-xl border-2 border-dashed border-border bg-muted/30 p-6 text-center">
							<Upload className="mx-auto mb-2 size-10 text-muted-foreground" />
							<p className="m-0 text-xs text-muted-foreground">
								Choose a file or drag & drop for reference here.
							</p>
							<p className="mt-1 text-[0.75rem] text-muted-foreground">
								JPEG, PNG, PDF, and MP4 formats, up to 50MB
							</p>
						</div>
					</div>
					<div className="flex justify-end">
						<Button className="gap-2">
							Submit Request
							<ArrowRight className="size-[18px]" />
						</Button>
					</div>
				</CardContent>
			</Card>
			<Card>
				<CardContent className="p-0">
					<div className="overflow-x-auto">
						<Table>
							<TableHeader>
								<TableRow>
									{["Description", "Work Order", "Type", "Room", "Date", "Status"].map((h) => (
										<TableHead key={h} className="font-semibold text-primary">
											{h}
										</TableHead>
									))}
								</TableRow>
							</TableHeader>
							<TableBody>
								<TableRow>
									<TableCell>
										<div className="flex items-center gap-2">
											<div className="size-10 shrink-0 rounded-lg bg-muted" />
											<span>Shower head leaking</span>
										</div>
									</TableCell>
									<TableCell>#12548796</TableCell>
									<TableCell>Plumbing</TableCell>
									<TableCell>Bathroom</TableCell>
									<TableCell>28 Jan, 12.30 AM</TableCell>
									<TableCell>
										<span className="inline-block rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700">
											Completed
										</span>
									</TableCell>
								</TableRow>
							</TableBody>
						</Table>
					</div>
				</CardContent>
			</Card>
		</div>
	);
}
