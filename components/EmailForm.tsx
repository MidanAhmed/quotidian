"use client";

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
import { Switch } from "@/components/ui/switch";
import { Input } from "@/components/ui/input";
import { timeSetter, utcToLocalHour } from "@/lib/dayjs";
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";
import React from "react";
import { useToast } from "@/components/ui/use-toast";

const EmailPrefSchema = z.object({
  prefTimestamp: z.string(),
  isSub: z.boolean(),
  prefHour: z.coerce
    .number()
    .gte(0, { message: "Enter a number between 0 and 23" })
    .lte(23, { message: "Enter a number between 0 and 23" }),
});

export type FormData = z.infer<typeof EmailPrefSchema>;

// This can come from your database or API.

export function EmailForm(EmailProps: Partial<FormData>) {
  const router = useRouter();
  const { toast } = useToast();

  const [isSaving, setIsSaving] = React.useState<boolean>(false);

  const defaultValues: Partial<FormData> = {
    isSub: EmailProps.isSub,
    prefHour: utcToLocalHour(new Date(EmailProps.prefTimestamp!)),
    prefTimestamp: EmailProps.prefTimestamp,
  };

  const form = useForm<FormData>({
    resolver: zodResolver(EmailPrefSchema),
    defaultValues,
  });

  async function onSubmit(data: FormData) {
    setIsSaving(true);
    console.log(data);
    const { timestamp, hour } = timeSetter(data.prefHour);

    const response = await fetch("/api/updateprefs", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        isSub: data.isSub,
        prefHour: hour,
        prefTimestamp: timestamp,
      }),
    });

    setIsSaving(false);

    if (!response?.ok) {
      return toast({
        title: "Something went wrong.",
        description: "Your settings was not updated. Please try again.",
        variant: "destructive",
      });
    }

    toast({
      description: "Your settings has been updated.",
    });

    router.refresh();
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="space-y-4">
          <FormField
            control={form.control}
            name="isSub"
            render={({ field }) => (
              <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                <div className="space-y-0.5">
                  <FormLabel className="text-md">Daily Quote</FormLabel>
                  <FormDescription>
                    Receive daily quotes from Quotidian.
                  </FormDescription>
                </div>
                <FormControl>
                  <Switch
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="prefHour"
            render={({ field }) => (
              <FormItem className="rounded-lg border p-4">
                <FormLabel className="text-base">
                  Enter Preferred Hour
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter a number"
                    className="w-1/3"
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  Enter an Hour you want to recieve the Daily Quote email.{" "}
                  <b>
                    The exactness of the Daily email is not guaranteed due to
                    differences in timezone.
                  </b>
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Button type="submit" disabled={isSaving}>
          {isSaving && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          <span>Save Preferences</span>
        </Button>
      </form>
    </Form>
  );
}
