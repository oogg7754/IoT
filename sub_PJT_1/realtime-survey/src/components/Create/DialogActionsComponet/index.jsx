import React, { useContext } from "react";

import Grid from "@material-ui/core/Grid";
import { useHistory } from "react-router-dom";

import Fab from "@material-ui/core/Fab";

import { CommonContext } from "../../../context/CommonContext";
import { ViewContext } from "../../../context/ViewContext";

import Wrapper from "./styles";

const DialogActionsComponet = () => {
  const { setSignDialogOpen } = useContext(CommonContext);

  let history = useHistory();

  const { readyToUpload } = useContext(ViewContext);

  const createVoteHandler = async () => {
    alert("Not implements yet.");
    setSignDialogOpen(true);
    return;
  };

  const handleClose = () => {
    history.goBack();
  };

  return (
    <Wrapper>
      <Grid
        container
        direction="row"
        justify="flex-end"
        alignItems="center"
        className="dialog-actions-componet-grid"
      >
        <Fab
          variant="extended"
          aria-label="like"
          onClick={handleClose}
          className="up-cancel-fab dialog-actions-componet-fab1"
        >
          CANCEL
        </Fab>

        <Fab
          variant="extended"
          aria-label="like"
          color="inherit"
          onClick={readyToUpload && createVoteHandler}
          className="up-cancel-fab"
          style={{
            backgroundColor: readyToUpload ? "#1FA212" : "#E0E0E0",
          }}
        >
          UPLOAD
        </Fab>
      </Grid>
    </Wrapper>
  );
};

export default DialogActionsComponet;
