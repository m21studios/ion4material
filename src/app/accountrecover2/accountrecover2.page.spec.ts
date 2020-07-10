import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Accountrecover2Page } from './accountrecover2.page';

describe('Accountrecover2Page', () => {
  let component: Accountrecover2Page;
  let fixture: ComponentFixture<Accountrecover2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Accountrecover2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Accountrecover2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
