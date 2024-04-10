import JobFilterSidebar from "../components/JobFilterSidebar";
import H1 from "../components/ui/h1";
import JobResults from "../components/JobResults";
import { JobFilterValues } from "../lib/validation";
import { Metadata } from "next";

interface PageProps {
  searchParams: {
    q?: string;
    type?: string;
    location?: string;
    remote?: string;
  };
}

function capitalizeFirstLetter(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function getTitle({ q, type, location, remote }: JobFilterValues) {
  const titlePrefix = q
    ? `"${capitalizeFirstLetter(q)}" вакансии`
    : type
      ? `"${type}" вакансии`
      : remote
        ? "Удаленные вакансии"
        : "Все вакансии";

  const titleSuffic = location ? ` в ${location}` : "";

  return `${titlePrefix}${titleSuffic}`;
}

export function generateMetadata({
  searchParams: { q, type, location, remote },
}: PageProps): Metadata {
  return {
    title: `${getTitle({ q, type, location, remote: remote === "true" })} | ЯкуТруд`,
  };
}

export default async function Home({
  searchParams: { q, type, location, remote },
}: PageProps) {
  const filterValues: JobFilterValues = {
    q,
    type,
    location,
    remote: remote === "true",
  };

  return (
    <main className="m-auto my-10 max-w-5xl space-y-10 px-3">
      <div className="space-y-5 text-center">
        <H1>{getTitle(filterValues)}</H1>
        <p className="text-muted-foreground">Найдите работу своей мечты!</p>
      </div>
      <section className="flex flex-col gap-4 md:flex-row ">
        <JobFilterSidebar defaultValues={filterValues} />
        <JobResults filterValues={filterValues} />
      </section>
    </main>
  );
}
