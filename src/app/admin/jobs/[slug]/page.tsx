<<<<<<< HEAD
import JobPage from '@/src/components/JobPage';
import prisma from '@/src/lib/prisma';
import { notFound } from 'next/navigation';
import AdminSidebar from './AdminSidebar';

interface PageProps {
	params: { slug: string };
}

export default async function Page({ params: { slug } }: PageProps) {
	const job = await prisma.job.findUnique({
		where: { slug },
	});

	if (!job) notFound();

	return (
		<main className="m-auto my-10 flex max-w-5xl flex-col items-center gap-5 px-3 md:flex-row md:items-start">
			<JobPage job={job} />
			<AdminSidebar job={job} />
		</main>
	);
=======
import JobPage from "@/src/components/JobPage";
import prisma from "@/src/lib/prisma";
import { notFound } from "next/navigation";
import AdminSidebar from "./AdminSidebar";

interface PageProps {
  params: { slug: string };
}

export default async function Page({ params: { slug } }: PageProps) {
  const job = await prisma.job.findUnique({
    where: { slug },
  });

  if (!job) notFound();

  return (
    <main className="m-auto my-10 flex max-w-5xl flex-col items-center gap-5 px-3 md:flex-row md:items-start">
      <JobPage job={job} />
      <AdminSidebar job={job} />
    </main>
  );
>>>>>>> 024fd08d9a198ca31feded75fb3b76f80ec9f37b
}
