import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QueryRegistrationComponent } from './query-registration.component';

describe('QueryRegistrationComponent', () => {
  let component: QueryRegistrationComponent;
  let fixture: ComponentFixture<QueryRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QueryRegistrationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QueryRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
