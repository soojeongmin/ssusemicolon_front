import { useEffect } from "react";
import { Route, Routes } from "react-router";
import styled from "styled-components";

import { DashboardPage } from "./page/Dashboard";
import { DetailPage } from "./page/DetailBoard";
import { RegisterPage } from "./page/Admin/RegisterPage";
import { DeletePage } from "./page/Admin/DeletePage";
import { EditPage } from "./page/Admin/EditPage";
import {
  DeleteResult,
  ModifyResult,
  RegisterResult,
} from "./page/Admin/ResultPage";

const Wrapper = styled.div`
  background-color: white;
  border: none;
  min-height: calc(var(--vh, 1vh) * 100);

  margin-left: auto;
  margin-right: auto;
  position: relative;
`;
// max-width: var(--app-max-width, 768px);
const App = () => {
  const setScreenSize = () => {
    // vh 관련
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);

    // window width 관련
    const windowWidth =
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth;
    const maxWidth = Math.min(768, windowWidth);
    document.documentElement.style.setProperty(
      "--app-max-width",
      `${maxWidth}px`,
    );
  };

  useEffect(() => {
    setScreenSize();
    window.addEventListener("resize", setScreenSize);

    return () => {
      window.removeEventListener("resize", setScreenSize);
    };
  }, []);

  return (
    <Wrapper className="App">
      <Routes>
        <Route path="/" element={<DashboardPage />}></Route>
        <Route path="/detail/:storeId" element={<DetailPage />}></Route>
        <Route path="/admin/register" element={<RegisterPage />}></Route>
        <Route
          path="/admin/register/result"
          element={<RegisterResult />}
        ></Route>

        <Route path="/admin/modify" element={<EditPage />}></Route>
        <Route path="/admin/modify/result" element={<ModifyResult />}></Route>

        <Route path="/admin/delete" element={<DeletePage />}></Route>
        <Route path="/admin/delete/result" element={<DeleteResult />}></Route>
      </Routes>
    </Wrapper>
  );
};

export default App;
