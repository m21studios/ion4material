import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Accountrecover3Page } from './accountrecover3.page';

describe('Accountrecover3Page', () => {
  let component: Accountrecover3Page;
  let fixture: ComponentFixture<Accountrecover3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Accountrecover3Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Accountrecover3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
