import React from "react";
import Wrapper from "./styles";
import { Grid } from "@material-ui/core";

import { useHistory } from "react-router-dom";

const Footer = () => {
  const history = useHistory();
  return (
    <Wrapper>
      <Grid container className="footer">
        <Grid item sm={12} md={8} className="left-box">
          <ul className="page">
            <li>
              <span
                onClick={() => {
                  history.push("/Terms");
                  window.scrollTo(0, 0);
                }}
              >
                Privacy Policy
              </span>
            </li>
            <li>
              <span
                onClick={() => {
                  history.push("/AboutMe");
                  window.scrollTo(0, 0);
                }}
              >
                Developer Introduction
              </span>
            </li>
            <li>
              <span
                onClick={() => {
                  history.push("/ContactUs");
                  window.scrollTo(0, 0);
                }}
              >
                Contact Us
              </span>
            </li>
          </ul>
          <ul className="info">
            <li>I do Arduino | 서울 1반 12조</li>
            <li>
              <p>Copyright by I do Arduino.</p>
            </li>
          </ul>
        </Grid>
        <Grid item sm={12} md={4} className="right-box">
          <Grid className="text-box">
            <h2>For Help</h2>
            <h3>help@idoarduino.com</h3>
            <h4>Contact Out Customer Support Team</h4>
          </Grid>
        </Grid>
      </Grid>
    </Wrapper>
  );
};

export default Footer;
