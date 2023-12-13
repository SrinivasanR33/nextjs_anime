import { URL } from "@/app/commen/CommenName";

export const LoginUserList = async () => {
  // console.log(req, req, JSON.stringify(req))
  const UserData = await fetch(`${URL}/loginusers`, {
    cache: "no-store",
    method: "get",
  });
  // const res = await UserData.json()
  // const user = UserData as unknown as UserL
  console.log(UserData, "UserData");
  // store.dispatch(editUser(user))
  return UserData.json();
};
