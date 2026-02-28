import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnirudhUi } from './anirudh-ui';

describe('AnirudhUi', () => {
  let component: AnirudhUi;
  let fixture: ComponentFixture<AnirudhUi>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnirudhUi]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnirudhUi);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
