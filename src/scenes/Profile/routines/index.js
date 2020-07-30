import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as routinesAction from "../../../actions/routinesAction";
import { Tabs } from "antd";
import CardRoutine from "../../../components/CardRoutine";

const { TabPane } = Tabs;

const RoutinesTabs = ({ routinesPrivate, routinesPublic, getRoutines }) => {
  const information = localStorage.getItem("information");
  const userTransform = JSON.parse(information);

  useEffect(() => {
    getRoutines(userTransform.username);
  }, []);
  return (
    <Tabs defaultActiveKey="1">
      <TabPane tab="Public" key="1">
        {routinesPublic.length === 0 ? (
          <p>there are no public routines</p>
        ) : (
          routinesPublic.map((r) => <CardRoutine {...r} />)
        )}
      </TabPane>
      <TabPane tab="Private" key="2">
        {routinesPrivate.map((r) => (
          <CardRoutine {...r} />
        ))}
      </TabPane>
    </Tabs>
  );
};

const mapStateToProps = (reducers) => {
  return reducers.routinesReducer;
};

export default connect(mapStateToProps, routinesAction)(RoutinesTabs);
