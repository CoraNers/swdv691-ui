import { GameplayComponent } from '../gameplay/gameplay.component';

describe('GameplayComponent', () => {
  let component: GameplayComponent;
  let dataService: any;
  let mockSnackbar: any;

  mockSnackbar = {
    open: () => {}
  };

  beforeEach(() => {
    dataService = {
      doLogin: () => {}
    };

    component = new GameplayComponent(dataService, mockSnackbar);

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('ngOnInit', () => {
    it('should set modeDisplayable to Practicing when mode is practice', () => {
      component.mode = 'practice';
      component.ngOnInit();
      expect(component.modeDisplayable).toEqual('Practicing');
    });

    it('should set modeDisplayable to Evaluating when mode is not practice', () => {
      component.mode = 'evaluation';
      component.ngOnInit();
      expect(component.modeDisplayable).toEqual('Evaluating');
    });

    it('should call createGameplayArray on category passed in', () => {
      let createGameplayArraySpy = spyOn(component, 'createGameplayArray').and.callFake(() => {});
      component.ngOnInit();
      expect(createGameplayArraySpy).toHaveBeenCalled();
    });
  });

  describe('createGameplayArray', () => {
    it('should set gameplayQuestionsShuffled category as first number with shuffled array', () => {
      let testArrayInOrder = [
        '3 x 1',
        '3 x 2',
        '3 x 3',
        '3 x 4',
        '3 x 5',
        '3 x 6',
        '3 x 7',
        '3 x 8',
        '3 x 9',
        '3 x 10',
        '3 x 11',
        '3 x 12'
      ];
      component.createGameplayArray();
      expect(component.gameplayQuestionsShuffled).not.toEqual(testArrayInOrder);
    });

    it('should set call shuffle', () => {
      let shuffleSpy = spyOn(component, 'shuffle').and.callFake(() => {});
      component.createGameplayArray();
      expect(shuffleSpy).toHaveBeenCalled();
    });
    
    it('should set call startTimer', () => {
      let startTimerSpy = spyOn(component, 'startTimer').and.callFake(() => {});
      component.createGameplayArray();
      expect(startTimerSpy).toHaveBeenCalled();
    });

  });
});
