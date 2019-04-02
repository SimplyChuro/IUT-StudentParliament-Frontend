import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewPictureComponent } from './new-picture.component';

describe('NewPictureComponent', () => {
  let component: NewPictureComponent;
  let fixture: ComponentFixture<NewPictureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewPictureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewPictureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
