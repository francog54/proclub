import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CuentaNoVerificadaPage } from './cuenta-no-verificada.page';

describe('CuentaNoVerificadaPage', () => {
  let component: CuentaNoVerificadaPage;
  let fixture: ComponentFixture<CuentaNoVerificadaPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CuentaNoVerificadaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CuentaNoVerificadaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
