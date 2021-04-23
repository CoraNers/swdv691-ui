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

  describe('parseOutQuestionAndAnswer', () => {
    it('should return the question only when returnQuestionOnly is true', () => {
      let retVal = component.parseOutQuestionAndAnswer('1 x 1 = 4', true);
      expect(retVal).toEqual('1 x 1');
    });

    it('should return the question only when returnQuestionOnly is false', () => {
      let retVal = component.parseOutQuestionAndAnswer('1 x 1 = 4', false);
      expect(retVal).toEqual('4');
    });
  });
});
