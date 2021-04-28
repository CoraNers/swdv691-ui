import { HistoryDetailComponent } from './history-detail.component';

describe('HistoryDetailComponent', () => {
  let component: HistoryDetailComponent;

  beforeEach(() => {
    component = new HistoryDetailComponent();
  });

  describe('goHome', () => {
    it('should set doGoHome to true', () => {
      expect(component.doGoHome).toEqual(false);
      component.goHome();
      expect(component.doGoHome).toEqual(true);
    });
  });

  describe('goToUserHistory', () => {
    it('should set doGoBackToHistory to true', () => {
      expect(component.doGoBackToHistory).toEqual(false);
      component.goToUserHistory();
      expect(component.doGoBackToHistory).toEqual(true);
    });
  });

  describe('parseDate', () => {
    it('should return the date part that is expected (minus timezone info)', () => {
      let retVal = component.parseDate('Fri Apr 09 2021 19:40:02 GMT-0400 (Eastern Daylight Time)');
      expect(retVal).toEqual('Fri Apr 09 2021 19:40:02');
    });
  });

  describe('calculatePercentCorrect', () => {
    it('should return the value to 2 decimal points', () => {
      let retVal = component.calculatePercentCorrect(6);
      expect(retVal).toEqual('50.00');
    });

    it('should return the value to 2 decimal points when number passed in is zero', () => {
      let retVal = component.calculatePercentCorrect(0);
      expect(retVal).toEqual('0.00');
    });
  });

  describe('validateCorrectness', () => {
    it('should return Correct if the answer is correct after parsing', () => {
      let retVal = component.validateCorrectness('3 x 3 = 9');
      expect(retVal).toEqual('Correct');
    });

    it('should return Incorrect if the answer is incorrect after parsing', () => {
      let retVal = component.validateCorrectness('3 x 3 = 8');
      expect(retVal).toEqual('Incorrect');
    });

    it('should return Unknown if something goes wrong with parsing the first digit', () => {
      let retVal = component.validateCorrectness('X x 3 = 8');
      expect(retVal).toEqual('Unknown');
    });

    it('should return Unknown if something goes wrong with parsing the second digit', () => {
      let retVal = component.validateCorrectness('1 x X = 8');
      expect(retVal).toEqual('Unknown');
    });

    it('should return Unknown if something goes wrong with parsing the answer', () => {
      let retVal = component.validateCorrectness('1 x 5 = X');
      expect(retVal).toEqual('Unknown');
    });
  });
});
