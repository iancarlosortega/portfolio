import { cn } from "@/utils/classNames";

interface Props {
	text: string;
	color: string;
}

export const Title = ({ text, color }: Props) => {
	return (
		<div className="flex flex-col items-center gap-2 mb-16 drop-shadow-[0_0_0.3rem_#00000070] dark:drop-shadow-[0_0_0.3rem_#ffffff70]">
			<h2
				className={cn(
					"text-4xl dark:text-gray-100 text-center font-bold uppercase",
					{
						"text-white": color === "white",
						"text-secondary": color === "secondary",
					}
				)}>
				{text}
			</h2>
			<div
				className={cn("w-20 h-[3px] dark:bg-gray-100", {
					"bg-white": color === "white",
					"bg-secondary": color === "secondary",
				})}
			/>
		</div>
	);
};
