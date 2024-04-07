import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Select } from "./ui/select";

async function filterJobs(formData: FormData) {
  "use server";
}

export default function JobFilterSidebar() {
  return (
    <aside className="sticky top-0 h-fit rounded-lg border bg-background md:w-[260px]">
      <form action={filterJobs}>
        <div className="space-y-4">
          <div className="flex flex-col gap-2">
            <Label htmlFor="q">Search</Label>
            <Input name="q" placeholder="Позиция, компания, локация" />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="location">Location</Label>
            <Select name="location" />
          </div>
        </div>
      </form>
    </aside>
  );
}
