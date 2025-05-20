type TaskStatus = "active" | "done";

export type IActiveTask = {
	status: Extract<TaskStatus, "active">;
	title: string;
	description: string;
};
export type ICompletedTask = {
	status: Extract<TaskStatus, "done">;
	title: string;
	description: string;
};
export type ITask = IActiveTask | ICompletedTask;
