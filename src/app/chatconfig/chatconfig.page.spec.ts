import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ChatconfigPage } from './chatconfig.page';

describe('ChatconfigPage', () => {
  let component: ChatconfigPage;
  let fixture: ComponentFixture<ChatconfigPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatconfigPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ChatconfigPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
