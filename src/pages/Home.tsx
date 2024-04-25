import Container from "../components/Container";
import NavBar from "../components/NavBar";
import TaskCard from "../components/TaskCard";

const tasks = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const Home = () => {
	return (
		<>
			<NavBar />
			<Container className="!px-0 !my-24">
				<section className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-x-2 gap-y-6 lg:px-5 justify-items-center">
					{tasks.map((item, i) => (
						<TaskCard
							id={item}
							key={i}
						/>
					))}
				</section>
			</Container>
		</>
	);
};

export default Home;
