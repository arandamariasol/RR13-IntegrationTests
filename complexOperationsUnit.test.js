import 'jest';
import * as complexOperations from './complexOperations';
import * as basicOperations from './basicOperations';


describe('complexOperation - Unit Tests', () => {
  describe('checkEmail', () => {
    beforeEach(() => {
        jest.restoreAllMocks();
    })
    it('test for checkEmail', () => {
      jest.spyOn(basicOperations, 'isString').mockReturnValue('string')
      jest.spyOn(basicOperations, 'validateEmail').mockReturnValue(true)
      expect(complexOperations.checkEmail('testing@gmail.com')).toBe('The email is valid');
    });
  });

  describe('calculateArea', () => {
    beforeEach(() => {
        jest.restoreAllMocks();
    })
    it('test for calculateArea, figure rectangle', () => {
        jest.spyOn(basicOperations, 'isSupportedFigure').mockReturnValue(true)
        jest.spyOn(basicOperations, 'isNumber').mockReturnValue(true)
        jest.spyOn(basicOperations, 'multip').mockReturnValue(6)
        expect(complexOperations.calculateArea('rectangle',2,3)).toBe(6);
    });

    it('test for calculateArea, figure square', () => {
      jest.spyOn(basicOperations, 'isSupportedFigure').mockReturnValue(true)
      jest.spyOn(basicOperations, 'isNumber').mockReturnValue(true)
      jest.spyOn(basicOperations, 'multip').mockReturnValue(4)
      expect(complexOperations.calculateArea('square',2,2)).toBe(4);
    });

    it('test for calculateArea, figure triangle', () => {
      jest.spyOn(basicOperations, 'isSupportedFigure').mockReturnValue(true)
      jest.spyOn(basicOperations, 'isNumber').mockReturnValue(true)
      jest.spyOn(basicOperations, 'multip').mockReturnValue(6)
      jest.spyOn(basicOperations, 'division').mockReturnValue(3)
      expect(complexOperations.calculateArea('triangle',2,3)).toBe(3);
    });

    it('test for calculateArea, figure circle', () => {
      jest.spyOn(basicOperations, 'isSupportedFigure').mockReturnValue(true)
      jest.spyOn(basicOperations, 'isNumber').mockReturnValue(true)
      jest.spyOn(basicOperations, 'exponent').mockReturnValue(4)
      expect(complexOperations.calculateArea('circle',2)).toBe(12.566370614359172);
    });

    it('test for calculateArea, invalid figure', () => {
      jest.spyOn(basicOperations, 'isSupportedFigure').mockReturnValue(true)
      jest.spyOn(basicOperations, 'isNumber').mockReturnValue(true)
      expect(complexOperations.calculateArea('figure123',2,3)).toBe('figure123 is not supported');
    });
  });

  describe('sumGratherThan', () => {
    beforeEach(() => {
      jest.restoreAllMocks();
    })
    it('test for sumGratherThan, grather than case', () => {
      jest.spyOn(basicOperations, 'isNumber').mockReturnValue(true)
      jest.spyOn(basicOperations, 'sum').mockReturnValue(6)
      expect(complexOperations.sumGratherThan(4,2,3)).toBe('6 is grather than 3');
    });
    it('test for sumGratherThan, equal to case', () => {
      jest.spyOn(basicOperations, 'isNumber').mockReturnValue(true)
      jest.spyOn(basicOperations, 'sum').mockReturnValue(3)
      expect(complexOperations.sumGratherThan(1,2,3)).toBe('3 is equal to 3');
    });
    it('test for sumGratherThan, less than case', () => {
      jest.spyOn(basicOperations, 'isNumber').mockReturnValue(true)
      jest.spyOn(basicOperations, 'sum').mockReturnValue(2)
      expect(complexOperations.sumGratherThan(1,1,3)).toBe('2 is less than 3');
    });
  });

  describe('intersectionBetweenArrays', () => {
    beforeEach(() => {
      jest.restoreAllMocks();
    })
    it('test for intersectionBetweenArrays', () => {
      jest.spyOn(basicOperations, 'isArray').mockReturnValue(true)
      jest.spyOn(basicOperations, 'arrayIntersection').mockReturnValue([3,8])
      expect(complexOperations.intersectionBetweenArrays([2,3,5,8],[1,3,8,9])).toEqual([3,8]);
    });
  });

  describe('sortArrayOfObjectsByKey', () => {
    beforeEach(() => {
      jest.restoreAllMocks();
    })
    it('test for sortArrayOfObjectsByKey', () => {
      jest.spyOn(basicOperations, 'isArray').mockReturnValue(true)
      jest.spyOn(basicOperations, 'isString').mockReturnValue(true)
      jest.spyOn(basicOperations, 'arrayElementsAreObjectWithKey').mockReturnValue([{"country": "Spain"}, {"country": "Argentina"}, {"country": "Mexico"}])
      jest.spyOn(basicOperations, 'sortArrayByKey').mockReturnValue([{"country": "Argentina"}, {"country": "Mexico"}, {"country": "Spain"}])
      expect(complexOperations.sortArrayOfObjectsByKey([{"country": "Spain"}, {"country": "Argentina"}, {"country": "Mexico"}], "country")).toEqual([{"country": "Argentina"}, {"country": "Mexico"}, {"country": "Spain"}]);
    });
   
  });

  describe('numberOfOddAndEvenNumbers', () => {
    beforeEach(() => {
      jest.restoreAllMocks();
    })
    it('test for numberOfOddAndEvenNumbers', () => {
      jest.spyOn(basicOperations, 'isArray').mockReturnValue(true)
      jest.spyOn(basicOperations, 'getOddNumbersFromArray').mockReturnValue([1,3,9])
      jest.spyOn(basicOperations, 'getEvenNumbersFromArray').mockReturnValue([4,8])
      expect(complexOperations.numberOfOddAndEvenNumbers([1,3,4,8,9])).toEqual({"even": 2, "odd": 3});
    });
  });
});