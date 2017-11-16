import { AppPipe } from './app.pipe';


describe('AppPipe', () => {
  const pipe = new AppPipe();

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('create an instance', () => {
    let val = pipe.transform(1);
    expect(val).toEqual("Piped 1")
  });
});
