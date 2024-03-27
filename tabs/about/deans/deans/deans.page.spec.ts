import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DeansPage } from './deans.page';

describe('DeansPage', () => {
  let component: DeansPage;
  let fixture: ComponentFixture<DeansPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DeansPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
