import React, { useContext } from "react";
import Wrapper from "./styles";

import MessageIcon from "@material-ui/icons/Message";
import CheckIcon from "@material-ui/icons/Check";

import { CommonContext } from "../../../context/CommonContext";

import voteDetailData from "./dump.json";

const serverImgUrl = `https://ssafy-viba-s3.s3.ap-northeast-2.amazonaws.com/public/`;

const VoteItem = (props) => {
  const { data } = props;

  const { setInfoData, setInfoDetailDialogOpen } = useContext(CommonContext);

  const infoOpenHandler = async (event) => {
    setInfoData(voteDetailData);
    setInfoDetailDialogOpen(true);
  };

  return (
    <Wrapper>
      <img
        src={`${serverImgUrl}${data.vote_img_url}`}
        alt="random"
        className="hoverImage"
        width="100%"
        height="300px"
        onClick={infoOpenHandler}
      />
      <div>
        <span className="leftAlign">{data.vote_title}</span>
        <span className="rightAlign">
          <CheckIcon className="check" /> <MessageIcon />
        </span>
      </div>
    </Wrapper>
  );
};

export default VoteItem;
