import { useTranslations } from "next-intl";
import { ComputerIcon, PersonIcon } from "@/components/icons";
import { cn } from "@/utils/classNames";

export const Main = () => {
	const t = useTranslations("home");
	return (
		<main className="min-h-dvh h-full flex flex-col overflow-hidden">
			<section
				id="main"
				className="flex-1 flex flex-col items-center justify-center p-8">
				<div className="drop-shadow-lg shadow-black dark:shadow-white md:mt-16">
					<h1
						className={cn(
							"uppercase text-3xl md:text-4xl text-secondary dark:text-gray-100 font-bold tracking-wide text-center",
							"drop-shadow-[0_0_0.3rem_#00000070] dark:drop-shadow-[0_0_0.3rem_#ffffff70] animate-left-right"
						)}>
						{t("title")} <span className="text-primary">Ian Carlos</span>{" "}
						&#128516; <br />
						{t("subtitle")}
					</h1>
				</div>

				<div className="flex flex-col gap-4 md:flex-row md:flex-wrap justify-center mt-8 md:mt-32 animate-left-right relative">
					<a href="#experience" className="btn">
						<span>{t("menuItem1")}</span>
						<ComputerIcon className="absolute hidden md:block w-32 bottom-10 left-auto md:left-5 xl:left-auto z-20 drop-shadow-lg text-[#F2F2F2] dark:text-neutral-800" />
					</a>
					<a href="#projects" className="btn">
						<span>{t("menuItem2")}</span>
					</a>
					<a href="#about" className="btn">
						<span>{t("menuItem3")}</span>
					</a>
					<a href="#contact" className="btn">
						<span>{t("menuItem4")}</span>
						<PersonIcon className="absolute hidden md:block w-32 right-[-70px] -bottom-72 z-20 drop-shadow-lg" />
					</a>
				</div>
			</section>
		</main>
	);
};
