import { NodeData, NodeType, Page } from "../utils/types";
import { useImmer } from "use-immer";

export default function usePageState(initialState: Page) {
  const [page, setPage] = useImmer<Page>(initialState);

  function addNode(node: NodeData, index: number) {
    setPage((draft) => draft.nodes.splice(index, 0, node));
  }

  function removeNodeByIndex(nodeIndex: number) {
    setPage((draft) => draft.nodes.splice(nodeIndex, 1));
  }

  function changeValueNode(nodeIndex: number, value: string) {
    setPage((draft) => (draft.nodes[nodeIndex].value = value));
  }

  function changeNodeType(nodeIndex: number, type: NodeType) {
    setPage((draft) => {
      draft.nodes[nodeIndex].type = type;
      draft.nodes[nodeIndex].value = "";
    });
  }

  function setNodes(nodes: NodeData[]) {
    setPage((draft) => (draft.nodes = nodes));
  }

  function setTitle(title: string) {
    setPage((draft) => (draft.title = title));
  }
  function setCoverImage(coverImage: string) {
    setPage((draft) => (draft.cover = coverImage));
  }

  return {
    nodes: page.nodes,
    title: page.title,
    cover: page.cover,
    changeNodeType,
    changeValueNode,
    addNode,
    removeNodeByIndex,
    setTitle,
    setCoverImage,
    setNodes,
  };
}
