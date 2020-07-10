import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EcommercetabsmenuPage } from './ecommercetabsmenu.page';

describe('EcommercetabsmenuPage', () => {
  let component: EcommercetabsmenuPage;
  let fixture: ComponentFixture<EcommercetabsmenuPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EcommercetabsmenuPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EcommercetabsmenuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
