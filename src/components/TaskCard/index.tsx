import { Card } from "antd";
import Like from "../Like";
import { FC } from "react";

interface Props {
	id: number;
}

const TaskCard: FC<Props> = ({ id }) => {
	return (
		<Card
			className="shrink-0 relative"
			style={{ width: 280 }}
			cover={
				<img
					alt="example"
					src="/assets/images/task1.png"
				/>
			}
		>
			<Like
				id={id}
				classname="absolute top-0 z-10 right-0 p-3"
			/>
			<div className="font-DMSans">
				<span className="font-semibold">Web Design</span>
				<p className="text-sm">Create a simple Landing Page </p>
				<span className="text-lg font-bold">$10</span>
			</div>
		</Card>
	);
};

export default TaskCard;
