import MaxWidthWrapper from "./MaxWidthWrapper";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import EmailPreferences from "./EmailPreferences";
import { FC, Suspense } from "react";
import AccountDetails from "./AccountDetails";
import AccountDetailsSkeleton from "./AccountDetailsSkeleton";
import EmailPreferencesSkeleton from "./EmailPreferencesSkeleton";

interface UserId {
  id: string;
}

const Dashboard: FC<UserId> = ({ id }: UserId) => {
  return (
    <MaxWidthWrapper classname="my-12 space-y-6 max-w-3xl">
      <h1 className="text-3xl font-extrabold tracking-tight lg:text-4xl text-center">
        Dashboard
      </h1>
      <Card className="mx-auto">
        <CardHeader>
          <CardTitle>Account Details</CardTitle>
          <CardDescription>View your account details.</CardDescription>
        </CardHeader>
        <Suspense fallback={<AccountDetailsSkeleton />}>
          <AccountDetails id={id} />
        </Suspense>
      </Card>
      <Card className="mx-auto">
        <CardHeader>
          <CardTitle>Email Preferences</CardTitle>
          <CardDescription>Customize your email preferences.</CardDescription>
        </CardHeader>
        <Suspense fallback={<EmailPreferencesSkeleton />}>
          <EmailPreferences id={id} />
        </Suspense>
      </Card>
    </MaxWidthWrapper>
  );
};

export default Dashboard;
