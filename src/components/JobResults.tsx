import prisma from "@/src/lib/prisma";
import { cn } from "@/src/lib/utils";
import { JobFilterValues } from "@/src/lib/validation";
import { Prisma } from "@prisma/client";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";
import JobListItem from "./JobListItem";

interface JobResultsProps {
  filterValues: JobFilterValues;
  page?: number;
}

export default async function JobResults({
  filterValues,
  page = 1,
}: JobResultsProps) {
  const {
    q,
    type,
    location,
    remote,
    minSalary,
    maxSalary,
    education,
    experience,
  } = filterValues;

  const jobsPerPage = 20;
  const skip = (page - 1) * jobsPerPage;

  const searchString = q
    ?.split(" ")
    .filter((word) => word.length > 0)
    .map((word) => word.toLowerCase())
    .join(" & ");

  const searchFilter: Prisma.JobWhereInput = searchString
    ? {
        OR: [
          { title: { search: searchString } },
          { companyName: { search: searchString } },
          { type: { search: searchString } },
          { description: { search: searchString } },
          { education: { search: searchString } },
          { experience: { search: searchString } },
          { locationType: { search: searchString } },
          { location: { search: searchString } },
        ],
      }
    : {};

  const where: Prisma.JobWhereInput = {
    AND: [
      searchFilter,
      type ? { type } : {},
      location ? { location } : {},
      remote ? { locationType: "Remote" } : {},
      education ? { education: education } : {},
      experience ? { experience: experience } : {},
      minSalary ? { salary: { gte: parseInt(minSalary) } } : {},
      maxSalary ? { salary: { lte: parseInt(maxSalary) } } : {},
      { approved: true },
    ],
  };

  const jobsPromise = prisma.job.findMany({
    where,
    orderBy: { createdAt: "desc" },
    take: jobsPerPage,
    skip,
  });

  const countPromise = prisma.job.count({ where });

  const [jobs, totalResults] = await Promise.all([jobsPromise, countPromise]);

  return (
    <div className="grow space-y-4">
      {jobs
        .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())
        .map((job) => (
          <Link key={job.id} href={`/jobs/${job.slug}`} className="block">
            <JobListItem job={job} />
          </Link>
        ))}
      {jobs.length === 0 && (
        <p className="m-auto text-center">
          Вакансий не найдено. Попробуйте настроить фильтры поиска.
        </p>
      )}
      {jobs.length > 0 && (
        <Pagination
          currentPage={page}
          totalPages={Math.ceil(totalResults / jobsPerPage)}
          filterValues={filterValues}
        />
      )}
    </div>
  );
}

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  filterValues: JobFilterValues;
}

function Pagination({
  currentPage,
  totalPages,
  filterValues: {
    q,
    type,
    location,
    remote,
    experience,
    education,
    maxSalary,
    minSalary,
  },
}: PaginationProps) {
  function generatePageLink(page: number) {
    const searchParams = new URLSearchParams({
      ...(q && { q }),
      ...(type && { type }),
      ...(location && { location }),
      ...(remote && { remote: "true" }),
      ...(experience && { experience }),
      ...(education && { education }),
      ...(minSalary && { minSalary }),
      ...(maxSalary && { maxSalary }),
      page: page.toString(),
    });

    return `/?${searchParams.toString()}`;
  }

  return (
    <div className="flex justify-between">
      <Link
        href={generatePageLink(currentPage - 1)}
        className={cn(
          "flex items-center gap-2 font-semibold",
          currentPage <= 1 && "invisible",
        )}
      >
        <ArrowLeft size={16} />
      </Link>
      <span className="font-semibold">
        Page {currentPage} of {totalPages}
      </span>
      <Link
        href={generatePageLink(currentPage + 1)}
        className={cn(
          "flex items-center gap-2 font-semibold",
          currentPage >= totalPages && "invisible",
        )}
      >
        <ArrowRight size={16} />
      </Link>
    </div>
  );
}
