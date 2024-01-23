import { ChangeProfile } from "./changeProfile";
import { AppContext } from "../App1";
import { useContext } from "react";

export const Menu = () => {
  const { username } = useContext(AppContext);
  return (
    <div>
      This is the menu page and user is:{username} <ChangeProfile />
    </div>
  );
};
