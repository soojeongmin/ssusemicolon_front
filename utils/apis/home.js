import { authorizedAxios } from "utils/customAxios";

const commonErrorMsg = (errorMessage) => `${errorMessage}`;

// 홈 화면 -
export const fetchHomeApi = async () => {
  const { data } = await authorizedAxios.get("/home/all");
  return data.data;
};
