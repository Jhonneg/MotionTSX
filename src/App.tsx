import "./App.css";
import Page from "./Page/Page";
import { AppStateProvider } from "./state/AppStateContext";
import createPage from "./utils/createPage";
import { Route, Routes } from "react-router-dom";

const initialState = createPage();

export default function App() {
  return (
    <Routes>
      <Route>
        <AppStateProvider initialState={initialState}>
          <Page />
        </AppStateProvider>
      </Route>
    </Routes>
  );
}
