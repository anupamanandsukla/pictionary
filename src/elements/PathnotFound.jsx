import React from "react";
import { useNavigate } from "react-router-dom";
import { isLoggedIn } from "../utils";
import Text from "./Text";
import uiRoutes from "../config/routeNames";
import Button from "./Button";

function PathnotFound({ message }) {
  let role_name = localStorage.getItem('roles')?.toUpperCase() ?? ''

  const navigate = useNavigate();
  let loggedin = isLoggedIn()

  if (!role_name) {
    navigate(uiRoutes('LOGIN')
    );
  }


  return (
    <div className={`flex flex-col justify-center items-center w-full ${loggedin ? 'h-full' : 'h-screen'}`}>
      <Text className='mb-4 text-base'>
        {message ? message : 'The page you are looking for is not exist.'}
      </Text>
      <Button
        onClick={() => {
          if (isLoggedIn()) {
            navigate(uiRoutes(role_name) + uiRoutes('DASHBOARD'), { replace: true });
          }
          else {
            localStorage.clear();
            window.location = window.location.origin;
          }
        }}
      >
        Go To Home
      </Button>
    </div>
  );
};

export default PathnotFound