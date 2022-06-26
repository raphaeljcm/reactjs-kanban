import { createContext } from "react";

export default createContext({
  lists: [{}],
  move: (fromList: number, targetListIndex: number, from: number, to: number) => {},
});