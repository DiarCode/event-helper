import { useCookies } from "react-cookie";

const useAuth = () => {
  const [cookies] = useCookies();
  if (cookies.userAuthData) {
    const isAuth = cookies.userAuthData.isAuth;
    return isAuth;
  }

  return false;
};

export default useAuth;
