import { postRequest } from "../utils/api";

interface UserLoginArgs {
  loginUsername: string;
  loginPassword: string;
}

interface ResponseLoginInfo {
  user: {
    username: string;
    email: string;
  };
  token: string;
}

export const login = (args: UserLoginArgs) => {
  return postRequest<ResponseLoginInfo>("/api/v1/user/login", {
    ...args,
  });
};
