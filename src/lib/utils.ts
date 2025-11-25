import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type WithoutChild<T> = T extends { child?: any } ? Omit<T, "child"> : T;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type WithoutChildren<T> = T extends { children?: any } ? Omit<T, "children"> : T;
export type WithoutChildrenOrChild<T> = WithoutChildren<WithoutChild<T>>;
export type WithElementRef<T, U extends HTMLElement = HTMLElement> = T & { ref?: U | null };

const DAY = 24 * 60 * 60 * 1000;
const WEEK = 7 * 24 * 60 * 60 * 1000;
const MONTH = 30 * 24 * 60 * 60 * 1000;
const YEAR = 365 * 24 * 60 * 60 * 1000;

export function computeExactDuration(from: Date, to: Date = new Date()): string {
	const fromMs = from.getTime();
	const toMs = to.getTime();

	let remaining = toMs - fromMs;
	const parts: string[] = [];

	const years = Math.trunc(remaining / YEAR);
	if (years >= 1) {
		remaining = remaining % YEAR;
		parts.push(`${years} year${years >= 2 ? 's' : ''}`);
	}

	const months = Math.trunc(remaining / MONTH);
	if (months >= 1) {
		remaining = remaining % MONTH;
		parts.push(`${months} month${months >= 2 ? 's' : ''}`);
	}

	const weeks = Math.trunc(remaining / WEEK);
	if (weeks >= 1) {
		remaining = remaining % WEEK;
		parts.push(`${weeks} week${weeks >= 2 ? 's' : ''}`);
	}

	const days = Math.trunc(remaining / DAY);
	if (days >= 1) {
		parts.push(`${days} day${days >= 2 ? 's' : ''}`);
	}

	if (parts.length === 0) {
		return '1 day';
	}

	const firstTwo = parts.slice(0, 2);
	if (firstTwo.length === 1) return firstTwo[0];
	return `${firstTwo[0]} and ${firstTwo[1]}`;
}

const monthNames = [
	'January',
	'February',
	'March',
	'April',
	'May',
	'June',
	'July',
	'August',
	'September',
	'October',
	'November',
	'December'
];

export const getMonthName = (index: number): string => {
	return monthNames[index];
};

export const getMonthAndYear = (date?: Date) => {
	if (!date) return 'Present';

	return `${getMonthName(date.getMonth())} ${date.getFullYear()}`;
};
