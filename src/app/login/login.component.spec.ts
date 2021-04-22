import { of } from 'rxjs';
import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let dataService: any;
  let dialog: any;
  let mockSnackbar: any;

  dialog = {
    close: () => {}
  };

  mockSnackbar = {
    open: () => {}
  };

  beforeEach(() => {
    dataService = {
      doLogin: () => {}
    };

    component = new LoginComponent(dataService, dialog, mockSnackbar);

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('onKeydown', () => {
    it('should call submitLoginInfo', () => {
      let submitLoginInfoSpy = spyOn(component, 'submitLoginInfo').and.callFake(() => {});
      component.onKeydown('event');
      expect(submitLoginInfoSpy).toHaveBeenCalled();
    });
  });

  describe('submitLoginInfo', () => {
    it('should call dataService doLogin function', () => {
      let submitLoginInfoSpy = spyOn(component.dataService, 'doLogin').and.returnValue(of('successTestUserData'));
      component.submitLoginInfo();
      expect(submitLoginInfoSpy).toHaveBeenCalled();
    });

    it('should set call the service with username and password', () => {
      let submitLoginInfoSpy = spyOn(component.dataService, 'doLogin').and.returnValue(of('successTestUserData'));
      component.username = "testusername";
      component.password = "testpassword";
      component.submitLoginInfo();
      expect(submitLoginInfoSpy).toHaveBeenCalledWith(component.username, component.password);
    });

    it('should set userdata on the component', () => {
      spyOn(component.dataService, 'doLogin').and.returnValue(of('successTestUserData'));
      component.submitLoginInfo();
      expect(component.userData).toEqual('successTestUserData');
    });
    
  });


});
