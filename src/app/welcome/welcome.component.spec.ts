import { WelcomeComponent } from '../welcome/welcome.component';

fdescribe('WelcomeComponent', () => {
  let component: WelcomeComponent;

  beforeEach(() => {
    component = new WelcomeComponent();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('playGame', () => {
    it('should set categoryToPlay correctly (add one to what is passed in)', () => {
      component.playGame(5);
      expect(component.categoryToPlay).toEqual(6)
    });

    it('should set goToGameplay to true', () => {
      expect(component.goToGameplay).toEqual(false);
      component.playGame(5);
      expect(component.goToGameplay).toEqual(true);
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
