import { Button } from "@/components/ui/button.tsx";
import {
	CreateTaskDialog,
	type ITask,
	type ITaskGroup,
	Task,
	type TaskService,
} from "@/features/tasks";
import { SERVICE_IDENTIFIER, container } from "@/lib/di.ts";
import { useMemo, useState } from "react";

const INITIAL_TASK_GROUP: ITaskGroup = {
	active: [
		{
			title: "Task1",
			description: "Lorem ipsum",
			status: "active",
		},
		{
			title: "Task2",
			description: "Lorem ipsum",
			status: "active",
		},
	],
	done: [
		{
			title: "Task3",
			description: "Lorem ipsum",
			status: "done",
		},
	],
};

export const App = () => {
	const taskService = useMemo<TaskService>(() => {
		const service = container.get<TaskService>(SERVICE_IDENTIFIER.TaskService);
		service.setInitialTaskGroup(INITIAL_TASK_GROUP);
		return service;
	}, []);

	const [taskGroup, setTaskGroup] = useState<ITaskGroup>(
		taskService.getTasks(),
	);
	const createTask = ({ title, description }: Omit<ITask, "status">) => {
		taskService.createTask({ title, description });
		setTaskGroup(taskService.getTasks());
	};
	const completeTask = (index: number) => {
		taskService.completeTask(index);
		setTaskGroup(taskService.getTasks());
	};
	const undoTask = (index: number) => {
		taskService.undoTask(index);
		setTaskGroup(taskService.getTasks());
	};
	const deleteTask = (index: number) => {
		taskService.deleteTask(index);
		setTaskGroup(taskService.getTasks());
	};

	return (
		<div className={"mx-auto max-w-3xl px-4 py-8"}>
			<CreateTaskDialog
				trigger={(open) => <Button onClick={open}>Add Task</Button>}
				createTask={createTask}
			/>
			<hr className={"mt-4"} />
			<div className={"mt-4 grid grid-cols-2 gap-4"}>
				<div>
					<h2 className={"text-2xl text-blue-700"}>Active tasks</h2>
					<div className={"mt-2 flex flex-col gap-4"}>
						{taskGroup.active.length > 0 ? (
							taskGroup.active.map((task, index) => (
								<Task
									key={task.title}
									{...task}
									onClickDone={() => completeTask(index)}
									onClickDelete={() => deleteTask(index)}
								/>
							))
						) : (
							<p>All done!</p>
						)}
					</div>
				</div>
				<div>
					<h2 className={"text-2xl text-red-700"}>Completed tasks</h2>
					<div className={"mt-2 flex flex-col gap-4"}>
						{taskGroup.done.length > 0 ? (
							taskGroup.done.map((task, index) => (
								<Task
									key={task.title}
									{...task}
									onClickUndo={() => undoTask(index)}
								/>
							))
						) : (
							<p>Still working on tasks!</p>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};
