"use client";

import { ChatArea } from "@/components/ChatArea";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Sidebar } from "@/components/Sidebar";
import { Chat } from "@/types/Chat";
import { useState } from "react";

const Page = () => {
	const [sideBarOpened, setSideBarOpened] = useState(false);
	const [chatActive, setChatActive] = useState<Chat | undefined>({
		id: "1",
		title: "Tell me a fun fact",
		messages: [
			{ id: "1", author: "me", body: "Hello chat can you tell me a fun fact?" },
			{
				id: "2",
				author: "ai",
				body: "Yeah of course, what would you like to know?",
			},
			{ id: "3", author: "me", body: "Idk, just tell me a funny joke" },
			{ id: "4", author: "ai", body: "Okay, do you know blablablabla!?" },
		],
	});
	const [AILoading, setAILoading] = useState(false);

	const openSidebar = () => setSideBarOpened(true);

	const closeSidebar = () => setSideBarOpened(false);

	const handleClearChats = () => {};

	const handleAddNewChat = () => {};

	const handleSendMessage = () => {};

	return (
		<main className='flex min-h-screen bg-gpt-gray'>
			<Sidebar
				addNewChat={handleAddNewChat}
				onCloseSidebar={closeSidebar}
				openSideBar={sideBarOpened}
				onClear={handleClearChats}
			>
				...
			</Sidebar>
			<section className='flex flex-col w-full'>
				<Header
					openSidebarClick={openSidebar}
					title={`Nova conversa`}
					newChatClick={handleAddNewChat}
				/>
				<ChatArea chat={chatActive} />
				<Footer disableChat={AILoading} onSendMessage={handleSendMessage} />
			</section>
		</main>
	);
};

export default Page;
