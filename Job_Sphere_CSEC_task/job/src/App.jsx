import {BrowserRouter, Routes, Route} from 'react-router-dom' 
import Home from "./pages/Home";
import Login from "./pages/login";

const App = () => {
  return (
    <div>
      <div><BrowserRouter>
      <Routes>
        <Route index element = {<Home/>}/>
         <Route path="/Login" element={<Login/>} />
      </Routes>
      </BrowserRouter></div>
      
    </div>
    
   
   
  );
};

export default App;
