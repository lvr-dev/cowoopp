import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CoworkersDetailPage } from './coworkers-detail.page';

describe('CoworkersDetailPage', () => {
  let component: CoworkersDetailPage;
  let fixture: ComponentFixture<CoworkersDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoworkersDetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CoworkersDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
