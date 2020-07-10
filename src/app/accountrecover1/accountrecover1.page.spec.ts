import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Accountrecover1Page } from './accountrecover1.page';

describe('Accountrecover1Page', () => {
  let component: Accountrecover1Page;
  let fixture: ComponentFixture<Accountrecover1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Accountrecover1Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Accountrecover1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
