import styled from "@emotion/styled";
import { Box, Button, Paper, TextField, Typography, Link } from "@mui/material";

export default function Signin() {
  const StyledContaine = styled(Paper)`
    width: 350px;
    padding: 20px;
  `;

  const StyledInputBox = styled(Box)`
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
  `;
  const StyledAuthFooter = styled(Box)`
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
    align-items: center;
  `;

  return (
    <StyledContaine>
      <Typography variant="h4">Sign in</Typography>
      <Typography sx={{ marginBottom: 3 }} variant="body1">
        Enter your credentials to Sign In
      </Typography>

      <StyledInputBox>
        <TextField
          sx={{ marginBottom: 3 }}
          variant="standard"
          placeholder="Emial"
        />
        <TextField variant="standard" placeholder="Password" type="password" />
      </StyledInputBox>

      <StyledAuthFooter>
        <Button sx={{ marginBottom: 2 }} variant="contained">
          Sign In
        </Button>
        <Typography>
          Create a new account
          <Link>here</Link>
        </Typography>
      </StyledAuthFooter>
    </StyledContaine>
  );
}
