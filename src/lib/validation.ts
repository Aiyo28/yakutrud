import { z } from "zod";
import { jobTypes, locationType } from "./job-type";

const requiredSting = z.string().min(3, "Необходимый");

const numericString = requiredSting.regex(/^\d+$/, "Только цифры");

const applicationSchema = z
  .object({
    applicationEmail: z.string().max(100).email().optional().or(z.literal("")),
    applicationUrl: z.string().max(100).url().optional().or(z.literal("")),
  })
  .refine((data) => data.applicationEmail || data.applicationUrl, {
    message: "Пожалуйста, введите email или URL для заявки",
    path: ["applicationEmail"],
  });

const locationSchema = z
  .object({
    locationType: requiredSting.refine(
      (value) => locationType.includes(value),
      "Неверный тип локации",
    ),
    location: z.string().max(100).optional(),
  })
  .refine(
    (data) =>
      !data.locationType || data.locationType === "Удаленно" || data.location,
    {
      message:
        "Пожалуйста, введите место для работы на месте или гибридной работы",
      path: ["location"],
    },
  );

const companyLogoSchema = z
  .custom<File | undefined>()
  .refine((file) => {
    !file || (file instanceof File && file.type.startsWith("image/"));
  }, "Неверный формат файла")
  .refine((file) => {
    return !file || file.size < 1024 * 1024 * 2; // 2MB
  });

export const createJobSchema = z
  .object({
    title: requiredSting.max(100),
    type: requiredSting.refine(
      (value) => jobTypes.includes(value),
      "Неверный тип",
    ),
    companyName: requiredSting.max(100),
    companyLogo: companyLogoSchema,
    description: z.string().max(5000).optional(),
    salary: numericString.max(9, "Не более 9 символов"),
    location: z.string().min(3).max(100),
    remote: z.boolean(),
  })
  .and(applicationSchema)
  .and(locationSchema);

export type CreateJobValues = z.infer<typeof createJobSchema>;

export const jobFilterSchema = z.object({
  q: z.string().optional(),
  type: z.string().optional(),
  location: z.string().optional(),
  remote: z.coerce.boolean().optional(), //turns string into a boolean
});

export type JobFilterValues = z.infer<typeof jobFilterSchema>;
