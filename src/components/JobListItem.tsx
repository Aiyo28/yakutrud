<<<<<<< HEAD
import companyLogoPlaceholder from '@/src/assets/Snowflake.jpg';
import { formatMoney, relativeDate } from '@/src/lib/utils';
import { Job } from '@prisma/client';
import { Banknote, Briefcase, Clock, Globe2, MapPin } from 'lucide-react';
import Image from 'next/image';
import Badge from './Badge';

interface JobListItemProps {
	job: Job;
}

export default function JobListItem({
	job: {
		title,
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
					<p className="flex items-center gap-1.5 sm:hidden">
						<Briefcase size={16} className="shrink-0" />
						{type}
					</p>
					<p className="flex items-center gap-1.5">
						<MapPin size={16} className="shrink-0" />
						{locationType}
					</p>
					<p className="flex items-center gap-1.5">
						<Globe2 size={16} className="shrink-0" />
						{location || 'Worldwide'}
					</p>
					<p className="flex items-center gap-1.5">
						<Banknote size={16} className="shrink-0" />
						{formatMoney(salary)}
					</p>
					<p className="flex items-center gap-1.5 sm:hidden">
						<Clock size={16} className="shrink-0" />
						{relativeDate(createdAt)}
					</p>
				</div>
			</div>
			<div className="hidden shrink-0 flex-col items-end justify-between sm:flex">
				<Badge>{type}</Badge>
				<span className="flex items-center gap-1.5 text-muted-foreground">
					<Clock size={16} />
					{relativeDate(createdAt)}
				</span>
			</div>
		</article>
	);
=======
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
>>>>>>> 024fd08d9a198ca31feded75fb3b76f80ec9f37b
}
