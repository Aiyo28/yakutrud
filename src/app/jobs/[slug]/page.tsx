import JobPage from "@/src/components/JobPage";
import { Button } from "@/src/components/ui/button";
import prisma from "@/src/lib/prisma";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { cache } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faLink } from "@fortawesome/fontawesome-free-solid";

interface PageProps {
  params: { slug: string };
}

const getJob = cache(async (slug: string) => {
  const job = await prisma.job.findUnique({
    where: { slug },
  });

  if (!job) notFound();

  return job;
});

export async function generateStaticParams() {
  const jobs = await prisma.job.findMany({
    where: { approved: true },
    select: { slug: true },
  });

  return jobs.map(({ slug }) => slug);
}

export async function generateMetadata({
  params: { slug },
}: PageProps): Promise<Metadata> {
  const job = await getJob(slug);

  return {
    title: job.title,
  };
}

export default async function Page({ params: { slug } }: PageProps) {
  const job = await getJob(slug);

  const { applicationEmail, applicationUrl, applicationPhone } = job;

  const email = applicationEmail?.replace(/\xA0/g, "").replace(/\s+/g, "");
  const applicationLink = applicationEmail ? `mailto:${email}` : applicationUrl;
  if (!applicationLink) {
    console.error("У вакансии нет ссылки на приложение или электронной почты.");
    notFound();
  }

  let phone = "";
  if (applicationPhone && applicationPhone.charAt(0) === "8") {
    phone = "+7" + applicationPhone.slice(1);
  }
  return (
    <main className="m-auto my-10 flex max-w-5xl flex-col items-center gap-5 px-3 md:flex-row md:items-start">
      <JobPage job={job} />
      <aside>
        <div>
          <Button asChild>
            <a
              href={applicationLink}
              className="w-40 hover:bg-blue-500  md:w-fit"
            >
              Откликнуться
            </a>
          </Button>
        </div>
        <div className="mt-1 md:flex md:flex-row lg:mt-3">
          {phone && (
            <div className="">
              <Button asChild title="Открыть whatsapp в новой вкладке">
                <a
                  href={`https://api.whatsapp.com/send?phone=${applicationPhone}`}
                  target="_blank"
                  className="w-40 bg-green-500 hover:bg-green-500 md:w-fit "
                >
                  <FontAwesomeIcon icon={faWhatsapp} className="h-8" />
                </a>
              </Button>
            </div>
          )}
          <div className={phone ? "lg:ml-3" : ""}>
            {applicationUrl && (
              <Button asChild title="Открыть ссылку в новой вкладке">
                <a
                  href={applicationUrl}
                  target="_blank"
                  className="w-40 hover:bg-slate-500 md:w-fit"
                >
                  <FontAwesomeIcon icon={faLink} className="h-6 font-light" />
                </a>
              </Button>
            )}
          </div>
        </div>
        <div className="mt-2">
          <span className="font-semibold">Контакты:</span>
          <div>{phone}</div>
          <div>{email}</div>
        </div>
      </aside>
    </main>
  );
}
