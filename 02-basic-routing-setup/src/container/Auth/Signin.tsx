import { Button, TextField, Typography } from "@mui/material";
import {
  StyledAuthFooter,
  StyledContaine,
  StyledInputBox,
  StyledLink,
} from "./Shared.Auth";

function Signin() {
  // const navigate = useNavigate();
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
          <StyledLink to={"/signup"}>here</StyledLink>
        </Typography>
      </StyledAuthFooter>
    </StyledContaine>
  );
}

export default Signin;
