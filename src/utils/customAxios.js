import axios from "axios";

const BASE_URL =
  "http://ec2-43-201-120-175.ap-northeast-2.compute.amazonaws.com:8080"; //우리 서버 주소임.

export const customAxios = axios.create({ //클라이언트와 서버가 통신하는 방식을 전해줌으로서, 전송을 편하게 하는 방식
  baseURL: BASE_URL, //이걸 통해 이후에 추가 url만 적을 수 있도록 편리하게 만든다.
  headers: { //추가적으로 요청할 사항
    "Content-Type": "application/json",  //데이터의 형식을 지정하는 것
    "Access-Control-Allow-Origin": "*", //CROS 안전한 교차 출처 요칭 및 데이터 전송
  },
});

// loginAxios.interceptors.request.use(checkToken);
