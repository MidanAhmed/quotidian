import { Skeleton } from "@/components/ui/skeleton";
import { CardContent } from "./ui/card";

export default function AccountDetailsSkeleton() {
  return (
    <CardContent className="space-y-2">
      <div className="space-y-4 md:flex md:items-center md:space-x-4 md:space-y-0">
        <Skeleton className="h-10 w-10 rounded-full" />
        <div className="space-y-2">
          <Skeleton className="h-3 w-[250px]" />
          <Skeleton className="h-3 w-[200px]" />
        </div>
      </div>
    </CardContent>
  );
}
