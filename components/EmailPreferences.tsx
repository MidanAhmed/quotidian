import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
dayjs.extend(utc);

interface UserProps {
  user: {
    id: string;
    email: string;
    firstName: string | null;
    lastName: string | null;
    displayPicture: string | null;
    timestamp: string;
    isSub: boolean;
  } | undefined | null;
}

const emailFormSchema = z.object({
  is_sub: z.boolean(),
  hours: z.coerce
    .number()
    .gte(0, {
      message: "Hour field cannot be less than 0.",
    })
    .lte(23, {
      message: "Hour field cannot be greater than 23",
    }),
  minutes: z.coerce
    .number()
    .gte(0, {
      message: "Minute field cannot be less than 0.",
    })
    .lte(59, {
      message: "Minute field cannot be greater than 59.",
    }),
});

type EmailFormValues = z.infer<typeof emailFormSchema>;

export function EmailPreferences({user}: UserProps) {
  const defaultValues: Partial<EmailFormValues> = {
    is_sub: user?.isSub,
    hours: dayjs(user?.timestamp).local().hour(),
    minutes: dayjs(user?.timestamp).local().minute(),
  };

  const form = useForm<EmailFormValues>({
    resolver: zodResolver(emailFormSchema),
    defaultValues,
  });

  function onSubmit(data: EmailFormValues) {
    console.log(data);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="is_sub"
          render={({ field }) => (
            <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
              <div className="space-y-0.5">
                <FormLabel className="text-base">
                  Recieve daily quotes
                </FormLabel>
                <FormDescription>
                  Receive an inspiring quote everyday.
                </FormDescription>
              </div>
              <FormControl>
                <Switch
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex space-x-4">
          <FormField
            control={form.control}
            name="hours"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>Hour</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    disabled={!form.getValues("is_sub")}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="minutes"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>Minute</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    disabled={!form.getValues("is_sub")}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Button type="submit">Save</Button>
      </form>
    </Form>
  );
}
