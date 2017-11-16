//ANGULAR IMPORTS
    import { Injectable } from '@angular/core';

//APP IMPORTS
    import { CoreService } from './core.service';

//APPSERVICE
    @Injectable()
    export class AppService {

        constructor(public coreService: CoreService) { }

    /** loadSomeNumbers()
     *  - gets some numbers from the core service
     */
        public loadSomeNumbers(): Promise<number[]> {
            return this.coreService.request("../assets/some-numbers.json");
        }
    }
