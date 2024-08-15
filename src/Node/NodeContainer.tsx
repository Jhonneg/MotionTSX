import { NodeData } from "../utils/types";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import NodeTypeSwitcher from "./NodeTypeSwitcher";

type NodeContainerProps = {
  node: NodeData;
  updateFocusedIndex(index: number): void;
  isFocused: boolean;
  index: number;
};

export default function NodeContainer({
  node,
  index,
  isFocused,
  updateFocusedIndex,
}: NodeContainerProps) {
  const { attribustes, listeners, setNodeRef, transform, transition } =
    useSortable({
      id: node.id,
    });
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };
  return (
    <div>
      <div>⠿</div>
      <NodeTypeSwitcher
        node={node}
        index={index}
        isFocused={isFocused}
        updateFocusedIndex={updateFocusedIndex}
      />
    </div>
  );
}
