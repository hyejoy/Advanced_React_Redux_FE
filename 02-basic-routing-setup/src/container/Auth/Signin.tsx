import { Button, Link, TextField, Typography } from "@mui/material";
import {
  StyledContaine,
  StyledInputBox,
  StyledAuthFooter,
} from "./Shared.Auth";

function Signin() {
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

export default Signin;
