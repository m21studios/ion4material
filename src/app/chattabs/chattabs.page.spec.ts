import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ChattabsPage } from './chattabs.page';

describe('ChattabsPage', () => {
  let component: ChattabsPage;
  let fixture: ComponentFixture<ChattabsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChattabsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ChattabsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
