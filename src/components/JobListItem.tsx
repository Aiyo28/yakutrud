import { Job } from "@prisma/client";
import Image from "next/image";
import { formatCurrency, relativeDate } from "../lib/utils";
import companyLogoPlaceholder from "../assets/SnowflakeLogo.png";
import { Banknote, Briefcase, Clock, Globe2, MapPin } from "lucide-react";
import Badge from "./Badge";

interface JobListItemProps {
  job: Job;
}

export default function JobListItem({
  job: {
    title,
    description,
    companyName,
    type,
    locationType,
    location,
    salary,
    companyLogoUrl,
    createdAt,
  },
}: JobListItemProps) {
  return (
    <article className="flex gap-3 rounded-lg border p-5 hover:bg-muted/60">
      <Image
        src={companyLogoUrl || companyLogoPlaceholder}
        alt={`${companyName} logo`}
        width={100}
        height={100}
        className="self-center rounded-lg"
      />
      <div className="flex-grow space-y-3">
        <div>
          <h2 className="text-xl font-medium">{title}</h2>
          <p className="text-muted-foreground">{companyName}</p>
        </div>
        <div className="text-muted-foreground">
          <p className="item-center flex gap-1.5 sm:hidden">
            <Briefcase size={16} className="shrink-0" />
            {type}
          </p>
        </div>
        <div className="text-muted-foreground">
          <p className="item-center flex gap-1.5 ">
            <MapPin size={16} className="shrink-0" />
            {locationType}
          </p>
        </div>
        <div className="text-muted-foreground">
          <p className="item-center flex gap-1.5 ">
            <Globe2 size={16} className="shrink-0" />
            {location || "Удаленно"}
          </p>
        </div>
        <div className="text-muted-foreground">
          <p className="item-center flex gap-1.5 ">
            <Banknote size={16} className="shrink-0" />
            {formatCurrency(salary) || "По Договоренности"}
          </p>
        </div>
        <div className="text-muted-foreground">
          <p className="item-center flex gap-1.5 sm:hidden">
            <Clock size={16} className="shrink-0" />
            {relativeDate(createdAt)}
          </p>
        </div>
      </div>
      <div className="hidden shrink-0 flex-col items-end justify-between sm:flex">
        <Badge>{type}</Badge>
        <span className="item-center flex gap-1.5 text-muted-foreground">
          <Clock size={16} />
          {relativeDate(createdAt)}
        </span>
      </div>
    </article>
  );
}
