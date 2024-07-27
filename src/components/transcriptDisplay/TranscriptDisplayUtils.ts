import { Word } from "../../types/dataTypes";

const isWordActive = (currentTime: number, word: Word): boolean =>
  currentTime >= word.time && currentTime < word.time + word.duration;

const findActiveWordIndex = (currentTime: number, words: Word[]): number => {
  return words.findIndex((word) => isWordActive(currentTime, word));
};

const calculateCurrentRowStartIndex = (
  currentWordIndex: number,
  wordsPerRow: number
): number => {
  return Math.floor(currentWordIndex / wordsPerRow) * wordsPerRow;
};

export { findActiveWordIndex, calculateCurrentRowStartIndex , isWordActive };
