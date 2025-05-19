import { Button } from "@/components/ui/button.tsx";
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
} from "@/components/ui/card.tsx";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog.tsx";

function App() {
	return (
		<div className={"mx-auto max-w-3xl px-4 py-8"}>
			<Dialog>
				<DialogTrigger asChild>
					<Button>Create Task</Button>
				</DialogTrigger>
				<DialogContent className="sm:max-w-[425px]">
					<DialogHeader>
						<DialogTitle>Edit profile</DialogTitle>
						<DialogDescription>
							Make changes to your profile here. Click save when you're done.
						</DialogDescription>
					</DialogHeader>
					<DialogFooter>
						<Button type="submit">Save changes</Button>
					</DialogFooter>
				</DialogContent>
			</Dialog>
			<hr className={"mt-4"} />
			<div className={"mt-4 grid grid-cols-2 gap-4"}>
				<div className={"flex flex-col gap-4"}>
					{[0, 1, 2].map((num) => (
						<Card key={num}>
							<CardHeader>Title</CardHeader>
							<CardContent>Content</CardContent>
							<CardFooter className={"flex justify-end"}>
								<Button>Complete</Button>
							</CardFooter>
						</Card>
					))}
				</div>
				<div>
					<Card>
						<CardHeader>Title</CardHeader>
						<CardContent>Content</CardContent>
					</Card>
				</div>
			</div>
		</div>
	);
}

export default App;
