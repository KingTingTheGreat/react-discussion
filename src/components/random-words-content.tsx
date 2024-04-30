import React, { useState } from "react";

const WordComponent = ({word}: {word:string}) => {
  return (
    <p className="p-4 m-2 rounded-xl bg-blue-200">{word}</p>
  )
}

const RandomWordsContent = () => {
  const [numWords, setNumWords] = useState(5);

  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setNumWords(Number(e.target.value));
  }

  return (
    <div className="flex flex-col items-center">
      <input className="border-black border-2 p-2 text-black" 
        type="number" placeholder="Number of words" onChange={handleChange} />
      <div id="random-words">
        <WordComponent word={numWords.toString()} />
      </div>
    </div>
  )
}

export default RandomWordsContent;
