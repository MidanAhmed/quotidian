import { updateEmailInfoById } from "@/lib/data";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
const { getUser } = getKindeServerSession();
type dbdataProps = {
  prefTimestamp: Date;
  prefHour: number;
  isSub: boolean;
};

export async function PATCH(req: Request) {
  const user = getUser();
  const body = await req.json();
  const dbdata: dbdataProps = {
    isSub: body.isSub!,
    prefHour: body.prefHour!,
    prefTimestamp: new Date(body.prefTimestamp!),
  };
  await updateEmailInfoById(user.id!, dbdata);

  return new Response(null, { status: 200 });
}
