import styled from "@emotion/styled";
import { Paper, Box } from "@mui/material";
import { Link } from "react-router-dom";

export const StyledContaine = styled(Paper)`
  width: 350px;
  padding: 20px;
`;

export const StyledInputBox = styled(Box)`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

export const StyledAuthFooter = styled(Box)`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  align-items: center;
`;

export const StyledLink = styled(Link)`
  cursor: pointer;
`;
