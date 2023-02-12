type Mods = Record<string, boolean | string>;

export function classNames(cls: Array<string | undefined>, mods: Mods = {}): string {
  return [
    ...cls.filter(Boolean),
    ...Object.entries(mods)
      .filter(([_, value]) => Boolean(value))
      .map(([classNames]) => classNames),
  ]
    .join(' ')
    .trim();
}
