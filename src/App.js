import {
    BrowserRouter,
    Routes,
    Route,
    
  } from "react-router-dom";
  
  import Project from "./src/project";
  
  
  import Project1 from "./src/bedroom";
  import Project2 from "./src/bedroom1";
  import Project3 from "./src/bedroom2";
  import Project4 from "./src/bedroom3";
  import Hall1 from "./src/hall1";
  import Hall2 from "./src/hall2";
  import Hall3 from "./src/hall3";
  
 
  
  function App() {
    
  
    return (
        <>
        <BrowserRouter>
        <Routes>
       
  
        <Route path="/project" element={<Project />} />
  
        
  
        <Route path="/bedroom" element={<Project1 />} />
  
        <Route path="/bedroom1" element={<Project2 />} />
  
        <Route path="/bedroom2" element={<Project3 />} />
  
        <Route path="/bedroom3" element={<Project4 />} />
  
        <Route path="/hall1" element={<Hall1 />} />
  
        <Route path="/hall2" element={<Hall2 />} />
  
        <Route path="/hall3" element={<Hall3/>} />
  
        
        </Routes>
      </BrowserRouter>
      </>
    )
  }
  export default App;
  