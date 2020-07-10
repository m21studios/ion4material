import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EcommerceconfigPage } from './ecommerceconfig.page';

describe('EcommerceconfigPage', () => {
  let component: EcommerceconfigPage;
  let fixture: ComponentFixture<EcommerceconfigPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EcommerceconfigPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EcommerceconfigPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
