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

export async function getUserDataById(id: string) {
  try {
    const user = await prisma.user.findUniqueOrThrow({
      where: {
        id: id,
      },
    });
    return user;
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
