import { useMutation } from "@tanstack/react-query";
import { SignUpSchemaType } from "../components/SignUpForm";
import { axiosInstance } from "../services/apiClient";
import { Toast } from "../utils/toast";
import { LoginSchemaType } from "../components/LoginForm";
import { useNavigate } from "react-router-dom";

const SignUpUser = async (payload: SignUpSchemaType) => {
	return await axiosInstance.post("/register", {
		...payload,
		isAdmin: "false",
	});
};

const LoginUser = async (payload: LoginSchemaType) => {
	return await axiosInstance.post("login", payload);
};

export const useSignUpUser = () => {
	const navigate = useNavigate();
	return useMutation({
		mutationFn: SignUpUser,
		onSuccess: (res) => {
			Toast.success(res.data?.message);
			navigate("/");
		},
	});
};

export const useLoginUser = () => {
	const navigate = useNavigate();
	return useMutation({
		mutationFn: LoginUser,
		onSuccess: (res) => {
			Toast.success(res.data?.message);
			navigate("/dashboard");
		},
	});
};
