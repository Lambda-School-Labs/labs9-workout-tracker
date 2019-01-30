import React, { useEffect, useState, useContext } from "react";
import { Store } from '../../../index';
import styled from "styled-components";
import * as d3 from "d3";


import Details from "./Details";
import TabSelection from "./TabSelection";
import Graph from "./Graph";

const ProgressGraph = props => {

  const { state } = useContext(Store);

  return (
    <>
      <TabSelection />
      <GraphContainer>
        <Graph />
        <Details></Details>
      </GraphContainer>
    </>
  );
};

export default ProgressGraph;

const GraphContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
`;


// const Graph = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   height: 225px;
//   width: 75%;
//   background-color: ${props => props.theme.accent};
// `;