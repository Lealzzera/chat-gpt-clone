import IconAdd from "./icons/IconAdd";
import IconBxMenuAltLeft from "./icons/IconBxMenuAltLeft";

type HeaderProps = {
	openSidebarClick: () => void;
	title: string;
	newChatClick: () => void;
};

export const Header = ({
	openSidebarClick,
	title,
	newChatClick,
}: HeaderProps) => {
	return (
		<>
			<header className='flex justify-between items-center w-full border-b border-b-zinc-500 p-2 md:hidden bg-zinc-800'>
				<div onClick={openSidebarClick} className=''>
					<IconBxMenuAltLeft width={24} height={24} />
				</div>
				<div className='mx-2 truncate'>{title}</div>
				<div onClick={newChatClick}>
					<IconAdd width={24} height={24} />
				</div>
			</header>
			{/* <div>...</div> */}
		</>
	);
};
