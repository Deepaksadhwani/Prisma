import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

/// insert user
async function insertUser(
  username: string,
  password: string,
  firstName: string,
  lastName: string
) {
  const res = await prisma.user.create({
    data: {
      email: username,
      password,
      firstName,
      lastName,
    },
    // select: {
    //     id: true,
    //     password: true,
    // }
  });
  console.log(res);
}

// insertUser("damini@gmail.com", "IlovePrisma", "deepak", "sadhwani");

//updateUser
interface UpdateParams {
  firstName: string;
  lastName: string;
}
const updateUser = async (
  username: string,
  { firstName, lastName }: UpdateParams
) => {
  const res = await prisma.user.update({
    where: { email: username },
    data: {
      firstName,
      lastName,
    },
  });
  console.log(res);
};

// updateUser("deepak@gmail.com", {
//   firstName: "dashingDeepak",
//   lastName: "sadhwani",
// });

const FetchUserData = async () => {
  const users = await prisma.user.findMany();
  console.log(users);
};


const DeleteUser = async (username: string) => {
  const deleteUser = await prisma.user.delete({
    where: {
      email: username,
    },
  });
};

DeleteUser("deepak@gmail.com")

FetchUserData();
