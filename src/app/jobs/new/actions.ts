<<<<<<< HEAD
'use server';

import prisma from '@/src/lib/prisma';
import { toSlug } from '@/src/lib/utils';
import { createJobSchema } from '@/src/lib/validation';
import { put } from '@vercel/blob';
import { nanoid } from 'nanoid';
import { redirect } from 'next/navigation';
import path from 'path';

export async function createJobPosting(formData: FormData) {
	const values = Object.fromEntries(formData.entries());

	const {
		title,
		type,
		companyName,
		companyLogo,
		locationType,
		location,
		applicationEmail,
		applicationUrl,
		description,
		salary,
	} = createJobSchema.parse(values);

	const slug = `${toSlug(title)}-${nanoid(10)}`;

	let companyLogoUrl: string | undefined = undefined;

	if (companyLogo) {
		const blob = await put(
			`company_logos/${slug}${path.extname(companyLogo.name)}`,
			companyLogo,
			{
				access: 'public',
				addRandomSuffix: false,
			}
		);

		companyLogoUrl = blob.url;
	}

	await prisma.job.create({
		data: {
			slug,
			title: title.trim(),
			type,
			companyName: companyName.trim(),
			companyLogoUrl,
			locationType,
			location,
			applicationEmail: applicationEmail?.trim(),
			applicationUrl: applicationUrl?.trim(),
			description: description?.trim(),
			salary: parseInt(salary),
		},
	});

	redirect('/job-submitted');
=======
"use server";

import { toSlug } from "@/src/lib/utils";
import { locationType } from "./../../../lib/job-type";
import { nanoid } from "nanoid";
import { put } from "@vercel/blob";
import prisma from "@/src/lib/prisma";
import { createJobSchema } from "@/src/lib/validation";
import { Underdog } from "next/font/google";
import path from "path";
import { redirect } from "next/navigation";

export async function createJobPosting(formData: FormData) {
  const values = Object.fromEntries(formData.entries());

  const {
    title,
    type,
    companyName,
    companyLogo,
    locationType,
    location,
    applicationEmail,
    applicationUrl,
    description,
    salary,
  } = createJobSchema.parse(values);

  const slug = `${toSlug(title)}-${nanoid(10)}`;

  let companyLogoUrl: string | undefined = undefined;

  if (companyLogo) {
    const blob = await put(
      `company_logos/${slug}${path.extname(companyLogo.name)}`,
      companyLogo,
      {
        access: "public",
        addRandomSuffix: false,
      },
    );

    companyLogoUrl = blob.url;
  }

  await prisma.job.create({
    data: {
      slug,
      title: title.trim(),
      type,
      companyName: companyName.trim(),
      companyLogoUrl,
      locationType,
      location,
      applicationEmail: applicationEmail?.trim(),
      applicationUrl: applicationUrl?.trim(),
      description: description?.trim(),
      salary: parseInt(salary),
    },
  });

  redirect(`/job-submitted`);
>>>>>>> 024fd08d9a198ca31feded75fb3b76f80ec9f37b
}
