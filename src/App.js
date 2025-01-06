import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './Pages/Home';
import Header from "./Components/Header";
import { createContext } from "react";
import { Provider } from "react-redux";
import store from "./redux/store";

const myContext = createContext();
function App() {
  return (
    <BrowserRouter>
        <Provider store={store}>
          <Header />
          <Routes>
            <Route path="/" exact={true} element={<Home />} />
            {/* <Route path="/" exact={true} element={<Page/>}/> */}

          </Routes>
        </Provider>
    </BrowserRouter>
  );
}

export default App;
export {myContext};
