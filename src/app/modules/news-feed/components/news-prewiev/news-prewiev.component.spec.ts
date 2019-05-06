import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsPrewievComponent } from './news-prewiev.component';

describe('NewsPrewievComponent', () => {
  let component: NewsPrewievComponent;
  let fixture: ComponentFixture<NewsPrewievComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsPrewievComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsPrewievComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
