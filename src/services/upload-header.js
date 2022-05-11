import { isTokenExpired } from "../utils/isTokenExpired";

const uploadHeader = (data) => {
  const accessToken = localStorage.getItem("accessToken");
  if (!isTokenExpired(accessToken)) {
    return {
      Authorization: "Bearer " + accessToken,
      "Content-Type": `multipart/form-data; boundary=${data._boundary}`,
    };
  } else {
  }
};

export default uploadHeader;
