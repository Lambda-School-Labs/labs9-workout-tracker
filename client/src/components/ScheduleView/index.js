import React from "react";
import Calendar from "./Calendar";
import styled from "styled-components";
import requireAuth from "../../requireAuth";

const ScheduleView = () => {
  return (
    <ScheduleViewStyle>
      <h2>My Scheduled Workouts</h2>
      <Calendar/>
    </ScheduleViewStyle>
  );
}

const ScheduleViewStyle = styled.div`
  width: 95%;
  display: flex;
  flex-direction:column;
  position: absolute;
  padding: 0 2%;
  h2 {
    align-self:baseline;
    margin-left: 2%;

    @media(max-width:690px) {
      align-self:center;
    }
  }
  @media(max-width:690px) {
    width:100vw;
    padding:0;
  }
`;

export default requireAuth(ScheduleView);