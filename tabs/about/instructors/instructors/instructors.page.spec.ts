import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InstructorsPage } from './instructors.page';

describe('InstructorsPage', () => {
  let component: InstructorsPage;
  let fixture: ComponentFixture<InstructorsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(InstructorsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
