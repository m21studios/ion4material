import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EcommercemainPage } from './ecommercemain.page';

describe('EcommercemainPage', () => {
  let component: EcommercemainPage;
  let fixture: ComponentFixture<EcommercemainPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EcommercemainPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EcommercemainPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
