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
              WORK IN PROGRESS
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
          
        </CardContent>
      </Card>
    </MaxWidthWrapper>
  );
};

export default Dashboard;
