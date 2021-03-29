import React, {FC} from "react";
import ResultPage from "./resultPage";
import TopHeader from "../components/topPage/topHeader";
import TopMain from "../components/topPage/topMain";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

const TopPage: FC = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <TopHeader />
            <TopMain />
          </Route>
          <Route  path="/search/:keyword" exact>
            <ResultPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default TopPage;