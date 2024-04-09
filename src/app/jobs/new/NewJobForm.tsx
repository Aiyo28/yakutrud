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
    console.log(values);
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
                      <Input placeholder="пример: ПАО Сбербанк" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                name="companyLogo"
                control={control}
                render={({ field: { value, ...fieldValues } }) => (
                  <FormItem>
                    <FormLabel htmlFor="companyLogo">
                      Логотип компании
                    </FormLabel>
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
                      <Select {...field} defaultValue="">
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
            </form>
          </Form>
        </div>
      </div>
    </main>
  );
}
