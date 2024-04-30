import React, { useState } from "react";
import useSwr from "swr";

const WordComponent = ({ word }: { word: string }) => {
	return <p className="p-4 m-2 rounded-xl bg-blue-200">{word}</p>;
};

const RandomWordsContent = () => {
	const [numWords, setNumWords] = useState(5);
	const { data, error } = useSwr(`https://random-word-api.herokuapp.com/word?number=${numWords}`, (url) =>
		fetch(url).then((res) => res.json())
	);

	if (error) return <div>an error occurred: {error}</div>;

	console.log(`data from api: [${data}]`);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setNumWords(Number(e.target.value));
	};

	return (
		<div className="flex flex-col items-center">
			<input
				className="border-black border-2 p-2 text-black"
				type="number"
				placeholder="Number of words"
				onChange={handleChange}
			/>
			<div id="random-words" className="flex flex-wrap m-1 p-4 w-3/5 justify-center">
				{!data ? <div>loading</div> : data.map((word: string) => <WordComponent word={word} />)}
			</div>
		</div>
	);
};

export default RandomWordsContent;
