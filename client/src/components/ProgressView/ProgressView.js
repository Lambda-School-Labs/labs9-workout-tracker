import React from "react";
import SideNav from "../SideNav";
import SubmitProgress from "./SubmitProgress";
import ProgressTracker from "./ProgressTracker";
import ProgressList from "./ProgressList/ProgressList";
import styled from "styled-components";

const ProgressViewStyle = styled.div`
  display: flex;
`;

class ProgressView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      metrics: []
    };
  }

  componentDidMount() {
    this.setState({
      metrics: this.props.metrics
    });
  }

  render() {
    return (
      <ProgressViewStyle>
        <SideNav />
        <SubmitProgress user={this.props.user} />
        <div>
          <ProgressTracker metrics={this.props.user.metrics} />
          <ProgressList metrics={this.props.user.metrics} />
        </div>
      </ProgressViewStyle>
    );
  }
}

export default ProgressView;
