import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { User2 } from "lucide-react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import EmailPreferences from "./EmailPreferences";
import { User } from "@prisma/client";
import { FC, Suspense } from "react";
import AccountDetails from "./AccountDetails";
import AccountDetailsSkeleton from "./AccountDetailsSkeleton";

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
        <EmailPreferences id={id} />
      </Card>
    </MaxWidthWrapper>
  );
};

export default Dashboard;
