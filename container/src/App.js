import Router from './routers';
import { createBrowserHistory } from "history";

createBrowserHistory(); // * NOTE: do not remove this else code won't work


function App() {
  return (<Router />);
}

export default App;
