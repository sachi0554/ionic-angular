import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NewOffersPage } from './new-offers.page';

describe('NewOffersPage', () => {
  let component: NewOffersPage;
  let fixture: ComponentFixture<NewOffersPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewOffersPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NewOffersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
