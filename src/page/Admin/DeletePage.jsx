import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { styled, useTheme } from "styled-components";
import { RoundedButton } from "../../component/RoundedButton";
import { Spacing } from "../../component/Spacing";
import { Text } from "../../component/Text";
import { Layout } from "../../container/Admin/Layout";
import Header from "../../container/Header";
import { useStoreRemoveMutation } from "../../utils/hooks/useAdmin";

const StyledForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  font-size: 20px;
`;

const HStack = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  // border: 1px solid blue;
  width: 100%;
  gap: 2rem;

  flex: 1;
`;

const StyledBorderInput = styled.input`
  flex: 1;

  border-radius: 6px;
  padding: 0.2rem 0.5rem;
  font-size: 0.7em;
  border: 1px solid ${(props) => props.theme.colors.mainGray};
  ${(props) => props.width && `width: ${props.width}`};
`;

const StyledTextWrapper = styled.div`
  flex: 1;
  // border: 1px solid red;
  justify-content: flex-end;
  text-align: right;
`;

export const DeletePage = () => {
  const theme = useTheme();
  const { mutate: doRemove } = useStoreRemoveMutation();
  const navigate = useNavigate();

  const [storeForm, setStoreForm] = useState({
    storeId: -1,
    password: "",
  });

  const handleChangeInput = (key, value) => {
    setStoreForm({ ...storeForm, [key]: value });
  };

  const handleSubmit = () => {
    doRemove(
      { password: storeForm.password, storeId: storeForm.storeId },
      {
        onSuccess: () => {
          console.log("success!");
          navigate("/admin/delete/result");
        },
        onError: (e) => {
          console.log("error!", e);
          window.alert("에러가 발생했습니다. ", e);
        },
      },
    );
  };

  return (
    <>
      <Header />
      <Spacing spacing={"40px"} />
      <Layout>
        <StyledForm>
          <Text fontSize={theme.fontSize.lg} fontWeight={"600"}>
            매장 삭제
          </Text>
          <Text color={theme.colors.mainGray} fontSize={theme.fontSize.xs}>
            기존의 등록 비밀번호가 기억나지 않는다면 이곳에 문의해주세요.
          </Text>
          <HStack>
            <StyledTextWrapper>
              <Text>업체 아이디</Text>
            </StyledTextWrapper>
            <StyledBorderInput
              onChange={(e) =>
                handleChangeInput("storeId", e.currentTarget.value)
              }
            />
          </HStack>
          <Spacing spacing={"0.5rem"} />

          <HStack>
            <StyledTextWrapper>
              <Text>등록 비밀번호</Text>
            </StyledTextWrapper>
            <StyledBorderInput
              onChange={(e) =>
                handleChangeInput("password", e.currentTarget.value)
              }
            />
          </HStack>

          <Spacing spacing={"0.5rem"} />
          <Text color={theme.colors.mainGray} fontSize={theme.fontSize.xs}>
            이는 되돌릴 수 없습니다. 삭제 신청 전 마지막으로 확인 바랍니다.
          </Text>

          <RoundedButton onClick={handleSubmit}>
            <Text color={theme.colors.mainWhite}>삭제하기</Text>
          </RoundedButton>
        </StyledForm>
      </Layout>
    </>
  );
};
