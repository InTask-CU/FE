import { Link } from "react-router-dom";
import Container from "../components/Container";
import PageContainer from "../components/PageContainer";
import SignUpForm from "../components/SignUpForm";

const SignUp = () => {
	return (
		<PageContainer>
			<Container className="grid lg:grid-cols-2 lg:gap-x-8 md:h-screen my-10 md:my-0">
				<div className="hidden lg:flex items-center">
					<img
						className="aspect-auto w-full"
						src="/assets/images/signup.png"
						alt=""
					/>
				</div>
				<section className="bg-white text-black text-center lg:text-left my-auto w-full">
					<h1 className="text-[36px] lg:text-[40px] xl:text-[54px] text-center font-semibold font-DMSans mb-3">
						Create Account
					</h1>
					<SignUpForm />
					<p className="text-sm md:text-base text-center font-inter">
						Already have an account?{" "}
						<Link
							to="/"
							className="font-semibold text-[#735355]"
						>
							Sign in
						</Link>
					</p>
				</section>
			</Container>
		</PageContainer>
	);
};

export default SignUp;
