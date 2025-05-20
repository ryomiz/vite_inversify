import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const schema = z.object({
	title: z.string().nonempty({ message: "This field is required" }),
	description: z.string().nonempty({ message: "This field is required" }),
});
export type CreateTaskFormInput = z.infer<typeof schema>;

export const useCreateTask = () => {
	const form = useForm<CreateTaskFormInput>({
		defaultValues: {
			title: "",
			description: "",
		},
		resolver: zodResolver(schema),
	});

	return form;
};
