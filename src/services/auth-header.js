import { isTokenExpired } from "../utils/isTokenExpired";

const authHeader = () => {
  const accessToken = localStorage.getItem("accessToken");
  if (!isTokenExpired(accessToken)) {
    return { Authorization: "Bearer " + accessToken };
  } else {
  }
};

export default authHeader;
