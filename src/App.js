import { useEffect, useState } from "react";

function App() {
  var [characters, setCharacters] = useState(0);
  var [sentences, setSentences] = useState("");
  var [words, setWords] = useState(0);

  useEffect(() => {
    setCharacters(sentences.length);

    const array = sentences.trim().split(/\s+/);
    setWords(array.length);
  }, [sentences, words]);

  return (
    <main>
      <h1>Word Counter</h1>
      <p className="tagName">Free online character and word count tool.</p>

      <textarea
        rows={ 9 }
        placeholder="Type or paste your text"
        value={sentences}
        onChange={(e) => setSentences(e.target.value)}
      ></textarea>

      <button 
        className="clearBtn" 
        disabled={sentences.length <= 0}
        onClick={() => {
          setSentences("");
          setWords(0);
        }}
      >Clear</button>

      <div className="results">
        <p>Character: { characters }</p>
        <p>Word: { sentences.length > 0 ? words : 0 }</p>
      </div>

    </main>
  );
}

export default App;
