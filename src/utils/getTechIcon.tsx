import { JSX } from "react";
import {
	ReactIcon,
	NextJsIcon,
	NodeJsIcon,
	TypeScriptIcon,
	TailwindIcon,
	MongoDBIcon,
	PostgresIcon,
	AngularIcon,
	FirebaseIcon,
	SupabaseIcon,
	NestJSIcon,
	JavaScriptIcon,
	ExpressIcon,
	HtmlIcon,
	CssIcon,
	ZustandIcon,
	MapboxIcon,
	DockerIcon,
} from "@/components/icons";

export const getTechIcon = (tech: string) => {
	const iconMap: Record<string, JSX.Element> = {
		React: <ReactIcon className="w-6 h-6 text-[#61DAFB]" />,
		"Next.Js": <NextJsIcon className="w-6 h-6 dark:text-white" />,
		"Node.js": <NodeJsIcon className="w-6 h-6 text-[#68A063]" />,
		TypeScript: <TypeScriptIcon className="w-6 h-6" />,
		TailwindCSS: <TailwindIcon className="w-6 h-6" />,
		MongoDB: <MongoDBIcon className="w-6 h-6" />,
		PostgreSQL: <PostgresIcon className="w-6 h-6" />,
		Postgresql: <PostgresIcon className="w-6 h-6" />,
		Angular: <AngularIcon className="w-6 h-6" />,
		Firebase: <FirebaseIcon className="w-6 h-6" />,
		Supabase: <SupabaseIcon className="w-6 h-6" />,
		NestJS: <NestJSIcon className="w-6 h-6" />,
		JavaScript: <JavaScriptIcon className="w-6 h-6" />,
		Express: <ExpressIcon className="w-6 h-6" />,
		HTML: <HtmlIcon className="w-6 h-6" />,
		CSS: <CssIcon className="w-6 h-6" />,
		Zustand: <ZustandIcon className="w-6 h-6" />,
		Mapbox: <MapboxIcon className="w-6 h-6" />,
		Docker: <DockerIcon className="w-6 h-6" />,
	};

	return (
		iconMap[tech] || (
			<div className="w-6 h-6 bg-gray-200 dark:bg-zinc-700 text-gray-600 dark:text-gray-200 text-xs flex items-center justify-center rounded-full">
				{tech.charAt(0)}
			</div>
		)
	);
};
