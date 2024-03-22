import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./component/Home";
import Create from "./component/Create";
import Update from "./component/Update";
import PDelete from "./component/PDelete";
import Read from "./component/Read";
import Pop from "./component/Pop";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Create />} />
          <Route path="/update/:id" element={<Update/>}/>
          <Route path="/delete/:id" element={<PDelete/>}/>
          <Route path="/read/:id" element={<Read/>}/>
        </Routes>
      </BrowserRouter>
      {/* <Pop/> */}

    </div>
  );
}


export default App;