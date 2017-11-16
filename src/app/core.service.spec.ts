import { TestBed, inject } from '@angular/core/testing';
import { HttpModule, Http, BaseRequestOptions, XHRBackend } from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import { CoreService } from './core.service';


describe('CoreService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                HttpModule
            ],
            providers: [
                CoreService,
                { provide: XHRBackend, useClass: MockBackend }
            ]
        });
    });

    it('should compile', inject([CoreService], (service: CoreService) => {
        expect(service).toBeTruthy();
    }));
});
