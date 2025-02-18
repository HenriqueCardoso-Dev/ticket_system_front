'use client'

import { useEffect, useState } from "react";
import Login from "./auth/login/page";
import DashboardHome from "./dashboard/home/page";

export default function Home() {

  const [isLogged, setIsLogged] = useState<boolean>(false);

  function loginValidate() {
    //aqui vai a lógica pra ver
    setIsLogged(false);
  }

  useEffect(() => {loginValidate();});

  return (<>
    {
      //if is not logged redirect to login page
      !isLogged && <Login/>
    }

    {
      isLogged && <DashboardHome/>
    }
  </>);
}
