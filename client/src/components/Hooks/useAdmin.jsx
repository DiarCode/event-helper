import { useCookies } from "react-cookie";
import jwt from "jsonwebtoken";

const useAdmin = () => {
  const [cookies] = useCookies();

  if (cookies.userAuthData) {
    const token = cookies.userAuthData.token;
    const data = jwt.decode(token);
    const isAdmin = data.isAdmin;

    return isAdmin;
  }

  return false;
};

export { useAdmin };
