import useFocusedNodeIndex from "./useFocusedNodeIndex";
import Cover from "./Cover";
import Spacer from "./Spacer";
import { Title } from "./Title";
import { nanoid } from "nanoid";
import { useAppState } from "../state/AppStateContext";
import NodeTypeSwitcher from "../Node/NodeTypeSwitcher";

export default function Page() {
  const { title, nodes, addNode, setTitle } = useAppState();

  const [focusedNodeIndex, setFocusedNodeIndex] = useFocusedNodeIndex({
    nodes,
  });

  return (
    <>
      <Cover />
      <div>
        <Title addNode={addNode} title={title} changePageTitle={setTitle} />
        {nodes.map((node, index) => (
          <NodeTypeSwitcher
            key={node.id}
            node={node}
            isFocused={focusedNodeIndex === index}
            updateFocusedIndex={setFocusedNodeIndex}
            index={index}
          />
        ))}
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
