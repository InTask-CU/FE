import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Form, Input } from "antd";
import { useForm } from "react-hook-form";
import { FormItem } from "react-hook-form-antd";
import { z } from "zod";
import { useLoginUser } from "../../hooks/useUser";

const LoginSchema = z.object({
	email: z.string().email(),
	password: z.string().min(8).max(20),
});

export type LoginSchemaType = z.infer<typeof LoginSchema>;

const LoginForm = () => {
	const { control, handleSubmit } = useForm<LoginSchemaType>({
		resolver: zodResolver(LoginSchema),
	});

	const { mutate } = useLoginUser();

	const onSubmit = (data: LoginSchemaType) => {
		mutate(data);
	};

	return (
		<Form
			layout="vertical"
			onFinish={handleSubmit(onSubmit)}
			className="w-full"
			size="large"
		>
			<FormItem
				className="capitalize block font-semibold mb-4"
				control={control}
				name="email"
				label="email"
			>
				<Input
					placeholder="Enter your Email"
					className="font-normal !font-DMSans"
				/>
			</FormItem>
			<FormItem
				className="capitalize block font-DMSans font-semibold mb-4"
				control={control}
				name="password"
				label="password"
			>
				<Input.Password
					placeholder="Enter a Strong Password"
					className="!font-DMSans font-normal"
				/>
			</FormItem>
			<Form.Item className="w-full mt-10">
				<Button
					type="primary"
					htmlType="submit"
					className="w-full text-xl font-DMSans font-semibold"
				>
					Login
				</Button>
			</Form.Item>
		</Form>
	);
};

export default LoginForm;
