import React from "react";
// import Header from "./Header/";
import Drawer from "./Drawer/";
import Footer from "./Footer/";
import { Container } from "@material-ui/core";

import Wrapper from "./styles";

const Layout = (props) => {
  //const { drawerOpen } = useContext(CommonContext);
  const { children } = props;
  return (
    <Wrapper>
      <Drawer />
      {/* Drawer : Header 기능까지 포함 */}
      <Container maxWidth="xl" className="content">
        <div className="container">{children}</div>
      </Container>
      <Footer />
    </Wrapper>
  );
};

export default Layout;
