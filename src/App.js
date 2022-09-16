import {Routes, Route} from "react-router-dom";

import {LoginPage, MainPage, RegistrationPage} from "./pages";
import './App.css';

function App() {
  return (
    <div className="App">

      <Routes>
        <Route path={'/'} element={<MainPage/>}/>
        <Route path={'/login'} element={<LoginPage/>}/>
        <Route path={'/registration'} element={<RegistrationPage/>}/>
      </Routes>

    </div>
  );
}

export default App;
