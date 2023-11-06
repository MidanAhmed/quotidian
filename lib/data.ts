import prisma from "./prisma";

interface createUserParams {
  id: string;
  email: string;
  firstName: string | null;
  lastName: string | null;
  displayPicture: string | null;
  prefHour: number;
  prefTimestamp: string;
}

export async function fetchAccountInfoById(id: string) {
  try {
    const user = await prisma.user.findUniqueOrThrow({
      select: {
        id: true,
        firstName: true,
        lastName: true,
        email: true,
        displayPicture: true,
      },
      where: {
        id: id,
      },
    });
    return user;
  } catch (err) {
    console.error(err);
  }
}

export async function fetchEmailInfoById(id: string) {
  try {
    const user = await prisma.user.findUniqueOrThrow({
      select: {
        id: true,
        isSub: true,
        prefHour: true,
        prefTimestamp: true,
      },
      where: {
        id: id,
      },
    });
    return user;
  } catch (err) {
    console.error(err);
  }
}

export async function updateEmailInfoById(
  id: string,
  data: { prefTimestamp: Date; prefHour: number; isSub: boolean }
) {
  try {
    await prisma.user.update({
      data: data,
      where: {
        id: id,
      },
    });
  } catch (err) {
    console.error(err);
  }
}

export async function createUser(userData: createUserParams) {
  try {
    await prisma.user.create({ data: userData });
  } catch (err) {
    console.log(err);
  }
}

export async function isUserAvailable(id: string) {
  try {
    const userAvailable = await prisma.user.count({
      where: {
        id: id,
      },
    });
    return Boolean(userAvailable);
  } catch (err) {
    console.log(err);
  }
}
