import useFocusedNodeIndex from "./useFocusedNodeIndex";
import Cover from "./Cover";
import Spacer from "./Spacer";
import { Title } from "./Title";
import { nanoid } from "nanoid";
import { useAppState } from "../state/AppStateContext";
import { DndContext, DragOverlay, DragOverEvent } from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import NodeContainer from "../Node/NodeContainer";

export default function Page() {
  const { title, nodes, addNode, reorderNodes, setTitle } = useAppState();

  const [focusedNodeIndex, setFocusedNodeIndex] = useFocusedNodeIndex({
    nodes,
  });

  function handleDragEvent(event: DragOverEvent) {
    const { active, over } = event;
    if (over?.id && active.id !== over?.id) {
      reorderNodes(active.id as string, over.id as string);
    }
  }

  return (
    <>
      <Cover />
      <div>
        <Title addNode={addNode} title={title} changePageTitle={setTitle} />
        <DndContext onDragEnd={handleDragEvent}>
          <SortableContext items={nodes} strategy={verticalListSortingStrategy}>
            {nodes.map((node, index) => (
              <NodeContainer
                key={node.id}
                node={node}
                isFocused={focusedNodeIndex === index}
                updateFocusedIndex={setFocusedNodeIndex}
                index={index}
              />
            ))}
          </SortableContext>
          <DragOverlay />
        </DndContext>
        <Spacer
          showHint={!nodes.length}
          handleClick={() => {
            addNode({ type: "text", value: "", id: nanoid() }, nodes.length);
          }}
        />
      </div>
    </>
  );
}
