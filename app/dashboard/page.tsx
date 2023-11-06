import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
import Dashboard from "@/components/Dashboard";
import { initialTimeSetter } from "@/lib/dayjs";
import { createUser, isUserAvailable } from "@/lib/data";

const Page = async () => {
  const { getUser } = getKindeServerSession();
  const user = getUser();

  if (!user.id || !user.email) redirect("/");

  const userSynced = await isUserAvailable(user.id);

  if (!userSynced) {
    const { timestamp, hour } = initialTimeSetter();
    let data = {
      id: user.id,
      email: user.email,
      firstName: user.given_name,
      lastName: user.family_name,
      displayPicture: user.picture,
      prefHour: hour,
      prefTimestamp: timestamp,
    };
    await createUser(data);
  }

  // dbUser.prefHour = utcToLocalHour(dbUser.prefTimestamp);

  return <Dashboard id={user.id} />;
};

export default Page;
