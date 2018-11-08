import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { GreetComponent } from './greet/greet.component';
import { FormsModule } from '@angular/forms';
import { SimpleService } from './simple.service';
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        GreetComponent
      ],
      imports: [FormsModule],
      providers: [SimpleService]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app');
  }));
});
