import { useParams } from "react-router-dom"; 
import { Definition, Meaning } from "../types"; 
import useSwr from "swr"; 

const WordMeaning = ({meaning}: {meaning: Meaning}) => { 
  return ( 
    <div className="m-4 p-2"> 
      <h5>{meaning.partOfSpeech}</h5> 
      <div> 
        {meaning.definitions.map((def, i) => 
          <p key={def.definition}>{i+1}. {def.definition}</p>)} 
      </div>
    </div>
  ) 
} 

const DefinitionContent = () => { 
  const { word } = useParams(); 
  const { data, error } = useSwr(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`, 
    (url) => fetch(url).then((res) => res.json())) 

  if (error) return <div>an error occurred: {error}</div>; 
  if (!data) return <div>loading...</div> 
  const def: Definition = data[0]; 

  return ( 
    <div className="flex flex-col items-center"> 
      <h2 className="text-4xl p-4 m-2">{word}</h2> 
      <div className="flex flex-wrap"> 
        {def ? def.meanings.map((meaning:Meaning) => 
          <WordMeaning key={meaning.partOfSpeech} meaning={meaning} />) 
          : <div>no definition found</div>} 
      </div> 
    </div> 
  ) 
} 

export default DefinitionContent; 
