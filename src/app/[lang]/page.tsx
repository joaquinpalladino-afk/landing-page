import Features from "@/components/Features";
import Hero from "@/components/Hero";
import ProblemSolution from "@/components/ProblemSolution";
import { getDictionary } from "@/lib/i18n";
import { type Locale } from "@/lib/i18n/config";

export default async function Home({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dictionary = await getDictionary(lang);
  return (
    <main>
      <Hero dictionary={dictionary} />
      <ProblemSolution dictionary={dictionary} />
      <Features lang={lang} />
    </main>
  );
}
