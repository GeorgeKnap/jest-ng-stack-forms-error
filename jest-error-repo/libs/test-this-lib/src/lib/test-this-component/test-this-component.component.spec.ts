import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgStackFormsModule } from '@ng-stack/forms';
import { TestThisComponentComponent } from './test-this-component.component';

describe('TestThisComponentComponent', () => {
  let component: TestThisComponentComponent;
  let fixture: ComponentFixture<TestThisComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgStackFormsModule],
      declarations: [TestThisComponentComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestThisComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
