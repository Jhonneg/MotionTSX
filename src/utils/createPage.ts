import { nanoid } from "nanoid";

export default function createPage() {
  const slug = nanoid();
  const id = nanoid();

  const page = {
    title: "Untitled",
    id,
    slug,
    nodes: [],
    cover: "notes-3d.png",
  };
  return page;
}
