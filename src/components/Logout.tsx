import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { account } from "../features/account";

function Logout() {
  const dispatch = useDispatch();
  useEffect(() => {
    sessionStorage.removeItem("authToken");
    dispatch(
      account({
        type: "LOGOUT",
        token: "",
      })
    );
    window.history.back();
  }, []);
  return <div></div>;
}

export default Logout;
