import { useEffect, useState } from "react";
import axiosConfig from "./axiosConfig/axios";
function App() {
  const SHEET_ID = "11O7lAcSXbwim6Z1mPqLGhyAK-_3FvxDpCUi1YLGPM8E";

  const [data, setData] = useState([]);
  const getSheetValues = async () => {
    try {
      const response = await axiosConfig.get(
        `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/A:F`
      );
      setData(response.values);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getSheetValues();
  }, []);

  return (
    <div className="App">
      {data ? (
        <div className="data">
          {data.map((item, i) => (
            <span key={i}>{item}</span>
          ))}
        </div>
      ) : null}
    </div>
  );
}

export default App;
