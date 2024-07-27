import { calculateCurrentRowStartIndex, findActiveWordIndex, isWordActive } from './TranscriptDisplayUtils';
import { Word } from '../../types/dataTypes';

describe('TranscriptDisplayUtils', () => {
  const words: Word[] = [
    { time: 0, duration: 2, text: 'Hello' },
    { time: 2, duration: 2, text: 'verbit' },
    { time: 4, duration: 2, text: 'this' },
    { time: 6, duration: 2, text: 'is' },
    { time: 8, duration: 2, text: 'a' },
    { time: 10, duration: 2, text: 'test' },
  ];

  describe('isWordActive', () => {
    it('should return true if the word is active', () => {
      expect(isWordActive(1, words[0])).toBe(true);
    });

    it('should return false if the word is not active', () => {
      expect(isWordActive(3, words[0])).toBe(false);
    });
  });

  describe('findActiveWordIndex', () => {
    it('should return the correct active word index', () => {
      expect(findActiveWordIndex(1, words)).toBe(0);
      expect(findActiveWordIndex(3, words)).toBe(1);
    });

    it('should return -1 if no word is active', () => {
      expect(findActiveWordIndex(20, words)).toBe(-1);
    });
  });

  describe('calculateCurrentRowStartIndex', () => {
    it('should return the start index of the current row', () => {
      expect(calculateCurrentRowStartIndex(0, 10)).toBe(0);
      expect(calculateCurrentRowStartIndex(5, 10)).toBe(0);
      expect(calculateCurrentRowStartIndex(9, 10)).toBe(0);
      expect(calculateCurrentRowStartIndex(10, 10)).toBe(10);
      expect(calculateCurrentRowStartIndex(15, 10)).toBe(10);
      expect(calculateCurrentRowStartIndex(23, 10)).toBe(20);
      expect(calculateCurrentRowStartIndex(30, 10)).toBe(30);
      expect(calculateCurrentRowStartIndex(35, 10)).toBe(30);
    });
  
    it('should handle cases where wordsPerRow is 1', () => {
      expect(calculateCurrentRowStartIndex(0, 1)).toBe(0);
      expect(calculateCurrentRowStartIndex(1, 1)).toBe(1);
      expect(calculateCurrentRowStartIndex(2, 1)).toBe(2);
      expect(calculateCurrentRowStartIndex(10, 1)).toBe(10);
    });
  
    it('should handle cases where wordsPerRow is greater than currentWordIndex', () => {
      expect(calculateCurrentRowStartIndex(0, 20)).toBe(0);
      expect(calculateCurrentRowStartIndex(5, 20)).toBe(0);
      expect(calculateCurrentRowStartIndex(19, 20)).toBe(0);
    });
  });
});
