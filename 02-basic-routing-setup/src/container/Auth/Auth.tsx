/**
 * 인증 도메인에는 무엇이 필요할까?
 * - 로그인 및 가입 구성요소 필요
 * - 인증 도메인이라는 인증 레이블이 표시되어야 하며 이 도메인 내에서 렌더링되는 컴포넌트도 표시되어야 함.
 */

import { Container } from "@mui/material";
import { Outlet } from "react-router-dom";
import bgImage from "../../assets/auth_background.avif";

const Auth = () => {
  return (
    <Container
      disableGutters
      maxWidth={false}
      sx={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
      }}
    >
      <Outlet />
    </Container>
  );
};

export default Auth;
