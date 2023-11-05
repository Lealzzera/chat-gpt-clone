"use client";

import { ChatArea } from "@/components/ChatArea";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Sidebar } from "@/components/Sidebar";
import { Chat } from "@/types/Chat";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

const Page = () => {
	const [sideBarOpened, setSideBarOpened] = useState(false);
	const [chatActive, setChatActive] = useState<Chat | undefined>();
	const [chatList, setChatList] = useState<Chat[]>([]);
	const [chatActiveId, setChatActiveId] = useState("");
	const [AILoading, setAILoading] = useState(false);

	useEffect(() => {
		setChatActive(chatList.find((item) => item.id === chatActiveId));
	}, [chatActiveId, chatList]);

	const openSidebar = () => setSideBarOpened(true);

	const closeSidebar = () => setSideBarOpened(false);

	const handleClearChats = () => {
		if (AILoading) return;
		setChatActiveId("");
		setChatList([]);
	};

	const handleAddNewChat = () => {
		if (AILoading) return;
		setChatActiveId("");
		closeSidebar();
	};

	const handleSendMessage = (message: string) => {
		if (!chatActiveId) {
			let newChatId = uuidv4();
			setChatList([
				{
					id: newChatId,
					title: message,
					messages: [{ id: uuidv4(), author: "me", body: message }],
				},
				...chatList,
			]);
			setChatActiveId(newChatId);
		} else {
			let chatListClone = [...chatList];
			let chatIndex = chatListClone.findIndex(
				(item) => item.id === chatActiveId
			);
			chatListClone[chatIndex].messages.push({
				id: uuidv4(),
				author: "me",
				body: message,
			});
			setChatList(chatListClone);
		}
		setAILoading(true);
	};

	return (
		<main className='flex min-h-screen bg-gpt-gray'>
			<Sidebar
				addNewChat={handleAddNewChat}
				onCloseSidebar={closeSidebar}
				openSideBar={sideBarOpened}
				onClear={handleClearChats}
			>
				{chatList.map((chat) => (
					<div key={chat.id}>{chat.title}</div>
				))}
			</Sidebar>
			<section className='flex flex-col w-full'>
				<Header
					openSidebarClick={openSidebar}
					title={`Nova conversa`}
					newChatClick={handleAddNewChat}
				/>
				<ChatArea loading={AILoading} chat={chatActive} />
				<Footer disableChat={AILoading} onSendMessage={handleSendMessage} />
			</section>
		</main>
	);
};

export default Page;
