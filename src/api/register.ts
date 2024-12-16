import { postRequest } from "../utils/api";

interface UserRegisterArgs {
  username: string;
  email: string;
  password: string;
}

interface ResponseRegisterInfo {
  user: {
    username: string;
    email: string;
    id: number;
  };
}

export const register = (args: UserRegisterArgs) => {
  return postRequest<ResponseRegisterInfo>("/api/v1/user/register", {
    ...args,
  });
};
