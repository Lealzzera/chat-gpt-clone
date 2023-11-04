import { ChatCard } from "./ChatCard";

export const ChatPlaceholder = () => {
	return (
		<div className='h-full flex flex-col justify-between'>
			<div className='flex items-center justify-center'>
				<p>Card 1</p>
				<p>Card 2</p>
			</div>
			<h3 className='text-3xl font-bold flex items-center justify-center text-center text-gray-500 h-screen'>
				ChatGPT
			</h3>
			<div className='flex justify-center items-center m-auto gap-2 w-full'>
				<div className='hidden md:block w-96'>
					<ChatCard title='Tell me a fun fact' body='about the Roman Empire' />
					<ChatCard title='Tell me a fun fact' body='about the Roman Empire' />
				</div>
				<div className='w-96 mx-5'>
					<ChatCard title='Tell me a fun fact' body='about the Roman Empire' />
					<ChatCard title='Tell me a fun fact' body='about the Roman Empire' />
				</div>
			</div>
		</div>
	);
};
