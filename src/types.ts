export type Meaning = {
  partOfSpeech: string;
  definitions: {definition: string}[];
}

export type Definition = {
  word: string;
  meanings: Meaning[];
}
