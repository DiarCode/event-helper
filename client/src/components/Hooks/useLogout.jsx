import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

const useLogout = () => {
  const [cookies, setCookies, removeCookies] = useCookies();
  const pageNavigation = useNavigate();

  if (cookies.userAuthData) {
    removeCookies(cookies.userAuthData);
    return true;
  }

  return false;
};

export default useLogout;
