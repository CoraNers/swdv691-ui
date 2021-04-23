import { of } from 'rxjs';
import { HistoryComponent } from '../history/history.component';

describe('HistoryComponent', () => {
  let component: HistoryComponent;
  let dataService: any;
  let mockSnackbar: any;

  mockSnackbar = {
    open: () => {}
  };

  beforeEach(() => {
    dataService = {
      doGetHistory: (any: string) => {}
    };

    component = new HistoryComponent(dataService, mockSnackbar);

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('ngOnInit', () => {
    it('should call fetchHistory', () => {
      let fetchHistorySpy = spyOn(component, 'fetchHistory').and.callFake(() => {});
      component.ngOnInit();
      expect(fetchHistorySpy).toHaveBeenCalled();
    });
  });

  describe('fetchHistory', () => {
    it('should call doGetHistory', () => {
      let doGetHistorySpy = spyOn(component.dataService, 'doGetHistory').and.returnValue(of('successHistory'));
      component.userData = {_id: '123456'};
      component.fetchHistory();
      expect(doGetHistorySpy).toHaveBeenCalled();
    });
  });

  describe('getPercentage', () => {
    it('should return the value to 2 decimal points', () => {
      let retVal = component.getPercentage(6);
      expect(retVal).toEqual('50.00');
    });

    it('should return the value to 2 decimal points when number passed in is zero', () => {
      let retVal = component.getPercentage(0);
      expect(retVal).toEqual('0.00');
    });
  });

  describe('parseDate', () => {
    it('should return the date part that is expected (minus timezone info)', () => {
      let retVal = component.parseDate('Fri Apr 09 2021 19:40:02 GMT-0400 (Eastern Daylight Time)');
      expect(retVal).toEqual('Fri Apr 09 2021 19:40:02');
    });
  });

  describe('parseLengthOfTime', () => {
    it('should return a string value of the time < 60 seconds if time is populated', () => {
      let retVal = component.parseLengthOfTime(50);
      expect(retVal).toEqual('50 sec.');
    });

    it('should return a string value of the time > 60 seconds if time is populated', () => {
      let retVal = component.parseLengthOfTime(75);
      expect(retVal).toEqual('1 min. 15 sec.');
    });

    it('should return a string of practice when no time is passed in', () => {
      let retVal = component.parseLengthOfTime(undefined);
      expect(retVal).toEqual('practice');
    });
  });

  describe('convertToMinutesAndSeconds', () => {
    it('should return a string value of the time > 60 seconds in min and sec ', () => {
      let retVal = component.parseLengthOfTime(110);
      expect(retVal).toEqual('1 min. 50 sec.');
    });
  });

  describe('goHome', () => {
    it('should set doGoHome to true', () => {
      expect(component.doGoHome).toEqual(false);
      component.goHome();
      expect(component.doGoHome).toEqual(true);
    });
  });

  describe('goToHistoryDetail', () => {
    it('should set historyRowIdSelected on the component', () => {
      component.goToHistoryDetail(123456);
      expect(component.historyRowIdSelected).toEqual(123456);
    });

    it('should set doGoToHistoryDetail to true', () => {
      expect(component.doGoToHistoryDetail).toEqual(false);
      component.goToHistoryDetail(123456);
      expect(component.doGoToHistoryDetail).toEqual(true);
    });
  });
});
