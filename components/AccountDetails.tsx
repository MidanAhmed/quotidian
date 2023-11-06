import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { User2 } from "lucide-react";
import { CardContent } from "@/components/ui/card";
import { fetchAccountInfoById } from "@/lib/data";
import { FC } from "react";

interface UserId {
  id: string;
}

const AccountDetails: FC<UserId> = async ({ id }: UserId) => {
  const user = await fetchAccountInfoById(id);
  return (
    <CardContent className="space-y-2">
      <div className="space-y-4 md:flex md:items-center md:space-x-4 md:space-y-0">
        <Avatar>
          <AvatarImage src={user?.displayPicture || ""} />
          <AvatarFallback>
            <User2 />
          </AvatarFallback>
        </Avatar>
        <div>
          <p className="text-md font-medium leading-none">
            {user?.firstName + " " + user?.lastName}
          </p>
          <p className="text-sm text-muted-foreground">{user?.email}</p>
        </div>
      </div>
    </CardContent>
  );
};

export default AccountDetails;
