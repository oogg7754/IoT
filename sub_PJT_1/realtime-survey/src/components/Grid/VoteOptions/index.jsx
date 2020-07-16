import React, { useEffect, useState } from "react";
import Wrapper from "./styles";
import VoteItem from "../VoteItem";

import dummyData from "./dump.json";

// styles
import { Grid, GridList } from "@material-ui/core";

const VoteOptions = (props) => {
  const [datas, setDatas] = useState([]);
  const loadData = async () => {
    // json load 해용
    await setDatas(dummyData.items);
  };

  // 처음에 mount 될 때만 실행하려구 useEffect
  useEffect(() => {
    loadData();
  }, []);
  return (
    <Wrapper>
      <GridList cellHeight={350} cols={3}>
        {datas.map((data, index) => {
          return (
            <Grid key={index}>
              <VoteItem data={data} index={index} />
            </Grid>
          );
        })}
      </GridList>
    </Wrapper>
  );
};

export default VoteOptions;
