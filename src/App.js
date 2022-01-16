import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/Home/Home";
import { createBrowserHistory } from "history";
import HomeTemplate from "./templates/HomeTemplate/HomeTemplate";
import ListCourse from "./pages/ListCourse/ListCourse";
import DetailCourse from "./pages/Home/DetailCourse/DetailCourse";
import TypeJobMarketplace from "./pages/Home/TypeJobMarketplace/TypeJobMarketplace";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import DetailPerson from "./pages/Home/DetailPerson/DetailPerson";
import UserTemplate from "./templates/UserTemplate/UserTemplate";
import SignIN from "./pages/SignIN/SignIN";
import SignUP from "./pages/SingUP/SignUP";
export const history = createBrowserHistory();

function App() {
  return (
    <div className="App">
      <BrowserRouter history={history}>
        <Switch>
          <HomeTemplate exact path="/home" Component={Home} />
          <HomeTemplate exact path="/listcourse/:name" Component={ListCourse} />
          <HomeTemplate
            exact
            path="/detailcourse/:id"
            Component={DetailCourse}
          />
          <HomeTemplate
            exact
            path="/typejobmarketplace/:id"
            Component={TypeJobMarketplace}
          />
          <UserTemplate
            exact
            path="/usertemplate/signin"
            Component={SignIN}
          />
          <UserTemplate
            exact
            path="/usertemplate/signup"
            Component={SignUP}
          />
          
          <HomeTemplate
            exact
            path="/detailperson/:id"
            Component={DetailPerson}
          />
          <HomeTemplate exact path="/" Component={Home} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
