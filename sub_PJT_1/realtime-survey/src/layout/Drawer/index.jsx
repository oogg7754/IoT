import React from "react";
import clsx from "clsx";
import { useHistory } from "react-router-dom";
import {
  makeStyles,
  useTheme,
  Theme,
  createStyles,
} from "@material-ui/core/styles";

import {
  Grid,
  AppBar,
  Button,
  Typography,
  IconButton,
} from "@material-ui/core";
import {
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@material-ui/core";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import SearchIcon from "@material-ui/icons/Search";
import Badge from "@material-ui/core/Badge";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Wrapper from "./styles";

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
    },
    appBar: {
      transition: theme.transitions.create(["margin", "width"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    appBarShift: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      transition: theme.transitions.create(["margin", "width"], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    hide: {
      display: "none",
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    drawerHeader: {
      display: "flex",
      alignItems: "center",
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
      justifyContent: "flex-end",
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      marginLeft: -drawerWidth,
    },
    contentShift: {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    },
  })
);
export default function PersistentDrawerLeft() {
  const history = useHistory();
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  // setOpen 상태값 만들기, 초기값은 false (닫혀있음)
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  // 아래 함수가 실행되면 setOpen 값이 false > Drawer가 닫힘
  const handleDrawerClose = () => {
    setOpen(false);
  };

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
  // 로그인
  const signUpClickOpen = () => {
    setSignInDialogOpen(false);
    setSignUpDialogOpen(true);
  };

  const signUpClose = () => {
    setSignUpDialogOpen(false);
  };
  // 회원정보 변경
  const [editProfileDialogOpen, seteditProfileDialogOpen] = React.useState(
    false
  );
  const editProfileClickOpen = () => {
    seteditProfileDialogOpen(true);
  };
  const editProfileClose = () => {
    seteditProfileDialogOpen(false);
  };
  // 회원가입
  const [
    changePasswordDialogOpen,
    setchangePasswordDialogOpen,
  ] = React.useState(false);
  const changePasswordClickOpen = () => {
    setchangePasswordDialogOpen(true);
  };
  const changePasswordClose = () => {
    setchangePasswordDialogOpen(false);
  };

  const onClickRedirectPathHandler = (name) => () => {
    window.scrollTo(0, 0);
    history.push(name);
  };

  return (
    <div className={classes.root}>
      <Wrapper>
        <CssBaseline />
        <AppBar position="fixed" color="primary">
          <Toolbar>
            {/* Drawer 여는 버튼 */}
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              className={clsx(classes.menuButton, open && classes.hide)}
            >
              <MenuIcon />
            </IconButton>
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
                  <Grid item>
                    <Button
                      color="primary"
                      variant="contained"
                      onClick={onClickRedirectPathHandler("/CreateVote")}
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
          </Toolbar>
        </AppBar>
        {/* Drawer 열면 보이는 부분 */}
        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="left"
          open={open}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.drawerHeader}>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "ltr" ? (
                <ChevronLeftIcon />
              ) : (
                <ChevronRightIcon />
              )}
            </IconButton>
          </div>
          <Divider />
          <List>
            <ListItem>
              <ListItemText secondary="Please log in" />
            </ListItem>
            <ListItem>
              <Button color="primary" onClick={signInClickOpen}>
                Sign In
              </Button>
            </ListItem>
            <ListItem>
              <ListItemText secondary="Wasn't a member yet?" />
            </ListItem>
            <ListItem>
              <Button color="primary" onClick={signUpClickOpen}>
                Sign Up
              </Button>
            </ListItem>
          </List>
          <Divider />
          <List>
            <ListItem
              button
              key={"Main Page"}
              onClick={() => {
                history.push("/");
                handleDrawerClose();
              }}
            >
              <ListItemText primary={"Main Page"} />
            </ListItem>
            <ListItem
              button
              key={"My Page"}
              onClick={() => {
                history.push("/");
                handleDrawerClose();
              }}
            >
              <ListItemText primary={"My Page"} />
            </ListItem>
            <ListItem
              button
              key={"Create Vote"}
              onClick={() => {
                history.push("/CreateVote");
                handleDrawerClose();
              }}
            >
              <ListItemText primary={"Create Vote"} />
            </ListItem>
            <ListItem
              button
              key={"Company Info"}
              onClick={() => {
                history.push("/AboutMe");
                handleDrawerClose();
              }}
            >
              <ListItemText primary={"Company Info"} />
            </ListItem>
            <ListItem
              button
              key={"Contact Us"}
              onClick={() => {
                history.push("/ContactUs");
                handleDrawerClose();
              }}
            >
              <ListItemText primary={"Contact Us"} />
            </ListItem>
          </List>
          <Divider />
          <List>
            <ListItem alignItems="center">
              <ListItemAvatar>
                <Avatar src="/images/account_icon" />
              </ListItemAvatar>
              <List>
                {/* edit profile */}
                <ListItem
                  button
                  color="primary"
                  variant="contained"
                  onClick={editProfileClickOpen}
                  className="edit-profile-button"
                >
                  <ListItemText primary="Edit Profile" />
                </ListItem>
                {/* Edit Profile dialog */}
                <Dialog
                  open={editProfileDialogOpen}
                  onClose={editProfileClose}
                  aria-labelledby="form-dialog-title"
                >
                  <DialogTitle id="form-dialog-title">
                    Edit Profile{" "}
                  </DialogTitle>
                  <DialogContent>
                    <Badge color="primary" variant="dot">
                      <Avatar src="/images/account_icon" />
                    </Badge>
                  </DialogContent>

                  <DialogContent>
                    <TextField
                      id="New Nickname"
                      label="New Nickname*"
                      variant="outlined"
                      fullWidth
                    />
                  </DialogContent>
                  <DialogContent>
                    <TextField
                      id="Password Confirmation"
                      label="Password Confirmation*"
                      type="password"
                      variant="outlined"
                      fullWidth
                    />
                  </DialogContent>
                  <DialogContent>
                    <Button
                      onClick={editProfileClose}
                      color="primary"
                      variant="contained"
                      fullWidth
                    >
                      Submit
                    </Button>
                  </DialogContent>
                </Dialog>
                {/* change password */}
                <ListItem
                  button
                  key="Sign Out"
                  variant="contained"
                  onClick={changePasswordClickOpen}
                  className="change-pass-button"
                >
                  <ListItemText primary="Change Pass" />
                </ListItem>
                {/* Change Pass dialog */}
                <Dialog
                  open={changePasswordDialogOpen}
                  onClose={changePasswordClose}
                  aria-labelledby="form-dialog-title"
                >
                  <DialogTitle id="form-dialog-title">
                    Change Password{" "}
                  </DialogTitle>
                  <DialogContent>
                    <TextField
                      id="Current Password"
                      label="Current Password*"
                      type="password"
                      variant="outlined"
                      fullWidth
                    />
                  </DialogContent>
                  <DialogContent>
                    <TextField
                      id="New Password"
                      label="New Password*"
                      type="password"
                      variant="outlined"
                      fullWidth
                    />
                  </DialogContent>
                  <DialogContent>
                    <TextField
                      id="Password Confirmation"
                      label="Password Confirmation*"
                      type="password"
                      variant="outlined"
                      fullWidth
                    />
                  </DialogContent>
                  <DialogContent>
                    <Button
                      onClick={changePasswordClose}
                      color="primary"
                      variant="contained"
                      fullWidth
                    >
                      Submit
                    </Button>
                  </DialogContent>
                </Dialog>

                <ListItem button key="Sign Out" onClick={handleDrawerClose}>
                  <ListItemText primary="Sign Out" />
                </ListItem>
              </List>
            </ListItem>
          </List>
          <Divider />
          <List>
            <ListItem
              button
              key="개인정보처리약관"
              onClick={() => {
                history.push("/Terms");
                handleDrawerClose();
              }}
            >
              <ListItemText primary="개인정보처리약관" />
            </ListItem>
          </List>
        </Drawer>
      </Wrapper>
    </div>
  );
}
