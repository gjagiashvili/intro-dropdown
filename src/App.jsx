import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";

function App() {
  const [mobile, setMobile] = useState(false);

  return (
    <>
      <div className={`container ${mobile ? "overflow" : null}  `}>
        <Header mobile={mobile} setMobile={setMobile} />
        <Home />
      </div>
    </>
  );
}

export default App;
