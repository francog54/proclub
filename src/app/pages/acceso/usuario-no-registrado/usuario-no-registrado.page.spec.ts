import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UsuarioNoRegistradoPage } from './usuario-no-registrado.page';

describe('UsuarioNoRegistradoPage', () => {
  let component: UsuarioNoRegistradoPage;
  let fixture: ComponentFixture<UsuarioNoRegistradoPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ UsuarioNoRegistradoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UsuarioNoRegistradoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
