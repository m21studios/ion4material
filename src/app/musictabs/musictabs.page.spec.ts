import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MusictabsPage } from './musictabs.page';

describe('MusictabsPage', () => {
  let component: MusictabsPage;
  let fixture: ComponentFixture<MusictabsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MusictabsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MusictabsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
