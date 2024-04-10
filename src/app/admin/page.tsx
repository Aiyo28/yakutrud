import JobListItem from "@/src/components/JobListItem";
import H1 from "@/src/components/ui/h1";
import prisma from "@/src/lib/prisma";
import Link from "next/link";

export default async function AdminPage() {
  const unapprovedJobs = await prisma.job.findMany({
    where: { approved: false },
  });

  return (
    <main className="m-auto my-10 flex max-w-5xl flex-col items-center gap-5 px-3 md:flex-row md:items-start">
      <H1 className="text-3xl font-bold">
        Навигационная панель администратора
      </H1>
      <section className="flex flex-col gap-3">
        <h2 className="text-lg font-bold">Неутвержденные вакансии</h2>
        {unapprovedJobs.map((job) => (
          <Link href={`/admin/jobs/${job.slug}`} key={job.id} className="block">
            <JobListItem job={job} />
          </Link>
        ))}
        {unapprovedJobs.length === 0 && (
          <p className="text-muted-foreground">Нет неутвержденных вакансий</p>
        )}
      </section>
    </main>
  );
}
