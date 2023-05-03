import React, { useEffect, useContext } from "react";
import { AppState } from "../context";
import { useNavigate } from "react-router-dom";
const Protected = (props) => {
  const { Component } = props;
  const appData = useContext(AppState);
  const navigate = useNavigate();

  useEffect(() => {
    if (appData.login != true) {
      navigate("/login");
    }
  });

  return (
    <>
      <Component />
    </>
  );
};

export default Protected;
