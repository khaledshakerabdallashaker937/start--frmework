import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartframeworkComponent } from './startframework.component';

describe('StartframeworkComponent', () => {
  let component: StartframeworkComponent;
  let fixture: ComponentFixture<StartframeworkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StartframeworkComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StartframeworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
