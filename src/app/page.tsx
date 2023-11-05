"use client";

import { ChatArea } from "@/components/ChatArea";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Sidebar } from "@/components/Sidebar";
import { SidebarChatButton } from "@/components/SidebarChatButton";
import { Chat } from "@/types/Chat";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

const Page = () => {
	const [sideBarOpened, setSideBarOpened] = useState(false);
	const [chatActive, setChatActive] = useState<Chat | undefined>();
	const [chatList, setChatList] = useState<Chat[]>([]);
	const [chatActiveId, setChatActiveId] = useState("");
	const [AILoading, setAILoading] = useState(false);

	const getAIResponse = () => {
		setTimeout(() => {
			let cloneChatList = [...chatList];
			let chatIndex = cloneChatList.findIndex(
				(item) => item.id === chatActiveId
			);
			if (chatIndex > -1) {
				cloneChatList[chatIndex].messages.push({
					id: uuidv4(),
					author: "ai",
					body: "Aqui está sua resposta .... blablabla......",
				});
			}
			setChatList(cloneChatList);
			setAILoading(false);
		}, 2000);
	};

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
			let cloneChatList = [...chatList];
			let chatIndex = cloneChatList.findIndex(
				(item) => item.id === chatActiveId
			);
			cloneChatList[chatIndex].messages.push({
				id: uuidv4(),
				author: "me",
				body: message,
			});
			setChatList(cloneChatList);
		}
		setAILoading(true);
	};

	const handleSelectChat = (id: string) => {
		if (AILoading) return;
		let item = chatList.find((item) => item.id === id);
		if (item) setChatActiveId(item.id);
		closeSidebar();
	};

	const handleDeleteChat = (id: string) => {
		if (AILoading) return;
		setChatList(chatList.filter((item) => item.id !== id));
		setChatActiveId("");
		closeSidebar();
	};

	const handleEditChat = (id: string, title: string) => {
		if (!title) return;
		setChatList(
			chatList.filter((item) => {
				if (item.id === id) {
					item.title = title;
				}
				return item;
			})
		);
	};

	useEffect(() => {
		setChatActive(chatList.find((item) => item.id === chatActiveId));
	}, [chatActiveId, chatList]);

	useEffect(() => {
		if (AILoading) getAIResponse();
	}, [AILoading]);

	return (
		<main className='flex min-h-screen bg-gpt-gray'>
			<Sidebar
				addNewChat={handleAddNewChat}
				onCloseSidebar={closeSidebar}
				openSideBar={sideBarOpened}
				onClear={handleClearChats}
			>
				{chatList.map((chat) => (
					<SidebarChatButton
						key={chat.id}
						chatItem={chat}
						activeChat={chat.id === chatActiveId}
						onClick={() => handleSelectChat(chat.id)}
						onDelete={() => handleDeleteChat(chat.id)}
						onEdit={handleEditChat}
					/>
				))}
			</Sidebar>
			<section className='flex flex-col w-full'>
				<Header
					openSidebarClick={openSidebar}
					title={chatActive ? chatActive.title : `Nova conversa`}
					newChatClick={handleAddNewChat}
				/>
				<ChatArea loading={AILoading} chat={chatActive} />
				<Footer disableChat={AILoading} onSendMessage={handleSendMessage} />
			</section>
		</main>
	);
};

export default Page;
