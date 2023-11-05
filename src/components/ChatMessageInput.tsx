import IconSend from "./icons/IconSend";
import { KeyboardEvent } from "react";

import { useState, useRef, useEffect } from "react";

type ChatMessageInputProps = {
	disabled: boolean;
	onSend: (message: string) => void;
};

export const ChatMessageInput = ({
	disabled,
	onSend,
}: ChatMessageInputProps) => {
	const [text, setText] = useState("");
	const textElement = useRef<HTMLTextAreaElement>(null);

	useEffect(() => {
		if (textElement.current) {
			textElement.current.style.height = "0px";
			let scrollHeight = textElement.current.scrollHeight;
			textElement.current.style.height = `${scrollHeight}px`;
		}
	}, [text, textElement]);

	const handleSendMessage = () => {
		if (!disabled && text.trim() !== "") {
			onSend(text);
			setText("");
		}
	};

	const handleTextKeyUp = (event: KeyboardEvent<HTMLTextAreaElement>) => {
		if (event.code.toLocaleLowerCase() === "enter" && !event.shiftKey) {
			event.preventDefault();
			handleSendMessage();
		}
	};

	return (
		<div
			className={`flex border border-gray-800/50 bg-gpt-light-gray p-2 rounded-xl ${
				disabled && "opacity-50"
			}`}
		>
			<textarea
				ref={textElement}
				className='flex-1 w-full border-0 bg-transparent resize-none outline-none h-6 max-h-48 overflow-y-auto'
				placeholder='Digite uma mensagem'
				value={text}
				onChange={({ target }) => setText(target.value)}
				disabled={disabled}
				onKeyUp={handleTextKeyUp}
			></textarea>
			<div
				onClick={handleSendMessage}
				className={`p-2 cursor-pointer rounded self-end ${
					text.length ? "opacity-100 bg-green-400" : "opacity-20"
				}`}
			>
				<IconSend width={18} height={18} />
			</div>
		</div>
	);
};
