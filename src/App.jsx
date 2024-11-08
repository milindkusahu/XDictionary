import { useState } from "react";

const data = [
  {
    word: "React",
    meaning: "A JavaScript library for building user interfaces.",
  },

  { word: "Component", meaning: "A reusable building block in React." },

  { word: "State", meaning: "An object that stores data for a component." },
];

const App = () => {
  const [words, setWords] = useState(data);
  const [input, setInput] = useState("");
  const [flag, setFlag] = useState(false);

  const searchHandler = () => {
    const findWord = data.filter((ele) =>
      ele.word.toLowerCase().includes(input.toLowerCase())
    );

    setWords(findWord);
    setFlag(true);
  };

  return (
    <div>
      <h1>Dictionary App</h1>
      <div>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={() => searchHandler()}>Search</button>
      </div>
      <b>
        <p>Definition:</p>
      </b>

      {flag &&
        (words.length > 0 ? (
          words.map((ele, index) => <p key={index}>{ele.meaning}</p>)
        ) : (
          <p>Word not found in the dictionary.</p>
        ))}
    </div>
  );
};

export default App;
