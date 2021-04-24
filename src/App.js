import AddList from "./views/addList";
import ListData from "./views/listData";
import { Provider } from "react-redux"
import store from "./redux/store";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <AddList />
        <ListData />
      </Provider>
    </div>
  );
}

export default App;
