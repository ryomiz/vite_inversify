import { Button } from "@/components/ui/button.tsx";
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
import {
	type CreateTaskFormInput,
	useCreateTask,
} from "@/features/tasks/hooks/use-create-task.ts";
import { useDisclosure } from "@/hooks/use-disclosure.ts";
import type { HTMLAttributes, ReactElement } from "react";

type Props = {
	trigger: (
		open: () => void,
	) => ReactElement<HTMLAttributes<HTMLButtonElement>>;
};
export const CreateTaskDialog = ({ trigger }: Props) => {
	const form = useCreateTask();
	const onSubmit = async (input: CreateTaskFormInput) => {
		try {
			console.log(input);
			close();
		} catch {
			// Error handling
		}
	};

	const { isOpen, open, close } = useDisclosure();
	const handleOpenChange = (isOpen: boolean) => {
		if (isOpen) {
			open();
		} else {
			close();
		}
	};

	return (
		<Dialog open={isOpen} onOpenChange={handleOpenChange}>
			<DialogTrigger asChild>{trigger(open)}</DialogTrigger>
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
						<Button type="submit" onClick={form.handleSubmit(onSubmit)}>
							Create
						</Button>
					</DialogFooter>
				</Form>
			</DialogContent>
		</Dialog>
	);
};
