import { EnergyCostPipe } from './energy-cost.pipe';

describe('EnergyCostPipe', () => {
  it('create an instance', () => {
    const pipe = new EnergyCostPipe();
    expect(pipe).toBeTruthy();
  });

  it('return a formatted html string with class "energy-icon" ' +
    'and the value from string array', () => {
    const testStrings = ['Darkness'];
    const pipe = new EnergyCostPipe();
    const testResult: string = pipe.transform(testStrings);
    expect(testResult.includes('energy-icon')).toBe(true);
    expect(testResult.includes('Darkness')).toBe(true);
  });
});
