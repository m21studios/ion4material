import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Accountrecover5Page } from './accountrecover5.page';

describe('Accountrecover5Page', () => {
  let component: Accountrecover5Page;
  let fixture: ComponentFixture<Accountrecover5Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Accountrecover5Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Accountrecover5Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
