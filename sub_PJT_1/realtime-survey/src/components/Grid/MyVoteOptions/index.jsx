import React, { useEffect, useState } from "react";

import Wrapper from "./styles";
import VoteItem from "../VoteItem";
import { useNowCols } from "../../../common/MediaQueryHooks";

import dummyData from "./dump.json";

// styles
import { Grid, GridList } from "@material-ui/core";

const MyVoteOptions = (props) => {
  const nowCols = useNowCols();
  //const nowCols = useMediaQuery((theme) => theme.breakpoint.down("md"));
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
      <GridList
        //cols={3}
        cols={Number.isInteger(nowCols) ? nowCols : 1}
        cellHeight={"auto"}
      >
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

export default MyVoteOptions;
