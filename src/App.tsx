import "./App.css";
import Page from "./Page/Page";
import { AppStateProvider } from "./state/AppStateContext";
import createPage from "./utils/createPage";

const initialState = createPage();

export default function App() {
  return (
    <AppStateProvider initialState={initialState}>
      <Page />
    </AppStateProvider>
  );
}
