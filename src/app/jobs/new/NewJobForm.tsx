"use client";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/src/components/ui/form";
import H1 from "@/src/components/ui/h1";
import { CreateJobValues, createJobSchema } from "@/src/lib/validation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/src/components/ui/input";
import Select from "@/src/components/ui/select";
import { jobTypes, locationType } from "@/src/lib/job-type";
import LocationInput from "@/src/components/LocationInput";
import { X } from "lucide-react";
import { Label } from "@/src/components/ui/label";
import RichTextEditor from "@/src/components/RichTextEditor";
import { draftToMarkdown } from "markdown-draft-js";
import LoadingButton from "@/src/components/LoadingButton";
import { createJobPosting } from "./actions";

export default function NewJobForm() {
  const form = useForm<CreateJobValues>({
    resolver: zodResolver(createJobSchema),
  });

  const {
    handleSubmit,
    watch,
    trigger,
    control,
    setValue,
    setFocus,
    formState: { isSubmitting },
  } = form;

  async function onSubmit(values: CreateJobValues) {
    const formData = new FormData();

    Object.entries(values).forEach(([key, value]) => {
      if (value) {
        formData.append(key, value);
      }
    });

    try {
      await createJobPosting(formData);
    } catch (error) {
      alert("Что-то пошло не так. Пожалуйста, попробуйте еще раз.");
    }
  }

  return (
    <main className="m-auto my-10 max-w-3xl space-y-10">
      <div className=" space-y-5 text-center">
        <H1>Найдите своего идеального сотрудника</H1>
        <p className="text-muted-foreground">
          Пусть вашу вакансию увидят тысячи соискателей.
        </p>
      </div>
      <div className="space-y-6 rounded-lg border p-4">
        <div>
          <h2 className="font-semibold">Подробности о работе</h2>
          <p className="text-muted-foreground">
            Укажите должность, тип, название компании и описание.
          </p>
          <Form {...form}>
            <form
              className="space-y-4"
              noValidate
              onSubmit={handleSubmit(onSubmit)}
            >
              <FormField
                name="title"
                control={control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel htmlFor="title">Должность</FormLabel>
                    <FormControl {...field}>
                      <Input placeholder="e.g. Frontend Developer" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                name="type"
                control={control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel htmlFor="type">Тип</FormLabel>
                    <FormControl>
                      <Select {...field} defaultValue="">
                        <option value="" hidden>
                          Выберите тип
                        </option>
                        {jobTypes.map((type) => (
                          <option key={type} value={type}>
                            {type}
                          </option>
                        ))}
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                name="companyName"
                control={control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel htmlFor="companyName">Имя конпании</FormLabel>
                    <FormControl {...field}>
                      <Input placeholder="а.е. Сбербанк" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={control}
                name="companyLogo"
                render={({ field: { value, ...fieldValues } }) => (
                  <FormItem>
                    <FormLabel>Логотип компании</FormLabel>
                    <FormControl>
                      <Input
                        {...fieldValues}
                        type="file"
                        accept="image/*"
                        onChange={(e) => {
                          const file = e.target.files?.[0];
                          fieldValues.onChange(file);
                        }}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                name="locationType"
                control={control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel htmlFor="locationType">Режим работы</FormLabel>
                    <FormControl>
                      <Select
                        {...field}
                        defaultValue=""
                        onChange={(e) => {
                          field.onChange(e);
                          if (e.currentTarget.value === "remote") {
                            {
                              trigger("location");
                            }
                          }
                        }}
                      >
                        <option value="" hidden>
                          Выберите режим работы
                        </option>
                        {locationType.map((locationType) => (
                          <option key={locationType} value={locationType}>
                            {locationType}
                          </option>
                        ))}
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                name="location"
                control={control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel htmlFor="location">Локация офиса</FormLabel>
                    <FormControl {...field}>
                      <LocationInput
                        onLocationSelected={field.onChange}
                        ref={field.ref}
                      />
                    </FormControl>
                    {watch("location") && (
                      <div className="flex items-center gap-1">
                        <button
                          type="button"
                          className=""
                          onClick={() => {
                            setValue("location", "", { shouldValidate: true });
                            trigger("location");
                            setFocus("location");
                          }}
                        >
                          <X size={20} />{" "}
                          <span className="text-sm">{watch("location")}</span>
                        </button>
                      </div>
                    )}
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="space-y-2">
                <Label htmlFor="applicationEmail">Email для заявки</Label>
                <div className="flex justify-between">
                  <FormField
                    name="applicationEmail"
                    control={control}
                    render={({ field }) => (
                      <FormItem className="grow">
                        <FormControl {...field}>
                          <div className="flex items-center gap-2">
                            <Input
                              placeholder="example@mail.ru"
                              id="applicationEmail"
                              type="email"
                              {...field}
                            />
                            <span className="mx-2">или</span>
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    name="applicationUrl"
                    control={control}
                    render={({ field }) => (
                      <FormItem className="grow">
                        <FormControl {...field}>
                          <Input
                            placeholder="Cсылка на сайт"
                            type="url"
                            {...field}
                            onChange={(e) => {
                              field.onChange(e);
                              trigger("applicationEmail");
                            }}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
              <FormField
                control={control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <Label>Description</Label>
                    <FormControl>
                      <RichTextEditor
                        onChange={(draft) =>
                          field.onChange(draftToMarkdown(draft))
                        }
                        ref={field.ref}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                name="salary"
                control={control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel htmlFor="salary">Зарплата</FormLabel>
                    <FormControl {...field}>
                      <Input type="number" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <LoadingButton type="submit" loading={isSubmitting}>
                Опубликовать
              </LoadingButton>
            </form>
          </Form>
        </div>
      </div>
    </main>
  );
}
