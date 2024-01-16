import { Route, Routes } from "react-router";
import Meeting from "./Page/Meeting.jsx";
import Main from "./Main.jsx";
import Login from "./components/Login";
import Private from "./Page/PrivateRoute";

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/meeting' element={
          <Private>
            <Meeting />
          </Private>
        } />
        <Route path='/login' element={<Login />} />
      </Routes>
    </>
  )
}

export default App;
