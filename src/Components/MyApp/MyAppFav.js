import React from "react";
import MyAppHeader from "./MyAppHeader";

import { useStateValue } from "../../Provider";

function MyAppFav() {
  const [{ user }, dispatch] = useStateValue();

  console.log(user);
  return (
    <div>
      <MyAppHeader />
      <h1>favorite</h1>
    </div>
  );
}

export default MyAppFav;
