import { Button } from "@/components/ui/button.tsx";
import { CreateTaskDialog, Task, useTask } from "@/features/tasks";

export const App = () => {
	const { taskGroup, createTask, undoTask, completeTask, deleteTask } =
		useTask();

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
