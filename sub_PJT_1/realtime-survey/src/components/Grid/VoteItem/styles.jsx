import styled from "styled-components";

const Wrapper = styled.div`
  font-size: 1.1rem;
  text-align: center;
  .hoverImage:hover {
    transform: scale(1.1);
    z-index: 1;
  }
  ,
  & .leftAlign {
    text-align: left;
  }
  ,
  & .rightAlign {
    text-align: right;
  }
`;

export default Wrapper;
