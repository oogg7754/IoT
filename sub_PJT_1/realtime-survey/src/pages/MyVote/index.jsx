import React from "react";
import Wrapper from "./styles";
import Layout from "../../layout/";
import MyVoteOptions from "../../components/Grid/MyVoteOptions";

import PropTypes from "prop-types";
import { Typography, Box, makeStyles } from "@material-ui/core";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
    backgroundColor: theme.palette.background.paper,
  },
}));

const MyVote = (props) => {
  const classes = useStyles();

  return (
    // Req. 1-1 => 2. MainVote에서 Layout 호출
    <Layout>
      <Wrapper>
        <div className={classes.root}>
          <br />
          <Typography
            variant="h2"
            align="center"
            className="vote-grid-title-typography1"
          >
            My Vote
          </Typography>
          <br />

          <hr />
          <MyVoteOptions />
        </div>
      </Wrapper>
    </Layout>
  );
};

export default MyVote;
