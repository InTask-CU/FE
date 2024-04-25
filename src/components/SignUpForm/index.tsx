import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Form, Input, Select } from "antd";
import { useForm } from "react-hook-form";
import { FormItem } from "react-hook-form-antd";
import { z } from "zod";
import { useSignUpUser } from "../../hooks/useUser";

const SignUpSchema = z.object({
	username: z
		.string()
		.min(3, { message: "Minimum of 5 Characters" })
		.max(30, { message: "Maximum of 30 Characters" }),
	email: z.string().email(),
	role: z.enum(["client", "freelancer"]),
	password: z.string().min(5).max(20),
});

export type SignUpSchemaType = z.infer<typeof SignUpSchema>;

const SignUpForm = () => {
	const { control, handleSubmit } = useForm<SignUpSchemaType>({
		resolver: zodResolver(SignUpSchema),
	});

	const { mutate } = useSignUpUser();

	const onSubmit = (data: SignUpSchemaType) => {
		mutate(data);
	};
	return (
		<Form
			layout="vertical"
			onFinish={handleSubmit(onSubmit)}
		>
			<FormItem
				className="capitalize block font-semibold"
				control={control}
				name="username"
				label="Username"
			>
				<Input />
			</FormItem>
			<FormItem
				className="capitalize block font-semibold"
				control={control}
				name="email"
				label="email"
			>
				<Input />
			</FormItem>
			<FormItem
				className="capitalize block font-semibold"
				control={control}
				name="password"
				label="password"
			>
				<Input.Password />
			</FormItem>
			<FormItem
				className="capitalize block font-semibold"
				control={control}
				name="role"
				label="role"
			>
				<Select
					className=""
					style={{ width: 220 }}
					options={[
						{ value: "client", label: "Client" },
						{ value: "freelancer", label: "FreeLancer" },
					]}
				/>
			</FormItem>
			<Form.Item className="w-full mt-10">
				<Button
					type="primary"
					htmlType="submit"
					className="w-full font-DMSans text-lg font-semibold"
				>
					Submit
				</Button>
			</Form.Item>
		</Form>
	);
};

export default SignUpForm;
