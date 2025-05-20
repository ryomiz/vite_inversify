import { Button } from "@/components/ui/button.tsx";
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
} from "@/components/ui/card.tsx";
import { CreateTaskDialog } from "@/features/tasks";

export const App = () => {
	return (
		<div className={"mx-auto max-w-3xl px-4 py-8"}>
			<CreateTaskDialog
				trigger={(open) => <Button onClick={open}>Add Task</Button>}
			/>
			<hr className={"mt-4"} />
			<div className={"mt-4 grid grid-cols-2 gap-4"}>
				<div className={"flex flex-col gap-4"}>
					{[0, 1, 2].map((num) => (
						<Card key={num}>
							<CardHeader>Title</CardHeader>
							<CardContent>Description</CardContent>
							<CardFooter className={"flex justify-between"}>
								<Button variant={"outline"}>Edit</Button>
								<Button>Done</Button>
							</CardFooter>
						</Card>
					))}
				</div>
				<div>
					<Card>
						<CardHeader>Title</CardHeader>
						<CardContent>Description</CardContent>
					</Card>
				</div>
			</div>
		</div>
	);
};
