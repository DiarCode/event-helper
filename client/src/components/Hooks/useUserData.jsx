import { useCookies } from "react-cookie";
import jwt from "jsonwebtoken";

const useUserData = () => {
  const [cookies] = useCookies();

  if (cookies.userAuthData) {
    const token = cookies.userAuthData.token;
    const data = jwt.decode(token);

    return data;
  }

  return null;
};

export default useUserData;
