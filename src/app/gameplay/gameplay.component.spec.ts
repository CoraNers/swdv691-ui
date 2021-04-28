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
      doLogin: () => {},
      doSubmitGameplay: () => {},
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

  describe('getQuestion', () => {
    it('should return first element in the array if array size > 0', () => {
      component.gameplayQuestionsShuffled = [
        '6 x 2', 
        '6 x 11',
        '6 x 5'
      ];
      let retVal = component.getQuestion();
      expect(retVal).toEqual('6 x 2');
    });

  });

  describe('popOffQuestionAnswered', () => {
    it('should return answered question (value in first index of array) when answered if 1+ questions', () => {
      component.gameplayQuestionsShuffled = [
        '6 x 2', 
        '6 x 11',
        '6 x 5'
      ];
      let retVal = component.popOffQuestionAnswered();
      expect(retVal).toEqual('6 x 2');
    });

    it('should decrement question number if shuffled length == 0 and call finish', () => {
      component.questionNumber = 2;
      let finishSpy = spyOn(component, 'finish').and.callFake(() => {});
      component.gameplayQuestionsShuffled = [];
      component.popOffQuestionAnswered();
      expect(component.questionNumber).toEqual(1);
      expect(finishSpy).toHaveBeenCalled();
    });

  });

  describe('keydownEnter', () => {
    it('should call submit if user has not submitted their answer yet', () => {
      component.hasSubmitted = false;
      let submitSpy = spyOn(component, 'submit').and.callFake(() => {});
      component.keydownEnter();
      expect(submitSpy).toHaveBeenCalled();
    });

    it('should call next if user has submitted their answer yet', () => {
      component.hasSubmitted = true;
      let nextSpy = spyOn(component, 'next').and.callFake(() => {});
      component.keydownEnter();
      expect(nextSpy).toHaveBeenCalled();
    });

  });

});
