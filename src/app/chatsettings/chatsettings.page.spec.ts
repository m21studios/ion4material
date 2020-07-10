import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ChatsettingsPage } from './chatsettings.page';

describe('ChatsettingsPage', () => {
  let component: ChatsettingsPage;
  let fixture: ComponentFixture<ChatsettingsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatsettingsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ChatsettingsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
