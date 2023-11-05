import { useState } from "react";

type ChatCardProps = {
	title: string;
	body: string;
	onCardClick: () => void;
};

export const ChatCard = ({ title, body, onCardClick }: ChatCardProps) => {
	const [titleCard, setTitleCard] = useState(title);
	const [bodyCard, setBodyCard] = useState(body);

	return (
		<div
			onClick={onCardClick}
			className='cursor-pointer w-full bg-gpt-gray border border-zinc-500 rounded-xl text-center text-sm min-w-fit text-white mb-3 p-3'
		>
			<h3 className='text-gray-300 font-bold text-sm text-start'>{title}</h3>
			<p className='text-xs text-start text-gray-500 font-semibold'>{body}</p>
		</div>
	);
};
