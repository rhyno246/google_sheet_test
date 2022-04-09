import { useEffect } from "react";
import axiosConfig from "./axiosConfig/axios";

function App() {
  const getData = async () => {
    try {
      const data = await axiosConfig.get(
        `https://script.google.com/macros/s/AKfycby3U4LPKDJHTSV9yRk5wiEH-6q2xy3CsoWLCxg28jJfTFzYGQo/exec`
      );
      console.log(data);
    } catch (error) {}
  };
  useEffect(() => {
    getData();
  }, []);

  return <div className="App">dssdsd</div>;
}

export default App;
