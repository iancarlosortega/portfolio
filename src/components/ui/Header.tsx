import { PhoneHeader } from "@/components/ui/PhoneHeader";
import { DesktopHeader } from "@/components/ui/DesktopHeader";
import { cn } from "@/utils/classNames";

export const Header = () => {
	return (
		<header
			className={cn(
				"fixed w-full p-2 md:px-4 lg:px-16 md:py-4 z-40 bg-white/50",
				"dark:bg-zinc-900/30 backdrop-blur-md border-b border-zinc/30"
			)}>
			<PhoneHeader />
			<DesktopHeader />
		</header>
	);
};
