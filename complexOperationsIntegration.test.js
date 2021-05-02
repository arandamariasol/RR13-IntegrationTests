import 'jest';
import * as complexOperations from './complexOperations';

describe('complexOperation - Unit Tests', () => {
  describe('checkEmail', () => {
    it('first test for checkEmail', () => {
      expect(complexOperations.checkEmail(123)).toBe('The email should be an string');
    });
    it('second test for checkEmail', () => {
      expect(complexOperations.checkEmail('testing123')).toBe('The email is invalid');
    });
    it('third test for checkEmail', () => {
      expect(complexOperations.checkEmail('testing123@gmail.com')).toBe('The email is valid');
    });
  });

  describe('calculateArea', () => {
    it('1° test for calculateArea', () => {
      expect(complexOperations.calculateArea('test',2,3)).toBe('test is not supported');
    });
    it('2° test for calculateArea', () => {
      expect(complexOperations.calculateArea('square','two',3)).toBe('number1 and number2 should be numbers');
    });
    it('3° test for calculateArea', () => {
      expect(complexOperations.calculateArea('square',2,'four')).toBe('number1 and number2 should be numbers');
    });
    it('4° test for calculateArea', () => {
      expect(complexOperations.calculateArea('square',2,2)).toBe(4);
    });
    it('5° test for calculateArea', () => {
      expect(complexOperations.calculateArea('rectangle',2,3)).toBe(6);
    });
    it('6° test for calculateArea', () => {
      expect(complexOperations.calculateArea('triangle',2,3)).toBe(3);
    });
    it('7° test for calculateArea', () => {
      expect(complexOperations.calculateArea('circle',2,3)).toBe(12.566370614359172);
    });
    it('8° test for calculateArea', () => {
      expect(complexOperations.calculateArea('square',3)).toBe(0);
    });

  });

  describe('sumGratherThan', () => {
    it('1° test for sumGratherThan', () => {
      expect(complexOperations.sumGratherThan(undefined,3,2)).toBe('The params should be numbers');
    });
    it('2° test for sumGratherThan', () => {
      expect(complexOperations.sumGratherThan(3,'two',4)).toBe('The params should be numbers');
    });
    it('3° test for sumGratherThan', () => {
      expect(complexOperations.sumGratherThan(3,2,[])).toBe('The params should be numbers');
    });
    it('4° test for sumGratherThan', () => {
      expect(complexOperations.sumGratherThan(3,6,7)).toBe('9 is grather than 7');
    });
    it('5° test for sumGratherThan', () => {
      expect(complexOperations.sumGratherThan(3,6,9)).toBe('9 is equal to 9');
    });
    it('6° test for sumGratherThan', () => {
      expect(complexOperations.sumGratherThan(3,2,8)).toBe('5 is less than 8');
    });
  });

  describe('intersectionBetweenArrays', () => {
    it('1° test for intersectionBetweenArrays', () => {
      expect(complexOperations.intersectionBetweenArrays(3,['a','b','c'])).toBe('The params should be arrays');
    });
    it('2° test for intersectionBetweenArrays', () => {
      expect(complexOperations.intersectionBetweenArrays(['a','b','c'], undefined)).toBe('The params should be arrays');
    });
    it('3° test for intersectionBetweenArrays', () => {
      expect(complexOperations.intersectionBetweenArrays(['a','b','c'], ['d','e','f'])).toBe('There are not matching elements');
    });
    it('4° test for intersectionBetweenArrays', () => {
      expect(complexOperations.intersectionBetweenArrays(['a','b','c'], ['c','d','e'])).toEqual(['c']);
    });
  });

  describe('sortArrayOfObjectsByKey', () => {
    it('1° test for sortArrayOfObjectsByKey', () => {
      expect(complexOperations.sortArrayOfObjectsByKey('Rosario', 'city')).toBe('The first param should be an array');
    });
    it('2° test for sortArrayOfObjectsByKey', () => {
      expect(complexOperations.sortArrayOfObjectsByKey([{ city: 'Rosario' }, { city: 'Funes' }, { name: 'Alvear' }], 2)).toBe('The second param should be an string');
    });
    it('3° test for sortArrayOfObjectsByKey', () => {
      expect(complexOperations.sortArrayOfObjectsByKey([{ city: 'Rosario' }, 'Funes', { city: 'Alvear' }], 'city')).toBe('Some elements in the array does not have the city property');
    });
    it('4° test for sortArrayOfObjectsByKey', () => {
      expect(complexOperations.sortArrayOfObjectsByKey([{ city: 'Rosario' }, { city: 'Funes' }, { city: 'Alvear' }], 'city')).toEqual([{"city": "Alvear"}, {"city": "Funes"}, {"city": "Rosario"}]);
    });
    it('4° test for sortArrayOfObjectsByKey', () => {
      expect(complexOperations.sortArrayOfObjectsByKey([{ city: 'Funes' }, { city: 'Rosario' }, { city: 'Alvear' }], 'city')).toEqual([{"city": "Alvear"}, {"city": "Funes"}, {"city": "Rosario"}]);
    });
    it('5° test for sortArrayOfObjectsByKey', () => {
      expect(complexOperations.sortArrayOfObjectsByKey([{ city: 'Alvear' }, { city: 'Alvear' }, { city: 'Alvear' }], 'city')).toEqual([{"city": "Alvear"}, {"city": "Alvear"}, {"city": "Alvear"}]);
    });
  });

  describe('numberOfOddAndEvenNumbers', () => {
    it('1° test for numberOfOddAndEvenNumbers', () => {
      expect(complexOperations.numberOfOddAndEvenNumbers(123)).toBe('The param should be an array');
    });
    it('2° test for numberOfOddAndEvenNumbers', () => {
      expect(complexOperations.numberOfOddAndEvenNumbers([1, 'a', 3])).toBe('The array should have only numbers');
    });
    it('3° test for numberOfOddAndEvenNumbers', () => {
      expect(complexOperations.numberOfOddAndEvenNumbers([1, 2, 3])).toEqual({"even": 1, "odd": 2});
    });
  });
});