import Router from './routers';
import { createBrowserHistory } from "history";

const defaultHistory = createBrowserHistory();


function App({ history = defaultHistory }) {
  return (<Router history={history} />);
}

export default App;
