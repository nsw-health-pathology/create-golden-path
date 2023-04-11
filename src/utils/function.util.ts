export function toTitleCase(str: string): string {
    return str.toLowerCase().replace(/(^|\s)\S/g, (firstLetter) => firstLetter.toUpperCase());
}
