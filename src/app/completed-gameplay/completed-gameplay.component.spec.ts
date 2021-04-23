import { CompletedGameplayComponent } from './completed-gameplay.component';

describe('CompletedGameplayComponent', () => {
  let component: CompletedGameplayComponent;

  beforeEach(() => {
    component = new CompletedGameplayComponent();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('ngOnInit', () => {
    it('should call convertTimeInSecondsForDisplayableTime', () => {
      let convertTimeInSecondsForDisplayableTimeSpy = spyOn(component, 'convertTimeInSecondsForDisplayableTime').and.callFake(() => {});
      component.ngOnInit();
      expect(convertTimeInSecondsForDisplayableTimeSpy).toHaveBeenCalled();
    });
  });

  describe('convertTimeInSecondsForDisplayableTime', () => {
    it('should set timeDisplayable correctly 1 min and change', () => {
      component.timeInSecondsToComplete = 85;
      component.convertTimeInSecondsForDisplayableTime();
      expect(component.timeDisplayable).toEqual('1 minute 25 seconds');
    });

    it('should set timeDisplayable correctly - several minutes', () => {
      component.timeInSecondsToComplete = 185;
      component.convertTimeInSecondsForDisplayableTime();
      expect(component.timeDisplayable).toEqual('3 minutes 5 seconds');
    });

    it('should set timeDisplayable correctly - 1 min 1 second', () => {
      component.timeInSecondsToComplete = 61;
      component.convertTimeInSecondsForDisplayableTime();
      expect(component.timeDisplayable).toEqual('1 minute 1 second');
    });

    it('should set timeDisplayable correctly - several minutes 1 second', () => {
      component.timeInSecondsToComplete = 121;
      component.convertTimeInSecondsForDisplayableTime();
      expect(component.timeDisplayable).toEqual('2 minutes 1 second');
    });
  });

  describe('goToUserHistory', () => {
    it('should set goToHistory to true', () => {
      expect(component.goToHistory).toEqual(false);
      component.goToUserHistory();
      expect(component.goToHistory).toEqual(true);
    });
  });

});
