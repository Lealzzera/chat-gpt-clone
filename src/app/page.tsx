"use client";

import { ChatArea } from "@/components/ChatArea";
import { Header } from "@/components/Header";
import { Sidebar } from "@/components/Sidebar";
import { Chat } from "@/types/Chat";
import { useState } from "react";

const Page = () => {
	const [sideBarOpened, setSideBarOpened] = useState(false);
	const [chatActive, setChatActive] = useState<Chat | undefined>(undefined);

	const openSidebar = () => setSideBarOpened(true);

	const closeSidebar = () => setSideBarOpened(false);

	const handleClearChats = () => {};

	const handleAddNewChat = () => {};
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
			</section>
		</main>
	);
};

export default Page;
