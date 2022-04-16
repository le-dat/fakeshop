import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Loading from "./components/Loading";
function App() {
  return (
    <div className="App">
      <Header />
      <Outlet />
      <Loading />
    </div>
  );
}

export default App;
