import { Skeleton } from "@/components/ui/skeleton";
import { CardContent } from "./ui/card";

export default function EmailPreferencesSkeleton() {
  return (
    <CardContent className="space-y-2">
      <div className="space-y-4">
        <div className="flex flex-row items-center justify-between rounded-lg border p-4">
          <div className="space-y-0.5">
            <div className="text-md">Daily Quote</div>
            <div>Receive daily quotes from Quotidian.</div>
          </div>
          <div>
            <Skeleton className="h-5 w-[20px]" />
          </div>
        </div>
        <div className="rounded-lg border p-4 space-y-1">
          <div className="text-base">Enter Preferred Hour</div>
          <div>
            <Skeleton className="h-5 w-1/3" />
          </div>
          <div>Enter an Hour you want to recieve the Daily Quote email.</div>
        </div>
      </div>
    </CardContent>
  );
}
