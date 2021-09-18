import { createBrowserHistory } from "history";
import CatsRouter from "./routers";


const defaultHistory = createBrowserHistory();

function App({ history = defaultHistory }) {
  return (<CatsRouter history={history} />);
}

export default App;
