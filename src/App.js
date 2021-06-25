import './App.css';
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import Main from './Main';
import Subpage from './Subpage';
import Secondpage from './Secondpage';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={"/"} exact component={Main}></Route>
        <Route path={"/Subpage"} component={Subpage}></Route>
        <Route path={"/Secondpage"} component={Secondpage}></Route>
      </Switch>
    </BrowserRouter>
  )
}
export default App;