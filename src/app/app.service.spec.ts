//ANGULAR IMPORTS
import { TestBed, inject } from '@angular/core/testing';

//NPM IMPORTS
import { AppService } from './app.service';
import { CoreService } from './core.service';
import { MockCoreService } from './core.service.mock';


describe('AppService', () => {
    let me: AppService;
    let mockCoreService: MockCoreService;

    //CONFIGURE TEST MODULE
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                AppService,
                { provide: CoreService, useClass: MockCoreService }
            ]
        });
    });

    //GET THE SERVICE FROM THE TEST MODULE
    beforeEach(inject([AppService], (service: AppService) => {
        //STORE REFERENCE TO THE SERVICE IN LOCAL VAR
        me = service;
        mockCoreService = me.coreService;
    }));

    //SANITY CHECK, DOES THE SERVICE COMPILE?
    it('should create the service', () => {
        expect(me).toBeTruthy();
    });

    //TEST loadSomeNumbers() METHOD
    describe("testing loadSomeNumbers()", () => {
        let numbers: Promise<number[]>;
        let compareArrays: (a1: number[], a2: number[]) => boolean = (a1: number[], a2: number[]) => {
            if(a1.length != a2.length){
                return false;
            }
            else{
                for(var i = 0; i < a1.length; i++){
                    if(a1[i] != a2[i]){
                        return false;
                    }
                }
                return true;
            }
        }

        beforeEach(() => {
            //SPY ON THE REQUEST METHOD OF CORE SERVICE
            spyOn(mockCoreService, 'request').and.returnValue( Promise.resolve([1,2,3]));

            //CALL THE FUNCTION BEING TESTED
            numbers = me.loadSomeNumbers();
        });
        
        //TEST SERVICE CALL BEHAVIOUR
        it('should call request on the service once', () => {
            numbers.then( someNumbers => {
                expect(mockCoreService.request).toHaveBeenCalledTimes(1);
            });
        });

        //TEST THAT THE PARAM BEING PASSED TO THE SERVICE CALL ARE AS EXPECTED*
        it('should call request on the service with correct parameters', () => {
            numbers.then( someNumbers => {
                expect(mockCoreService.request).toHaveBeenCalledWith("../assets/some-numbers.json");
            });
        });

        //TEST THE RESULTANT OUTPUT OF THE FUNCTION
        it('should return the same value as the service', () => {
            numbers.then( someNumbers => {
                expect(someNumbers).toEqual([1,2,3]);
            });
        });
    });

    
});
