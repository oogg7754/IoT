import React, { useContext, useEffect } from "react";

import Layout from "../../layout/";

import { CommonContext } from "../../context/CommonContext";

const Auth = () => {
  const { setSignDialogOpen } = useContext(CommonContext);

  useEffect(() => {
    setSignDialogOpen(true);
  }, []);

  return <Layout />;
};
export default Auth;
