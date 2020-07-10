import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Dashboard3Page } from './dashboard3.page';

describe('Dashboard3Page', () => {
  let component: Dashboard3Page;
  let fixture: ComponentFixture<Dashboard3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Dashboard3Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Dashboard3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
