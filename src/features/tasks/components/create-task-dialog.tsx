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
import { useDisclosure } from "@/hooks/use-disclosure.ts";
import { delay } from "@/utils/delay.ts";
import type { HTMLAttributes, ReactElement } from "react";
import { toast } from "sonner";
import {
	type CreateTaskFormInput,
	useCreateTask,
} from "../hooks/use-create-task.ts";

type Props = {
	trigger: (
		open: () => void,
	) => ReactElement<HTMLAttributes<HTMLButtonElement>>;
	createTask: (input: CreateTaskFormInput) => void;
};
export const CreateTaskDialog = ({ trigger, createTask }: Props) => {
	const form = useCreateTask();
	const onSubmit = async (input: CreateTaskFormInput) => {
		try {
			await delay(2000);
			createTask(input);
			toast("Task created successfully");
			form.reset();
			close();
		} catch {
			toast("Failed to create a task");
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
						<Button
							type="submit"
							onClick={form.handleSubmit(onSubmit)}
							loading={form.formState.isSubmitting}
						>
							Create
						</Button>
					</DialogFooter>
				</Form>
			</DialogContent>
		</Dialog>
	);
};
