import { useState } from "react";
import type { IActiveTask, ICompletedTask, ITask } from "../types/task.ts";

type TaskGroup = {
	active: IActiveTask[];
	done: ICompletedTask[];
};
const INITIAL_TASK_GROUP: TaskGroup = {
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

export const useTask = () => {
	const [taskGroup, setTasks] = useState<TaskGroup>(INITIAL_TASK_GROUP);
	const createTask = ({ title, description }: Omit<ITask, "status">) => {
		const newTask: IActiveTask = {
			title,
			description,
			status: "active",
		};
		setTasks({
			...taskGroup,
			active: [...taskGroup.active, newTask],
		});
	};
	const completeTask = (index: number) => {
		const targetTask = taskGroup.active.find((_, i) => index === i);
		if (!targetTask) return;

		setTasks({
			active: taskGroup.active.filter((_, i) => index !== i),
			done: [
				...taskGroup.done,
				{
					...targetTask,
					status: "done",
				},
			],
		});
	};
	const undoTask = (index: number) => {
		const targetTask = taskGroup.done.find((_, i) => index === i);
		if (!targetTask) return;
		setTasks({
			active: [
				...taskGroup.active,
				{
					...targetTask,
					status: "active",
				},
			],
			done: taskGroup.done.filter((_, i) => index !== i),
		});
	};
	const deleteTask = (index: number) => {
		const targetTask = taskGroup.active.find((_, i) => index === i);
		if (!targetTask) return;

		setTasks({
			...taskGroup,
			active: taskGroup.active.filter((_, i) => index !== i),
		});
	};

	return { taskGroup, createTask, completeTask, undoTask, deleteTask };
};
