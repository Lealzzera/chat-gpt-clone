import { Chat } from "@/types/Chat";
import { ChatPlaceholder } from "./ChatPlaceholder";

type ChatAreaProps = {
	chat: Chat | undefined;
};

export const ChatArea = ({ chat }: ChatAreaProps) => {
	return (
		<section className='flex-auto h-0 overflow-y-scroll'>
			{!chat && <ChatPlaceholder />}
			{chat && chat.messages.map((item) => <div>messages</div>)}
		</section>
	);
};
