import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EcommercemapPage } from './ecommercemap.page';

describe('EcommercemapPage', () => {
  let component: EcommercemapPage;
  let fixture: ComponentFixture<EcommercemapPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EcommercemapPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EcommercemapPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
