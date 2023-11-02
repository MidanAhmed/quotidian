import { Skeleton } from "@/components/ui/skeleton";
import { CardContent } from "./ui/card";

export default function AccountDetailsSkeleton() {
  return (
    <CardContent className="space-y-2">
      <div className="flex items-center space-x-4">
        <Skeleton className="h-10 w-10 rounded-full" />
        <div className="space-y-2">
          <Skeleton className="h-3 w-[250px]" />
          <Skeleton className="h-3 w-[200px]" />
        </div>
      </div>
    </CardContent>
  );
}
