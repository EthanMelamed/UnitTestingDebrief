//ANGULAR IMPORTS    
    import { Component } from '@angular/core';

//APP IMPORTS
    import { AppService } from './app.service';

//APPCOMPONENT
    @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })
    export class AppComponent {
//VARIABLES
        numbers = [];

//LIFE CYCLE EVENTS
        constructor(public appService: AppService) {

        }

        ngOnInit(){
            // GET SOME NUMBERS, ADD 1 TO EACH AND SET LOCAL NUMBERS VAR EQUAL TO THE RESULT
            this.getSomeNumbers().then( someNumbers => {
                this.numbers = someNumbers.map( number => number + 1);
            });
        }

//FUNCTIONS
        getSomeNumbers(): Promise<number[]> {
            return this.appService.loadSomeNumbers();
        }
    }
