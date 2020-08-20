import React, { PureComponent } from "react";
import { render } from "react-dom";

import VideoContainer from "./VideoContainer";

const QRscan = class extends PureComponent {
  displayName = "App";
  state = { stop: false };

  render() {
    const { stop } = this.state;

    return (
      <VideoContainer stop={this.state.stop}>
        <button onClick={() => this.setState({ stop: !stop })}>
          {stop ? "Start" : "Stop"}
        </button>
      </VideoContainer>
    );
  }
};

export default QRscan;
