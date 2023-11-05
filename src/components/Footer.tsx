import { ChatMessageInput } from "./ChatMessageInput";

type FooterProps = {
	disableChat: boolean;
	onSendMessage: (message: string) => void;
};

export const Footer = ({ onSendMessage, disableChat }: FooterProps) => {
	return (
		<footer className='w-full border-t border-t-gray-600 p-2'>
			<div className='max-w-4xl m-auto'>
				<ChatMessageInput disabled={disableChat} onSend={onSendMessage} />
				<div className='pt-3 text-center text-xs text-gray-300'>
					Feito por Matheus Leal
				</div>
			</div>
		</footer>
	);
};
