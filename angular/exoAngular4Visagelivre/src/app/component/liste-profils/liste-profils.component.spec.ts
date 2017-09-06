import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeProfilsComponent } from './liste-profils.component';

describe('ListeProfilsComponent', () => {
  let component: ListeProfilsComponent;
  let fixture: ComponentFixture<ListeProfilsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeProfilsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeProfilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
