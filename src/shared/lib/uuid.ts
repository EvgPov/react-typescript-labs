export function generateUniqueId(): string {
  return crypto.randomUUID();
}

export function arrayWithUniqueId<T extends object>(items: T[]): (T & { uuid: string })[] {
  return items.map((item) => ({
    ...item,
    uuid: generateUniqueId(),
  }));
}
