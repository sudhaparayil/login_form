
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataDashboardComponent } from './data-dashboard.component';

describe('DataDashboardComponent', () => {
  let component: DataDashboardComponent;
  let fixture: ComponentFixture<DataDashboardComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DataDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
