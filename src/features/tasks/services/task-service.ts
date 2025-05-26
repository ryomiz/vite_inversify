import { injectable } from "inversify";
import type { IActiveTask, ITask, ITaskGroup } from "../types/task";

@injectable()
export class TaskService {
	private taskGroup: ITaskGroup = { active: [], done: [] };

	setInitialTaskGroup(taskGroup: ITaskGroup) {
		this.taskGroup = taskGroup;
	}

	getTasks(): ITaskGroup {
		return {
			active: [...this.taskGroup.active],
			done: [...this.taskGroup.done],
		};
	}

	createTask({ title, description }: Omit<ITask, "status">) {
		const newTask: IActiveTask = { title, description, status: "active" };
		this.taskGroup = {
			...this.taskGroup,
			active: [...this.taskGroup.active, newTask],
		};
	}

	completeTask(index: number) {
		const targetTask = this.taskGroup.active.find((_, i) => index === i);
		if (!targetTask) return;

		this.taskGroup = {
			active: this.taskGroup.active.filter((_, i) => index !== i),
			done: [
				...this.taskGroup.done,
				{
					...targetTask,
					status: "done",
				},
			],
		};
	}

	undoTask(index: number) {
		const targetTask = this.taskGroup.done.find((_, i) => index === i);
		if (!targetTask) return;

		this.taskGroup = {
			active: [
				...this.taskGroup.active,
				{
					...targetTask,
					status: "active",
				},
			],
			done: this.taskGroup.done.filter((_, i) => index !== i),
		};
	}

	deleteTask(index: number) {
		const targetTask = this.taskGroup.active.find((_, i) => index === i);
		if (!targetTask) return;

		this.taskGroup = {
			...this.taskGroup,
			active: this.taskGroup.active.filter((_, i) => index !== i),
		};
	}
}
