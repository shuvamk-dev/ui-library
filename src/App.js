import React, { useState } from "react";
import "./App.css";
import { DROPDOWN_OPTIONS } from "./common/data/dropdown";
import Dropdown from "./components/dropdown";

const App = () => {
  const [selectedOption, setSelectedOption] = useState(DROPDOWN_OPTIONS[0]);

  return (
    <div className="app">
      <Dropdown
        label={"Why do you like Developer's Den?"}
        options={DROPDOWN_OPTIONS}
        selectedOption={selectedOption}
        setSelectedOption={setSelectedOption}
      />
    </div>
  );
};

export default App;
