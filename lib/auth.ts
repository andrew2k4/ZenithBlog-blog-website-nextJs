import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions";
import { getServerSession } from "next-auth";

export const getAuthSession = async () => {
  const session = await getServerSession(authOptions);
  return session;
};
