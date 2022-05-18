import { useState } from "react";
import "./App.css";
import { ChartBar } from "./pages/ChartBar/ChartBar";

import { Home } from "./pages/Home/Home";


function App() {

  const [isFormSubmited, setFormSubmited] = useState(false);

  const submitForm=()=>setFormSubmited(true)
  
  return (
    <div className="App">
    {
      !isFormSubmited?(<Home submitForm={submitForm}/>):(<ChartBar/>)
    }
    </div>
  );
}

export default App;
