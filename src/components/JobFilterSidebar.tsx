import { jobTypes } from "../lib/job-type";
import { JobFilterValues, jobFilterSchema } from "../lib/validation";
import { Button } from "./ui/button";
import FormSubmitButton from "./FormSubmitButton";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import Select from "./ui/select";
import { redirect } from "next/navigation"; // Add this import

async function filterJobs(formData: FormData) {
  "use server";
  //   throw new Error("Not implemented");

  const values = Object.fromEntries(formData.entries());

  const { q, type, location, remote } = jobFilterSchema.parse(values);

  const searchParams = new URLSearchParams({
    ...(q && { q: q.trim() }),
    ...(type && { type }),
    ...(location && { location }),
    ...(remote && { remote: "true" }),
  });

  redirect(`/?${searchParams.toString()}`);
}

interface JobFilterSidebarProps {
  defaultValues?: JobFilterValues;
}

export default async function JobFilterSidebar({
  defaultValues,
}: JobFilterSidebarProps) {
  const distinctLocations = (await prisma?.job
    .findMany({
      where: { approved: true },
      select: { location: true },
      distinct: ["location"],
    })
    .then((location) =>
      location.map(({ location }) => location).filter(Boolean),
    )) as string[];

  return (
    <aside className="sticky top-0 h-fit rounded-lg border bg-background p-4 md:w-[260px]">
      <form action={filterJobs} key={JSON.stringify(defaultValues)}>
        <div className="space-y-4">
          <div className="flex flex-col gap-2">
            <Label htmlFor="q">Поиск</Label>
            <Input
              name="q"
              placeholder="Позиция, компания, локация"
              defaultValue={defaultValues ? defaultValues.q : ""}
            />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="type">Тип</Label>
            <Select
              name="type"
              defaultValue={defaultValues ? defaultValues.type : ""}
            >
              <option value="">Все типы</option>
              {jobTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </Select>
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="location">Локация</Label>
            <Select
              name="location"
              defaultValue={defaultValues ? defaultValues.location : ""}
            >
              <option value="">Все локации</option>
              {distinctLocations.map((location) => (
                <option key={location} value={location}>
                  {location}
                </option>
              ))}
            </Select>
          </div>
          <div className="item-center flex gap-2">
            <input
              id="remote"
              name="remote"
              type="checkbox"
              className="scale-125 accent-black"
              defaultChecked={defaultValues ? defaultValues.remote : false}
            />
            <Label htmlFor="remote">Удаленная работа</Label>
          </div>
          <FormSubmitButton className="w-full">Применить</FormSubmitButton>
        </div>
      </form>
    </aside>
  );
}
