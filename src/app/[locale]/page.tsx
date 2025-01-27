import { Main } from "@/app/[locale]/sections/Main";
import { Experience } from "@/app/[locale]/sections/Experience";
import { Projects } from "@/app/[locale]/sections/Projects";
import { About } from "@/app/[locale]/sections/About";
import { Skills } from "@/app/[locale]/sections/Skills";
import { Contact } from "@/app/[locale]/sections/Contact";

export default function HomePage() {
	return (
		<>
			<Main />
			<Experience />
			<Projects />
			<About />
			<Skills />
			<Contact />
		</>
	);
}
