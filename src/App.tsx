import { Icon } from "assessment-demo-icon";
import { Input } from "assessment-demo-input";
import { Button } from "assessment-demo-button";
import { Search } from "assessment-demo-combined-search";

import { useState } from "react";
function App() {
  const [isClicked, setIsClicked] = useState(false);
  const [text, setText] = useState("");
  const searchItems = [
    { id: "1", value: "test" },
    { id: "2", value: "Frontend" },
    { id: "3", value: "Backend" },
    { id: "4", value: "Javascript" },
  ];
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div style={{ width: "300px", display: "flex", flexDirection: "column" }}>
        <Icon name="star" color="green" />
        <Button
          label="Click me!"
          primary
          onClick={() => setIsClicked(!isClicked)}
        />
        {isClicked ? <p>Click is successful!</p> : null}
        <Input
          placeholder="Enter some text"
          oninput={(e) => setText(e.target.value)}
        />
        <p>Text from input: {text}</p>
        <Search items={searchItems} />
      </div>
    </div>
  );
}

export default App;
