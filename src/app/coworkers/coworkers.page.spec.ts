import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CoworkersPage } from './coworkers.page';

describe('CoworkersPage', () => {
  let component: CoworkersPage;
  let fixture: ComponentFixture<CoworkersPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoworkersPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CoworkersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
