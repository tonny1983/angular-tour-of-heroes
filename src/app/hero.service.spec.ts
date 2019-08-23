import { TestBed, inject } from '@angular/core/testing';
import { HttpEvent, HttpEventType } from '@angular/common/http';

import { HeroService } from './hero.service';
import {Observable} from 'rxjs';
import {Hero} from './hero';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('HeroService', () => {
  let service: HeroService;
  let httpMock: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [HeroService]
    });
    service = TestBed.get(HeroService);
    httpMock = TestBed.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get heroes', () => {
    const mockHeroes: Hero[] = [
      {id: 1, name: 'Hero1'},
      {id: 2, name: 'Hero2'}
    ];
    service.getHeroes().subscribe(h => {
      expect(h.length).toBe(2);
      expect(h).toEqual(mockHeroes);
    });
    const request = httpMock.expectOne(`${service.heroesUrl}`);
    expect(request.request.method).toBe('GET');
    request.flush(mockHeroes);
  });
});
