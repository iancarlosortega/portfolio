import Image from "next/image";
import { useTranslations } from "next-intl";
import { cn } from "@/utils/classNames";
import { Title } from "@/components/ui/Title";
import { DownloadIcon } from "@/components/icons";
import { BubbleEffect } from "@/components/ui/BouncingBubble";

export const About = () => {
	const translateContact = useTranslations("contact");
	const translateAbout = useTranslations("about");

	return (
		<div className="custom-clip-shadow">
			<div
				className={cn(
					"bg-gradient-to-b  md:bg-gradient-to-br from-teal-600  to-teal-800",
					"dark:bg-gradient-to-br dark:from-teal-800 dark:to-zinc-800 custom-clip"
				)}>
				<section
					id="about"
					className="max-w-6xl mx-auto px-4 md:px-12 lg:px-0 py-24 lg:pt-48 lg:pb-48">
					<Title text={translateAbout("title")} color="white" />
					<div className="flex flex-col md:flex-row gap-6 items-center justify-center pb-12 md:pb-24">
						<Image
							className="md:basis-1/2 w-[250px] md:max-w-[300px] lg:max-w-[350px] md:mx-auto aspect-square object-cover drop-shadow-md rounded-full"
							src="/images/profile-photo.webp"
							alt="Foto de Perfil"
							width={400}
							height={400}
						/>
						<div
							className={cn(
								"flex md:basis-1/2 flex-col gap-4 items-center text-center text-white",
								"lg:text-lg my-8 md:my-0 px-2 md:px-4"
							)}>
							<p>{translateAbout("description.firstParagraph")}</p>
							<p>{translateAbout("description.secondParagraph")}</p>
							<p className="mb-4">
								{translateAbout("description.thirdParagraph")}&#128054;
							</p>
							<a
								className="btn btn-secondary"
								href={translateContact("cv-link") ?? "#"}
								target="_blank"
								rel="noreferrer noopener">
								<span>
									{translateAbout("download")} <DownloadIcon />
								</span>
							</a>
						</div>
					</div>
				</section>
			</div>
		</div>
	);
};
