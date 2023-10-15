"use client";

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
import { EmailPreferences } from "./EmailPreferences";

const Dashboard = () => {

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
        <CardContent className="space-y-2">
          <div className="flex items-center justify-between space-x-4">
            <div className="flex items-center space-x-3">
              {isLoading ? (
                <>
                  <Skeleton className="h-8 w-8 rounded-full" />
                  <div className="space-y-1">
                    <Skeleton className="h-[20px] w-[250px]" />
                    <Skeleton className="h-[17px] w-[200px]" />
                  </div>
                </>
              ) : (
                <>
                  <Avatar>
                    {user?.displayPicture ? (
                      <AvatarImage src={user.displayPicture} />
                    ) : (
                      <AvatarFallback>
                        <User2 />
                      </AvatarFallback>
                    )}
                  </Avatar>
                  <div className="space-y-1">
                    <p className="text-md font-medium leading-none">
                      {user?.firstName + " " + user?.lastName}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {user?.email}
                    </p>
                  </div>
                </>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
      <Card className="mx-auto">
        <CardHeader>
          <CardTitle>Email Preferences</CardTitle>
          <CardDescription>Customize your email preferences.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-2">
          {isLoading ? (
            <div>
              <Skeleton className="h-5 w-[250px] mb-2" />
              <Skeleton className="h-5 w-[400px] mb-4" />
              <Skeleton className="h-3 w-[50px] mb-4" />
              <Skeleton className="h-3 w-[150px]" />
            </div>
          ) : (
            <EmailPreferences user={user} />
          )}
        </CardContent>
      </Card>
    </MaxWidthWrapper>
  );
};

export default Dashboard;
