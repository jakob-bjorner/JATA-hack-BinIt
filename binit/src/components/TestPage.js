import React from "react";
import Map from "./Map";
import SignInButton from "./SignInButton";
import TopBar from "./TopBar";
import Form from "./Form";

const TestPage = () => {
  return (
    <div>
      <Form/>
      <TopBar />
      <Map />
      <SignInButton />
    </div>
  );
};

export default TestPage;
