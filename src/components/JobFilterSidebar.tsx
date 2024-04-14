import { experienceType, educationType, jobTypes } from "@/src/lib/job-types";
import prisma from "@/src/lib/prisma";
import { JobFilterValues, jobFilterSchema } from "@/src/lib/validation";
import { redirect } from "next/navigation";
import FormSubmitButton from "./FormSubmitButton";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import Select from "./ui/select";
import { Button } from "./ui/button";

async function filterJobs(formData: FormData) {
  "use server";

  const values = Object.fromEntries(formData.entries());

  const {
    q,
    type,
    location,
    remote,
    minSalary,
    maxSalary,
    education,
    experience,
  } = jobFilterSchema.parse(values);

  const searchParams = new URLSearchParams({
    ...(q && { q: q.trim() }),
    ...(type && { type }),
    ...(location && { location }),
    ...(remote && { remote: "true" }),
    ...(education && { education }),
    ...(experience && { experience }),
    ...(minSalary && { minSalary }),
    ...(maxSalary && { maxSalary }),
  });

  redirect(`/?${searchParams.toString()}`);
}

interface JobFilterSidebarProps {
  defaultValues: JobFilterValues;
}

export default async function JobFilterSidebar({
  defaultValues,
}: JobFilterSidebarProps) {
  const distinctLocations = (await prisma.job
    .findMany({
      where: { approved: true },
      select: { location: true },
      distinct: ["location"],
    })
    .then((locations) =>
      locations.map(({ location }) => location).filter(Boolean),
    )) as string[];

  return (
    <aside className="sticky top-0 h-fit rounded-lg border bg-background p-4 md:w-[260px]">
      <form action={filterJobs} key={JSON.stringify(defaultValues)}>
        <div className="space-y-4">
          <div className="flex flex-col gap-2">
            <Label htmlFor="q">Поиск:</Label>
            <Input
              id="q"
              name="q"
              placeholder="Должность, компания и т.д."
              defaultValue={defaultValues.q}
            />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="type">Тип занятости:</Label>
            <Select
              id="type"
              name="type"
              defaultValue={defaultValues.type || ""}
            >
              <option value="">Все</option>
              {jobTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </Select>
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="experience">Опыт:</Label>
            <Select
              id="experience"
              name="experience"
              defaultValue={defaultValues.experience || ""}
            >
              <option value="">Все</option>
              {experienceType.map((exp) => (
                <option key={exp} value={exp}>
                  {exp}
                </option>
              ))}
            </Select>
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="education">Образование:</Label>
            <Select
              id="education"
              name="education"
              defaultValue={defaultValues.education || ""}
            >
              <option value="">Все</option>
              {educationType.map((edu) => (
                <option key={edu} value={edu}>
                  {edu}
                </option>
              ))}
            </Select>
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="location">Локация:</Label>
            <Select
              id="location"
              name="location"
              defaultValue={defaultValues.location || ""}
            >
              <option value="">Все</option>
              {distinctLocations.map((location) => (
                <option key={location} value={location}>
                  {location}
                </option>
              ))}
            </Select>
          </div>
          <div className="flex items-center gap-2">
            <input
              id="remote"
              name="remote"
              type="checkbox"
              className="scale-125 accent-black"
              defaultChecked={defaultValues.remote}
            />
            <Label htmlFor="remote">Удаленная работа</Label>
          </div>
          <FormSubmitButton className="w-full">Фильтровать</FormSubmitButton>
        </div>
      </form>
    </aside>
  );
}
