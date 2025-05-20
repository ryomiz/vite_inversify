import { Button } from "@/components/ui/button.tsx";
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
} from "@/components/ui/card.tsx";
import type { IActiveTask, ICompletedTask } from "../types/task.ts";

type ActiveTaskProps = IActiveTask & {
	onClickDone: () => void;
	onClickUndo?: never;
	onClickDelete: () => void;
};
type CompletedTaskProps = ICompletedTask & {
	onClickDone?: never;
	onClickUndo: () => void;
	onClickDelete?: never;
};

type Props = ActiveTaskProps | CompletedTaskProps;
export const Task = (props: Props) => {
	return (
		<Card>
			<CardHeader>{props.title}</CardHeader>
			<CardContent>{props.description}</CardContent>
			<CardFooter className={"flex justify-between"}>
				{props.status === "active" && (
					<Button variant={"outline"} onClick={props.onClickDelete}>
						Delete
					</Button>
				)}
				{props.status === "active" ? (
					<Button onClick={props.onClickDone}>Done</Button>
				) : (
					<Button onClick={props.onClickUndo}>Undo</Button>
				)}
			</CardFooter>
		</Card>
	);
};
