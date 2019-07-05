import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComprouGanhouComponent } from './comprou-ganhou.component';

describe('ComprouGanhouComponent', () => {
  let component: ComprouGanhouComponent;
  let fixture: ComponentFixture<ComprouGanhouComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComprouGanhouComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComprouGanhouComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
