import { AppContext } from "../App1";
import { useContext } from "react";

export const Home = () => {
  const { username } = useContext(AppContext);
  return <h1>This is the home page and user: {username}</h1>;
};
