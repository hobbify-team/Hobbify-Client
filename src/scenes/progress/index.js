import React, { useState } from "react";
import styled from "styled-components";
import CalendarHeatmap from "react-calendar-heatmap";

const Content = styled.div`
  margin: 20px;
`;

export default function Progress() {
  const [data, setData] = useState([
    { date: "2020-07-11", count: 4 },
    { date: "2020-07-12", count: 1 },
    { date: "2020-07-13", count: 3 },
  ]);

  const [numDays] = useState(365);

  const onClick = (value) => {
    console.log(value);
  };

  return (
    <Content>
      <h3>How are we doing today?</h3>
      <div style={{ width: "100%" }}>
        <CalendarHeatmap
          endDate={new Date("2021-01-01")}
          numDays={numDays}
          values={data}
          onClick={onClick}
        />
      </div>
    </Content>
  );
}
