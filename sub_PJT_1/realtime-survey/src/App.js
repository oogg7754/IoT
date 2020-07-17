import React, { useState } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import MainVote from "./pages/MainVote/";
import MyVote from "./pages/MyVote/";
import Terms from "./pages/Terms/";
import AboutMe from "./pages/AboutMe/";
import ContactUs from "./pages/ContactUs/";
import CreateVote from "./pages/CreateVote/";
import { CommonContext } from "./context/CommonContext";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core";

const theme = createMuiTheme({
  typography: {
    fontFamily: ["Noto Sans KR"].join(","),
    button: {
      fontFamily: "Noto Sans KR",
    },
    body1: {
      fontWeight: 500,
    },
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        body: {
          backgroundColor: "white",
        },
      },
    },
  },
});

function App() {
  const [signDialogOpen, setSignDialogOpen] = useState(false);
  const [infoData, setInfoData] = useState({});
  const [infoDialogOpen, setInfoDetailDialogOpen] = useState(false);

  return (
    <CommonContext.Provider
      value={{
        signDialogOpen,
        setSignDialogOpen,
        infoData,
        setInfoData,
        infoDialogOpen,
        setInfoDetailDialogOpen,
      }}
    >
      <MuiThemeProvider theme={theme}>
        <BrowserRouter>
          <Route exact path="/" component={MainVote} />{" "}
          <Route exact path="/MainVote" component={MainVote} />{" "}
          <Route exact path="/MyVote" component={MyVote} />{" "}
          <Route exact path="/Terms" component={Terms} />{" "}
          <Route exact path="/AboutMe" component={AboutMe} />{" "}
          <Route exact path="/ContactUs" component={ContactUs} />{" "}
          <Route exact path="/CreateVote" component={CreateVote} />{" "}
        </BrowserRouter>
      </MuiThemeProvider>{" "}
    </CommonContext.Provider>
  );
}

export default App;
