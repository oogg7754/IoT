import React from "react";
import Wrapper from "./styles";
import Layout from "../../layout/";
import VoteOptions from "../../components/Grid/VoteOptions";

import PropTypes from "prop-types";
import {
  AppBar,
  Tabs,
  Tab,
  Typography,
  Box,
  makeStyles,
} from "@material-ui/core";

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

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    "aria-controls": `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
    backgroundColor: theme.palette.background.paper,
  },
}));

const MainVote = (props) => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    // Req. 1-1 => 2. MainVote에서 Layout 호출
    <Layout>
      <Wrapper>
        <div className={classes.root}>
          <AppBar position="static" color="default">
            <Tabs
              value={value}
              onChange={handleChange}
              indicatorColor="primary"
              textColor="primary"
              variant="scrollable"
              scrollButtons="auto"
              aria-label="scrollable auto tabs example"
            >
              <Tab label="MOVIE" {...a11yProps(0)} />
              <Tab label="FOOD" {...a11yProps(1)} />
              <Tab label="TECHNOLOGY" {...a11yProps(2)} />
              <Tab label="TRIP" {...a11yProps(3)} />
              <Tab label="SPORTS" {...a11yProps(4)} />
              <Tab label="GAME" {...a11yProps(5)} />
              <Tab label="ANIMALS" {...a11yProps(6)} />
            </Tabs>
          </AppBar>
          <TabPanel value={value} index={0}>
            <Typography
              variant="h2"
              align="center"
              className="vote-grid-title-typography1"
            >
              MOVIE
            </Typography>

            <Typography
              variant="h6"
              align="center"
              className="vote-grid-title-typography2"
            >
              This is a movie area
            </Typography>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <Typography
              variant="h2"
              align="center"
              className="vote-grid-title-typography1"
            >
              FOOD
            </Typography>

            <Typography
              variant="h6"
              align="center"
              className="vote-grid-title-typography2"
            >
              This is a food area
            </Typography>
          </TabPanel>
          <TabPanel value={value} index={2}>
            <Typography
              variant="h2"
              align="center"
              className="vote-grid-title-typography1"
            >
              TECHNOLOGY
            </Typography>

            <Typography
              variant="h6"
              align="center"
              className="vote-grid-title-typography2"
            >
              This is a technology area
            </Typography>
          </TabPanel>
          <TabPanel value={value} index={3}>
            <Typography
              variant="h2"
              align="center"
              className="vote-grid-title-typography1"
            >
              TRIP
            </Typography>

            <Typography
              variant="h6"
              align="center"
              className="vote-grid-title-typography2"
            >
              This is a trip area
            </Typography>
          </TabPanel>
          <TabPanel value={value} index={4}>
            <Typography
              variant="h2"
              align="center"
              className="vote-grid-title-typography1"
            >
              SPORTS
            </Typography>

            <Typography
              variant="h6"
              align="center"
              className="vote-grid-title-typography2"
            >
              This is a sports area
            </Typography>
          </TabPanel>
          <TabPanel value={value} index={5}>
            <Typography
              variant="h2"
              align="center"
              className="vote-grid-title-typography1"
            >
              GAME
            </Typography>

            <Typography
              variant="h6"
              align="center"
              className="vote-grid-title-typography2"
            >
              This is a game area
            </Typography>
          </TabPanel>
          <TabPanel value={value} index={6}>
            <Typography
              variant="h2"
              align="center"
              className="vote-grid-title-typography1"
            >
              ANIMALS
            </Typography>

            <Typography
              variant="h6"
              align="center"
              className="vote-grid-title-typography2"
            >
              This is a animals area
            </Typography>
          </TabPanel>
          <hr />
          <VoteOptions />
        </div>
      </Wrapper>
    </Layout>
  );
};

export default MainVote;
