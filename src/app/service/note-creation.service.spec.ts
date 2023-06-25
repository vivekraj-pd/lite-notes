import { TestBed } from '@angular/core/testing';

import { NoteCreationService } from './note-creation.service';

describe('NoteCreationService', () => {
  let service: NoteCreationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NoteCreationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
