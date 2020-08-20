import React, { Component } from "react";
import QrReader from "react-qr-reader";

export default class Qrreader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      delay: 1000,
      result: "No result",
    };

    this.handleScan = this.handleScan.bind(this);
  }
  handleScan(data) {
    console.log("scanned!");
    this.setState({
      result: data,
    });
    console.log(data);
  }
  handleError(err) {
    console.error(err);
  }
  render() {
    const previewStyle = {
      height: 100,
      width: 150,
    };

    return (
      <div>
        <QrReader
          delay={this.state.delay}
          previewStyle={previewStyle}
          onError={this.handleError}
          onScan={this.handleScan}
        />
        <p>{this.state.result}</p>
      </div>
    );
  }
}
