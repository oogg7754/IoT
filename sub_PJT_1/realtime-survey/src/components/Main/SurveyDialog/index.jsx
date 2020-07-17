import React, { useContext } from "react";
import {
  Dialog,
  DialogActions,
  Grid,
  Button,
  Typography,
} from "@material-ui/core";

import ClearIcon from "@material-ui/icons/Clear";
import { Wrapper, Close, Date } from "./styles";

import CheckBoxButtonsGroup from "../../Main/CheckBoxButtonsGroup";
import { CommonContext } from "../../../context/CommonContext";
import Feed from "../../Feed";

const ViewVoteSubjectComponent = () => {
  const { infoData } = useContext(CommonContext);

  return (
    <Wrapper>
      <Grid
        container
        direction="row"
        justify="flex-start"
        alignItems="flex-start"
        spacing={4}
      >
        <Grid item xs={12} className="view-vote-subject-component-grid-item1">
          <Typography className="view-vote-subject-component-grid-item-typography1">
            {infoData.vote_title}
          </Typography>
        </Grid>
        <Grid item xs={12} className="view-vote-subject-component-grid-item2">
          <Typography className="view-vote-subject-component-grid-item-typography2">
            {infoData.vote_desc}
          </Typography>
        </Grid>
        <Grid item xs={12} className="view-vote-subject-component-grid-item3">
          <CheckBoxButtonsGroup />
        </Grid>
      </Grid>
    </Wrapper>
  );
};

const DialogActionsComponet = () => {
  const { infoData, setInfoData, setInfoDetailDialogOpen } = useContext(
    CommonContext
  );

  const votingHandler = async () => {
    setInfoData({
      ...infoData,
      is_voting: true,
    });

    setInfoDetailDialogOpen(true);
  };

  return (
    <Wrapper>
      <Grid container direction="row" justify="center" alignItems="center">
        <Grid item className="dialog-actions-componet-grid-item">
          {!infoData.is_voting && (
            <Button
              variant="contained"
              color="primary"
              size="large"
              onClick={votingHandler}
              className="dialog-actions-componet-grid-item-button"
            >
              Submit
            </Button>
          )}
        </Grid>
      </Grid>
    </Wrapper>
  );
};

const ViewVoteComponent = () => {
  const { infoData } = useContext(CommonContext);

  return (
    <Wrapper>
      <Grid
        container
        direction="row"
        justify="flex-start"
        alignItems="flex-start"
      >
        <Grid item xs={12}>
          <ViewVoteSubjectComponent />
        </Grid>
        <Grid item xs={12}>
          <DialogActionsComponet />
        </Grid>
        <Grid item xs={12} className="feed-container">
          {infoData.is_voting && <Feed />}
        </Grid>
      </Grid>
    </Wrapper>
  );
};
const ResponsiveDialogSign = () => {
  const { infoDialogOpen, setInfoDetailDialogOpen } = useContext(CommonContext);

  const handleClose = () => {
    setInfoDetailDialogOpen(false);
  };

  return (
    <Wrapper>
      <Dialog
        open={infoDialogOpen}
        onClose={handleClose}
        aria-labelledby="max-width-dialog-title"
        PaperProps={{
          style: {
            height: "90vh",
            padding: "10px",
            width: "1280px",
            maxWidth: "none",
            overflowX: "hidden",
            overflowY: "auto",
            position: "inherit",
          },
        }}
        BackdropProps={{
          style: {
            backgroundColor: "rgba(0,0,0,0.85)",
          },
        }}
      >
        <Close className="btn-close">
          <DialogActions style={{ padding: 0 }}>
            <Date>
              <span className="date on">{"12:00:00"}</span>
            </Date>
            <Grid className="go-back-btn" onClick={handleClose}>
              <ClearIcon
                size="medium"
                style={{ color: "#fff", cursor: "pointer" }}
              />
            </Grid>
          </DialogActions>
        </Close>
        <ViewVoteComponent />
      </Dialog>
    </Wrapper>
  );
};

export default ResponsiveDialogSign;
