import { NodeData } from "../utils/types";
import { useState, Dispatch, SetStateAction, useEffect } from "react";

type UseFocusedNodeIndexProps = {
  nodes: NodeData[];
};

export default function useFocusedNodeIndex({
  nodes,
}: UseFocusedNodeIndexProps): [number, Dispatch<SetStateAction<number>>] {
  const [focusedNodeIndex, setFocusedNodeIndex] = useState(0);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "ArrowUp") {
        setFocusedNodeIndex((index) => Math.max(index - 1, 0));
      }
      if (event.key === "ArrowDown") {
        setFocusedNodeIndex((index) => Math.min(index + 1, nodes.length - 1));
      }
    }
    document.addEventListener("keydown", onKeyDown);

    return () => document.removeEventListener("keydown", onKeyDown);
  }, [nodes]);

  return [focusedNodeIndex, setFocusedNodeIndex];
}
