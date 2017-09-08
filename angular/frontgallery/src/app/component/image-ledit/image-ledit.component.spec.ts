import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageLEditComponent } from './image-ledit.component';

describe('ImageLEditComponent', () => {
  let component: ImageLEditComponent;
  let fixture: ComponentFixture<ImageLEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageLEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageLEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
