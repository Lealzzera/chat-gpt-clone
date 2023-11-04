import { ReactNode, useRef } from "react";
import IconClose from "./icons/IconClose";
import IconAdd from "./icons/IconAdd";
import { SidebarButton } from "./SidebarButton";
import IconTrash from "./icons/IconTrash";

type SideBarProps = {
	openSideBar: boolean;
	onCloseSidebar: () => void;
	children?: ReactNode;
	onClear: () => void;
	addNewChat: () => void;
};

export const Sidebar = ({
	openSideBar,
	onCloseSidebar,
	children,
	onClear,
	addNewChat,
}: SideBarProps) => {
	const outSidebar = useRef<HTMLDivElement>(null);

	const handleClickOutside = ({ target }: any) => {
		if (!outSidebar.current) return;
		if (target === outSidebar.current.children[0]) {
			onCloseSidebar();
		}
	};

	return (
		<section
			onClick={handleClickOutside}
			className={`fixed left-0 top-0 bottom-0 text-white
			${openSideBar ? "w-screen bg-gray-600/75" : "w-0"} md:w-64 md:static`}
			ref={outSidebar}
		>
			<div
				className={`transition-all duration-200 flex h-screen ${
					openSideBar ? "ml-0" : "-ml-96"
				} md:ml-0`}
			>
				<div className='flex flex-col w-64 p-2 bg-zinc-800'>
					<div
						onClick={addNewChat}
						className='flex items-center p-3 rounded-md cursor-pointer text-sm border border-white/20 hover:bg-zinc-500/20'
					>
						<IconAdd width={16} height={16} className='mr-3' />
						Nova conversa
					</div>
					<nav className='flex-1 pt-2 overflow-y-auto'>{children}</nav>
					<div className='border-t border-zinc-500 pt-2'>
						<SidebarButton
							icon={<IconTrash width={16} height={16} />}
							label='Limpar todas as conversas'
							onClick={onClear}
						/>
					</div>
				</div>
				<div
					onClick={onCloseSidebar}
					className='cursor-pointer flex justify-center items-center w-10 h-10 md:hidden'
				>
					<IconClose width={24} height={24} />
				</div>
			</div>
		</section>
	);
};
