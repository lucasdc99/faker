import { fakerFR as faker } from "@faker-js/faker";

export function setSeed(seed: number): void {
  faker.seed(seed);
}

export function generateAddressStreet(): string {
  return faker.location.streetAddress();
}

export function generateAddressCity(): string {
  return faker.location.city();
}

export function generateFilesInput(amount = 1): { url: string }[] {
  return Array.from({ length: amount }, () => ({ url: faker.image.avatar() }));
}

export function generateUserName(): string {
  return faker.internet.userName();
}

export function generateLongText(words = 10): string {
  return faker.lorem.words(words);
}

export function generatePastDate(years = 3): Date {
  return faker.date.past({ years, refDate: "2022-01-16T13:37:17.648Z" });
}

export function generateMaybe<T>(cb: () => T, pb = 0.4): T | undefined {
  return faker.helpers.maybe(cb, { probability: pb });
}

export function generateFutureDate(years = 3): Date {
  return faker.date.future({ years, refDate: "2022-01-16T13:37:17.648Z" });
}

export function generateRecentDate(days = 3): Date {
  return faker.date.recent({ days, refDate: "2022-01-16T13:37:17.648Z" });
}

export function generateFirstName(): string {
  return faker.person.firstName();
}

export function generateLastName(): string {
  return faker.person.lastName();
}

export function generateStringifiedNumber(length = 10): string {
  return faker.string.numeric(length);
}

export function generatePhone(): string {
  return generateStringifiedNumber(9);
}

export function generateFullName(): string {
  return `${generateFirstName()} ${generateLastName()}`;
}

export function generateEmail(firstName?: string, lastName?: string): string {
  return faker.internet.email({ firstName, lastName }).toLowerCase();
}

export function generateBoolean(): boolean {
  return faker.datatype.boolean();
}

export function pickRandomElement<T>(array: readonly T[]): T {
  return faker.helpers.arrayElement(array);
}

export function pickRandomElements<T>(array: readonly T[], amount?: number): T[] {
  return faker.helpers.arrayElements(array, amount);
}

export function generateRandomNumber(length = 10): number {
  return Number(generateStringifiedNumber(length));
}

export function generateRandomId(): number {
  return Number(faker.number.int({ min: 1 }));
}

export function generateRandomInt(min: number, max: number): number {
  return faker.number.int({
    min,
    max,
  });
}

export function generateRandomString(length = 10): string {
  return faker.string.alpha(length);
}

export function generateRandomAlphanumeric(length = 10): string {
  return faker.string.alphanumeric(length);
}

export function generateParagraph(length = 10): string {
  return faker.lorem.sentence(length);
}

export function generateFullAddress(): string {
  return `${faker.location.streetAddress()}, ${faker.location.zipCode()} ${faker.location.city()}`;
}

export function generateCompanyName(): string {
  return faker.company.name();
}

export function generateProductName(): string {
  return faker.commerce.productName();
}

export function generateJob(): string {
  return faker.person.jobTitle();
}
