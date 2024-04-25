import { Link } from "react-router-dom";
import Container from "../components/Container";
import LoginForm from "../components/LoginForm";
import PageContainer from "../components/PageContainer";

const Login = () => {
	return (
		<PageContainer>
			<Container className="grid lg:grid-cols-2 lg:gap-x-8 h-screen my-auto">
				<div className="hidden lg:flex items-center">
					<img
						className="aspect-auto w-[90%]"
						src="/assets/images/login.png"
						alt=""
					/>
				</div>
				<section className="bg-white text-black text-center lg:text-left my-auto w-full">
					<h1 className="text-[36px] lg:text-[40px] xl:text-[54px] text-center font-semibold font-DMSans mb-3">
						Login to your Account
					</h1>
					<LoginForm />
					<p className="text-sm md:text-base text-center font-inter">
						Don’t have an account?{" "}
						<Link
							to="/sign-up"
							className="font-semibold text-[#735355]"
						>
							Sign up
						</Link>
					</p>
				</section>
			</Container>
		</PageContainer>
	);
};

export default Login;
