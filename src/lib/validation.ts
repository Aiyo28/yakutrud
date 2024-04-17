import { z } from "zod";
import {
  educationType,
  experienceType,
  jobTypes,
  locationTypes,
} from "./job-types";

const requiredString = z.string().min(1, "Необходимый");
const numericRequiredString = requiredString.regex(
  /^\d+$/,
  "Должен быть числом",
);

const companyLogoSchema = z
  .custom<File | undefined>()
  .refine(
    (file) => !file || (file instanceof File && file.type.startsWith("image/")),
    "Должен быть файл изображения",
  )
  .refine((file) => {
    return !file || file.size < 1024 * 1024 * 2;
  }, "Размер файла должен быть меньше 2 МБ.");

const applicationSchema = z
  .object({
    applicationEmail: z.string().max(100).email().optional().or(z.literal("")),
    applicationUrl: z.string().max(100).url().optional().or(z.literal("")),
    applicationPhone: z.string().max(12).optional(),
  })
  .refine(
    (data) =>
      data.applicationEmail || data.applicationUrl || data.applicationPhone,
    {
      message: "Требуется адрес электронной почты, URL-адрес или телефон",
      path: ["applicationEmail", "applicationPhone"],
    },
  );

const locationSchema = z
  .object({
    locationType: requiredString.refine(
      (value) => locationTypes.includes(value),
      "Неверный график работы",
    ),
    location: z.string().max(100).optional(),
  })
  .refine(
    (data) =>
      !data.locationType || data.locationType === "Удаленно" || data.location,
    {
      message: "Для работы на месте требуется местоположение",
      path: ["location"],
    },
  );

export const createJobSchema = z
  .object({
    title: requiredString.max(100),
    type: requiredString.refine(
      (value) => jobTypes.includes(value),
      "Неверный Тип занятости",
    ),
    companyName: requiredString.max(100),
    companyLogo: companyLogoSchema,
    description: z.string().max(5000).optional(),
    salary: numericRequiredString.max(9, "Номер не может быть длиннее 9 цифр."),
    education: requiredString.refine(
      (value) => educationType.includes(value),
      "Не верный тип образования",
    ),
    experience: requiredString.refine(
      (value) => experienceType.includes(value),
      "Не верный тип опыта",
    ),
  })
  .and(applicationSchema)
  .and(locationSchema);

export type CreateJobValues = z.infer<typeof createJobSchema>;

export const jobFilterSchema = z.object({
  q: z.string().optional(),
  type: z.string().optional(),
  location: z.string().optional(),
  experience: z.string().optional(),
  education: z.string().optional(),
  remote: z.coerce.boolean().optional(),
  minSalary: z.string().optional(),
  maxSalary: z.string().optional(),
});

export type JobFilterValues = z.infer<typeof jobFilterSchema>;
