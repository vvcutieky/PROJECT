import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChairpersonsPage } from './chairpersons.page';

describe('ChairpersonsPage', () => {
  let component: ChairpersonsPage;
  let fixture: ComponentFixture<ChairpersonsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ChairpersonsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
