import { nanoid } from "nanoid";
import { Page } from "./types";

export default function createPage() {
  const slug = nanoid();
  const id = nanoid();

  const page: Page = {
    title: "Untitled",
    id,
    slug,
    nodes: [],
    cover: "notes-3d.png",
  };
  return page;
}
