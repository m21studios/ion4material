import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EcommercelistPage } from './ecommercelist.page';

describe('EcommercelistPage', () => {
  let component: EcommercelistPage;
  let fixture: ComponentFixture<EcommercelistPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EcommercelistPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EcommercelistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
