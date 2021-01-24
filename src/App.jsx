import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Info from "./components/Info";
import About from "./components/About";
import Header from "./components/Header";
import Posts from "./components/Posts";
import Error404 from "./components/Error404";

import styled from "styled-components";

const App = () => {
  return (
    <BrowserRouter>
      {/* Componente de react-router para indicar que usaremos multiples pages */}
      <ContainerMain>
        <Header />
        <Main>
          <Switch>
            <Route path="/" exact={true} component={Home} />
            <Route path="/blog" component={Blog} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/info" component={Info} />
            <Route path="/post/:id" component={Posts} />
            <Route component={Error404} />
          </Switch>
        </Main>
      </ContainerMain>
    </BrowserRouter>
  );
};
const ContainerMain = styled.div`
  padding: 40px;
  width: 90%;
  max-width: 700px;
`;
const Main = styled.main`
  padding: 40px;
  background: rgb(22, 0, 36);
  background: linear-gradient(
    90deg,
    rgba(22, 0, 36, 0.5524475524475525) 0%,
    rgba(52, 43, 73, 0.8717948717948718) 58%,
    rgba(0, 212, 255, 1) 100%
  );
  border-radius: 10px;
`;
export default App;
