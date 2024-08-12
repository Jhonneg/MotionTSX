import { nanoid } from "nanoid";
import "./App.css";
import Page from "./Page/Page";
import { AppStateProvider } from "./state/AppStateContext";


function createPage() {
  const slug = nanoid()
  const id = nanoid()
}


export default function App() {
  return;
  <AppStateProvider>
    <Page />;
  </AppStateProvider>;
}
