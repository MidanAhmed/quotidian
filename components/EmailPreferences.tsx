import { CardContent } from "./ui/card";
import { EmailForm } from "./EmailForm";
import { FC } from "react";
import { fetchEmailInfoById } from "@/lib/data";
import { FormData } from "./EmailForm";
import { convertToUTCTimestamp } from "@/lib/dayjs";

interface UserId {
  id: string;
}

const EmailPreferences: FC<UserId> = async ({ id }: UserId) => {
  const emailPref = await fetchEmailInfoById(id);
  const { isSub, prefTimestamp } = emailPref!;
  const EmailProps: Partial<FormData> = {
    prefTimestamp: convertToUTCTimestamp(prefTimestamp),
    isSub,
  };
  return (
    <CardContent className="space-y-2">
      <EmailForm {...EmailProps} />
    </CardContent>
  );
};

export default EmailPreferences;
