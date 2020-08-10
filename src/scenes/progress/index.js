import React, { useState } from "react";
import styled from "styled-components";
import CalendarHeatmap from "react-calendar-heatmap";
import { connect } from "react-redux";
import './colors.css'

const Content = styled.div`
  margin: 20px;
`;

const Progress = ({ activeHabits }) => {

  const [data, setData] = useState([
    { date: "2020-07-11", count: 4 },
    { date: "2020-07-12", count: 1 },
    { date: "2020-07-13", count: 3 },
    { date: "2020-08-05", count: 4 },
    { date: "2020-08-04", count: 3 },
    { date: "2020-08-03", count: 2 },
    { date: "2020-08-02", count: 1 },
  ]);

  // const [numDays] = useState(365);

  const onClick = (value) => {
    console.log(value);
  };

  return (
    <Content>
      <h3>How are we doing today?</h3>
      <p>{`Today, you have ${activeHabits} active habits`}</p>
      <div style={{ width: "100%" }}>
        <CalendarHeatmap
          startDate={new Date("2020-07-01")}
          endDate={new Date()}
          numDays={120}
          values={data}
          onClick={onClick}
          classForValue={(value) => {
            if(!value) {
              return 'color-empty'
            }
            return `color-scale-${value.count}`
          }}
        />
      </div>
    </Content>
  );
}

const mapStateToProps = state => {
  return {
    activeHabits: state
  }
}

export default connect(mapStateToProps, null)(Progress)
