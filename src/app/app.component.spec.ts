import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { AppPipe } from './app.pipe';
import { AppService } from './app.service';
import { CoreService } from './core.service';
import { MockAppService } from './app.service.mock';

describe('AppComponent', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        AppPipe
      ],
      providers: [
        CoreService,
        { provide: AppService, useClass: MockAppService }
      ]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

});