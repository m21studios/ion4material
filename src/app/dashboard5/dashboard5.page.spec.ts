import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Dashboard5Page } from './dashboard5.page';

describe('Dashboard5Page', () => {
  let component: Dashboard5Page;
  let fixture: ComponentFixture<Dashboard5Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Dashboard5Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Dashboard5Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
