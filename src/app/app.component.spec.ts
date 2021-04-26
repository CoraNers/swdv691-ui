import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let dialog: any;

  dialog = {
    close: () => {}
  };

  beforeEach(() => {

    component = new AppComponent(dialog);

  });
 
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('ngOnInit', () => {
    it('should call reset and openDialog', () => {
      let resetSpy = spyOn(component, 'reset').and.callFake(() => {});
      let openDialog = spyOn(component, 'openDialog').and.callFake(() => {});
      component.ngOnInit();
      expect(resetSpy).toHaveBeenCalled();
      expect(openDialog).toHaveBeenCalled();
    });
  });
  
  describe('reset', () => {
    it('should reset all data', () => {
      component.username = 'testusername';
      component.password = 'testpassword';
      component.loggedInFirstName = 'testloggedinfirstname';
      component.getLoggedInUserData = {'testloggedinuserdata': 'testData'};
      component.goToWelcome = true;
      component.reset();
      expect(component.username).toBeUndefined();
      expect(component.password).toBeUndefined();
      expect(component.loggedInFirstName).toBeUndefined();
      expect(component.getLoggedInUserData).toBeUndefined();
      expect(component.goToWelcome).toBeFalse();
    });
  });

});
