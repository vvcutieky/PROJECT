import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PassersPage } from './passers.page';

describe('PassersPage', () => {
  let component: PassersPage;
  let fixture: ComponentFixture<PassersPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PassersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
