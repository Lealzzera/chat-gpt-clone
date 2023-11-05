import { Chat } from "@/types/Chat";
import { ChatPlaceholder } from "./ChatPlaceholder";
import { ChatMessageItem } from "./ChatMessageItem";
import { ChatMessageLoading } from "./ChatMessageLoading";

type ChatAreaProps = {
	chat: Chat | undefined;
	loading: boolean;
};

export const ChatArea = ({ chat, loading }: ChatAreaProps) => {
	return (
		<section className='flex-auto h-0'>
			{!chat && <ChatPlaceholder />}
			{chat &&
				chat.messages.map((item) => (
					<ChatMessageItem key={item.id} item={item} />
				))}
			{loading && <ChatMessageLoading />}
		</section>
	);
};
