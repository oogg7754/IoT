import React, { useState } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import MainVote from "./pages/MainVote/";
import Terms from "./pages/Terms/";
import AboutMe from "./pages/AboutMe/";
import ContactUs from "./pages/ContactUs/";
import CreateVote from "./pages/CreateVote/";
import { CommonContext } from "./context/CommonContext";

function App() {
  const [signDialogOpen, setSignDialogOpen] = useState(false);

  return (
    <CommonContext.Provider
      value={{
        signDialogOpen,
        setSignDialogOpen,
      }}
    >
      <BrowserRouter>
        <Route exact path="/" component={MainVote} />{" "}
        <Route exact path="/MainVote" component={MainVote} />{" "}
        <Route exact path="/Terms" component={Terms} />{" "}
        <Route exact path="/AboutMe" component={AboutMe} />{" "}
        <Route exact path="/ContactUs" component={ContactUs} />{" "}
        <Route exact path="/CreateVote" component={CreateVote} />{" "}
      </BrowserRouter>{" "}
    </CommonContext.Provider>
  );
}

export default App;
