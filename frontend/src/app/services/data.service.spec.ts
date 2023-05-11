import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { DataService } from './data.service';
import { HttpClient } from '@angular/common/http';

describe('DataService', () => {
  let service: DataService;
  let httpMock: HttpTestingController;
  let httpClientSpy: jasmine.SpyObj<HttpClient>;

  beforeEach(() => {
    const spy = jasmine.createSpyObj('HttpClient', ['get', 'post', 'put', 'delete']);

    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        DataService,
        { provide: HttpClient, useValue: spy }
      ]
    });
    service = TestBed.inject(DataService);
    httpClientSpy = TestBed.inject(HttpClient) as jasmine.SpyObj<HttpClient>;
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('debería ser creado', () => {
    expect(service).toBeTruthy();
  });

  it('debería llamar a get con la URL correcta', () => {
    service.getAll('testEntity');
    expect(httpClientSpy.get.calls.count()).withContext('una llamada').toBe(1);
    expect(httpClientSpy.get.calls.first().args[0]).toBe('http://localhost:3000/testEntity');
  });

  it('debería llamar a get con la URL y el id correctos', () => {
    service.getById('testEntity', 1);
    expect(httpClientSpy.get.calls.count()).withContext('una llamada').toBe(1);
    expect(httpClientSpy.get.calls.first().args[0]).toBe('http://localhost:3000/testEntity/1');
  });

  it('debería llamar a post con la URL y los datos correctos', () => {
    const testData = { key: 'value' };
    service.insert('testEntity', testData);
    expect(httpClientSpy.post.calls.count()).withContext('una llamada').toBe(1);
    expect(httpClientSpy.post.calls.first().args).toEqual(['http://localhost:3000/testEntity', testData]);
  });

  it('debería llamar a put con la URL, el id y los datos correctos', () => {
    const testData = { key: 'value' };
    service.update('testEntity', 1, testData);
    expect(httpClientSpy.put.calls.count()).withContext('una llamada').toBe(1);
    expect(httpClientSpy.put.calls.first().args).toEqual(['http://localhost:3000/testEntity/1', testData]);
  });

  it('should call delete with the correct URL and id', () => {
    service.delete('testEntity', 1);
    expect(httpClientSpy.delete.calls.count()).withContext('una llamada').toBe(1);
    expect(httpClientSpy.delete.calls.first().args[0]).toBe('http://localhost:3000/testEntity/1');
  });
});
