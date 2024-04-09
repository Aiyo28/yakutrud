import JobListItem from "./JobListItem";
import prisma from "../lib/prisma";
import { JobFilterValues } from "../lib/validation";
import { Prisma } from "@prisma/client";

interface JobResultsProps {
  filterValues: JobFilterValues;
}

export default async function JobResults({
  filterValues: { q, type, location, remote },
}: JobResultsProps) {
  const rearchString = q
    ?.split(" ")
    .filter((word) => word.length > 0)
    .join(" & ");

  const searchFilter: Prisma.JobWhereInput = rearchString
    ? {
        OR: [
          { title: { contains: rearchString } },
          { companyName: { contains: rearchString } },
          { type: { contains: rearchString } },
          { location: { contains: rearchString } },
          { locationType: { contains: rearchString } },
        ],
      }
    : {};

  const where: Prisma.JobWhereInput = {
    AND: [
      searchFilter,
      type ? { type } : {},
      location ? { location } : {},
      remote ? { locationType: "remote" } : {},
      { approved: true },
    ],
  };

  const jobs = await prisma.job.findMany({
    where,
    orderBy: { createdAt: "desc" },
  });

  return (
    <div className="grow space-y-4">
      {jobs.map((job) => (
        <JobListItem key={job.id} job={job} />
      ))}
      {jobs.length === 0 && (
        <p className="m-auto text-center ">
          Не найдено вакансий, соответствующих вашим критериям
        </p>
      )}
    </div>
  );
}
