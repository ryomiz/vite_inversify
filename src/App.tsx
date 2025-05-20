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
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormMessage,
} from "@/components/ui/form.tsx";
import { Input } from "@/components/ui/input.tsx";
import { Textarea } from "@/components/ui/textarea.tsx";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

function App() {
	const schema = z.object({
		title: z.string().nonempty({ message: "This field is required" }),
		description: z.string().nonempty({ message: "This field is required" }),
	});
	type FormInput = z.infer<typeof schema>;
	const form = useForm<FormInput>({
		defaultValues: {
			title: "",
			description: "",
		},
		resolver: zodResolver(schema),
	});

	return (
		<div className={"mx-auto max-w-3xl px-4 py-8"}>
			<Dialog>
				<DialogTrigger asChild>
					<Button>Add Task</Button>
				</DialogTrigger>
				<DialogContent className="sm:max-w-[425px]">
					<Form {...form}>
						<DialogHeader>
							<DialogTitle>Add Task</DialogTitle>
						</DialogHeader>
						<DialogDescription>Add title and description.</DialogDescription>
						<FormField
							control={form.control}
							name={"title"}
							render={({ field }) => (
								<FormItem>
									<FormControl>
										<Input placeholder={"title"} {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name={"description"}
							render={({ field }) => (
								<FormItem>
									<FormControl>
										<Textarea placeholder={"description"} {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<DialogFooter>
							<Button
								type="submit"
								onClick={form.handleSubmit(async (input) => {
									try {
										console.log(input);
									} catch {
										// do something
									}
								})}
							>
								Create
							</Button>
						</DialogFooter>
					</Form>
				</DialogContent>
			</Dialog>
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
}

export default App;
