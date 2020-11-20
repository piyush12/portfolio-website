import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import Layout from "./components/Layout";
import useToggleTheme from "./utils/useToggleTheme";

const HomePage = lazy(() => import("./Pages/HomePage"));
const ProjectPage = lazy(() => import("./Pages/Project"));
const SkillPage = lazy(() => import("./Pages/SkillPage"));

function App() {
  const theme = useToggleTheme();
  const mode = { theme: theme.theme };
  return (
    <ThemeProvider theme={mode}>
      <Router>
        <Layout>
          <Suspense fallback="...loading">
            <Switch>
              <Route path="/" exact component={HomePage} />
              <Route path="/skills" component={SkillPage} />
              <Route path="/projects" component={ProjectPage} />
            </Switch>
          </Suspense>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
