import { TaskService } from "@/features/tasks";
import { Container } from "inversify";

export const SERVICE_IDENTIFIER = {
	TaskService: Symbol.for("TaskService"),
};

const container = new Container();

container
	.bind<TaskService>(SERVICE_IDENTIFIER.TaskService)
	.to(TaskService)
	.inSingletonScope();

export { container };
