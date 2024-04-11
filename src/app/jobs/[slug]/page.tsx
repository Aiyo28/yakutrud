<<<<<<< HEAD
import JobPage from '@/src/components/JobPage';
import { Button } from '@/src/components/ui/button';
import prisma from '@/src/lib/prisma';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { cache } from 'react';

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

	const { applicationEmail, applicationUrl } = job;

	const applicationLink = applicationEmail
		? `mailto:${applicationEmail}`
		: applicationUrl;

	if (!applicationLink) {
		console.error(
			'У вакансии нет ссылки на приложение или электронной почты.'
		);
		notFound();
	}

	return (
		<main className="m-auto my-10 flex max-w-5xl flex-col items-center gap-5 px-3 md:flex-row md:items-start">
			<JobPage job={job} />
			<aside>
				<Button asChild>
					<a href={applicationLink} className="w-40 md:w-fit">
						Применить сейчас
					</a>
				</Button>
			</aside>
		</main>
	);
=======
import { cache } from "react";
import prisma from "@/src/lib/prisma";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import JobPage from "@/src/components/JobPage";
import { Button } from "@/src/components/ui/button";
import JobNotFound from "@/src/app/job-notfound/JobNotFound";

interface PageProps {
  params: { slug: string };
}

const getJob = cache(async (slug: string) => {
  const job = prisma.job.findUnique({
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
  if (job === null) {
    notFound();
  }
  return {
    title: job.title,
  };
}

export default async function Page({ params: { slug } }: PageProps) {
  const job = await getJob(slug);

  let applicationLink = null;
  if (job) {
    applicationLink = job.applicationEmail
      ? `mailto:${job.applicationEmail}`
      : job.applicationUrl;
  }

  if (!applicationLink) {
    console.error("У вакансии нет ссылки или электронной почты.");
    notFound();
  }

  return (
    <main className="m-auto my-10 flex max-w-5xl flex-col items-center gap-5 px-3 md:flex-row md:items-start">
      {job ? <JobPage job={job} /> : <JobNotFound />}
      <aside>
        <Button asChild>
          <a href={applicationLink} className="w-40 md:w-fit">
            Подать заявку
          </a>
        </Button>
      </aside>
    </main>
  );
>>>>>>> 024fd08d9a198ca31feded75fb3b76f80ec9f37b
}
