import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Accountrecover4Page } from './accountrecover4.page';

describe('Accountrecover4Page', () => {
  let component: Accountrecover4Page;
  let fixture: ComponentFixture<Accountrecover4Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Accountrecover4Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Accountrecover4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
