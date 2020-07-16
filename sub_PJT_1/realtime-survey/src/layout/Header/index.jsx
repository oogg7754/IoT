import React, { useContext, useEffect } from "react";
import Wrapper from "./styles";
import store from "store";
import { useHistory } from "react-router-dom";

import {
  Grid,
  Typography,
  AppBar,
  Button,
  IconButton /*useMediaQuery*/,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import {
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Divider,
} from "@material-ui/core";
import { CommonContext } from "../../context/CommonContext";

const Header = (props) => {
  let history = useHistory();

  //const { setSignDialogOpen } = useContext(CommonContext);

  // const handleSignInDialogOpen = () => {
  //   history.push("/Auth");
  // };

  // useEffect(() => {
  //   setSignDialogOpen(false);
  // }, [setSignDialogOpen]);

  const [signInDialogOpen, setSignInDialogOpen] = React.useState(false);
  const [signUpDialogOpen, setSignUpDialogOpen] = React.useState(false);

  const signInClickOpen = () => {
    setSignInDialogOpen(true);
  };

  const signInClose = () => {
    setSignInDialogOpen(false);
  };

  const signUpClickOpen = () => {
    setSignInDialogOpen(false);
    setSignUpDialogOpen(true);
  };

  const signUpClose = () => {
    setSignUpDialogOpen(false);
  };

  const onClickRedirectPathHandler = (name) => (e) => {
    window.scrollTo(0, 0);
    if (name === "/SearchVote") {
      if (history.location.pathname === name) {
        history.goBack();
        store.remove("search");
      } else {
        history.push(name);
      }
    } else {
      history.push(name);
    }
  };
  return (
    <Wrapper>
      <AppBar position="fixed" color="primary">
        <Grid container justify="space-between" alignItems="center">
          <Grid item>
            <Typography
              variant="h6"
              className="logo"
              //onClick={onClickRedirectPathHandler('/MainVote')}
            >
              LOGO
            </Typography>
          </Grid>
          <Grid item className="title display-none">
            <Grid container justify="center" spacing={2}>
              <Grid item>
                <Button
                  color="primary"
                  variant="contained"
                  className="display-none header-button"
                >
                  Vote
                </Button>
              </Grid>
              <Grid item>
                <Button
                  color="primary"
                  variant="contained"
                  //onClick={onClickRedirectPathHandler('/MyVote')}
                  className="display-none header-button"
                >
                  My Vote
                </Button>
              </Grid>
              <Grid item onClick={onClickRedirectPathHandler("/CreateVote")}>
                <Button
                  color="primary"
                  variant="contained"
                  onClick={window.scrollTo(0, 0)}
                  className="header-button"
                >
                  Create a Vote
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Grid container alignItems="center">
              <Grid item>
                <IconButton
                  aria-label="delete"
                  //onClick={onClickRedirectPathHandler('/SearchVote')}
                >
                  <SearchIcon
                    fontSize="default"
                    color="inherit"
                    htmlColor="#eeeeee"
                  />
                </IconButton>
              </Grid>
              <Grid item>
                <Button
                  color="primary"
                  variant="contained"
                  onClick={signInClickOpen}
                  className="display-none header-button"
                >
                  {"Sign In"}
                </Button>
                {/* sign in dialog */}
                <Dialog
                  open={signInDialogOpen}
                  onClose={signInClose}
                  aria-labelledby="form-dialog-title"
                >
                  <DialogTitle id="form-dialog-title">Logo</DialogTitle>
                  <DialogContent>
                    <TextField
                      id="email"
                      label="Email*"
                      variant="outlined"
                      fullWidth
                    />
                  </DialogContent>
                  <DialogContent>
                    <TextField
                      id="pwd"
                      label="Password*"
                      type="password"
                      variant="outlined"
                      fullWidth
                    />
                  </DialogContent>
                  <DialogContent>
                    <Button
                      onClick={signInClose}
                      color="primary"
                      variant="contained"
                      fullWidth
                    >
                      Log In
                    </Button>
                    <Divider />
                    <Grid item xs={12}>
                      <Grid
                        container
                        direction="row"
                        justify="center"
                        alignItems="center"
                      >
                        <IconButton
                          className="sign-in-butoon grid-item-icon-button"
                          // onClick={onClickHandler}
                        >
                          <Typography className="grid-item-typography3">
                            {"Forgot Password?"}
                          </Typography>
                        </IconButton>
                      </Grid>
                    </Grid>
                    <Button
                      onClick={signUpClickOpen}
                      variant="outlined"
                      fullWidth
                    >
                      Don't have an Account?
                    </Button>
                  </DialogContent>
                </Dialog>

                <Dialog
                  open={signUpDialogOpen}
                  onClose={signUpClose}
                  aria-labelledby="form-dialog-title"
                >
                  <DialogTitle id="form-dialog-title">Logo</DialogTitle>
                  <DialogContent>
                    <TextField
                      id="name"
                      label="Name*"
                      variant="outlined"
                      fullWidth
                    />
                  </DialogContent>
                  <DialogContent>
                    <TextField
                      id="email"
                      label="Email*"
                      variant="outlined"
                      fullWidth
                    />
                  </DialogContent>
                  <DialogContent>
                    <TextField
                      id="pwd"
                      label="Password*"
                      type="password"
                      variant="outlined"
                      fullWidth
                    />
                  </DialogContent>
                  <DialogContent>
                    <Button
                      onClick={signUpClose}
                      color="primary"
                      variant="contained"
                      fullWidth
                    >
                      Sign up
                    </Button>
                    <Divider />
                    <Grid item xs={12}>
                      <Grid
                        container
                        direction="row"
                        justify="center"
                        alignItems="center"
                      >
                        <IconButton
                          className="sign-in-butoon grid-item-icon-button"
                          // onClick={onClickHandler}
                        ></IconButton>
                      </Grid>
                    </Grid>
                  </DialogContent>
                </Dialog>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </AppBar>
    </Wrapper>
  );
};

export default Header;
