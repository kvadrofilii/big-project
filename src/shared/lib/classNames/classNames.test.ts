import { classNames } from './classNames';

describe('classNames', () => {
  test('with only first param', () => {
    const expected = 'class';

    expect(classNames(['class', undefined])).toBe(expected);
  });

  test('with param more', () => {
    const expected = 'class1 class2';

    expect(classNames(['class1', 'class2'])).toBe(expected);
  });

  test('with mods', () => {
    const expected = 'class1 class2 hovered scroll';

    expect(classNames(['class1', 'class2'], { hovered: true, scroll: true })).toBe(expected);
  });

  test('with mods false', () => {
    const expected = 'class1 class2 hovered';

    expect(classNames(['class1', 'class2'], { hovered: true, scroll: false })).toBe(expected);
  });

  test('with mods undefined', () => {
    const expected = 'class1 class2 hovered';

    expect(classNames(['class1', 'class2'], { hovered: true, scroll: undefined })).toBe(expected);
  });
});
