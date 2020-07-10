import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Dashboard4Page } from './dashboard4.page';

describe('Dashboard4Page', () => {
  let component: Dashboard4Page;
  let fixture: ComponentFixture<Dashboard4Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Dashboard4Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Dashboard4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
