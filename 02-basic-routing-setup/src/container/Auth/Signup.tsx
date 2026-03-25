import { Button, TextField, Typography } from "@mui/material";
import {
  StyledAuthFooter,
  StyledContaine,
  StyledInputBox,
  StyledLink,
} from "./Shared.Auth";

function Signup() {
  return (
    <StyledContaine>
      <Typography variant="h4">Sign Up</Typography>
      <Typography sx={{ marginBottom: 3 }} variant="body1">
        Set credentials to Signup
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
          Sign Up
        </Button>
        <Typography>
          Sign in to existing account
          <StyledLink to={"/signin"}>here</StyledLink>
        </Typography>
      </StyledAuthFooter>
    </StyledContaine>
  );
}

export default Signup;
