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
import { CardContent, CardFooter } from "./ui/card";
import { EmailForm } from "./EmailForm";
import { FC } from "react";
import { fetchEmailInfoById } from "@/lib/data";
import { FormData } from "./EmailForm";
import { utcToLocalHour } from "@/lib/dayjs";

interface UserId {
  id: string;
}

const EmailPreferences: FC<UserId> = async ({ id }: UserId) => {
  const emailPref = await fetchEmailInfoById(id);
  const { isSub, prefTimestamp } = emailPref!;
  const EmailProps: Partial<FormData> = {
    prefHour: utcToLocalHour(prefTimestamp),
    isSub,
    // prefTimestamp: prefTimestamp.toUTCString(),
  };
  return (
    <CardContent className="space-y-2">
      <EmailForm {...EmailProps} />
    </CardContent>
  );
};

export default EmailPreferences;
