<<<<<<< HEAD
import { User } from '@clerk/nextjs/server';
import { UserResource } from '@clerk/types';
import { clsx, type ClassValue } from 'clsx';
import { formatDistanceToNowStrict } from 'date-fns';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export function formatMoney(amount: number) {
	return new Intl.NumberFormat('ru-RU', {
		style: 'currency',
		currency: 'rub',
	}).format(amount);
}

export function relativeDate(from: Date) {
	return formatDistanceToNowStrict(from, { addSuffix: true });
}

export function toSlug(str: string) {
	return str
		.toLowerCase()
		.replace(/ /g, '-')
		.replace(/[^\w-]+/g, '');
}

export function isAdmin(user: UserResource | User) {
	return user.publicMetadata?.role === 'admin';
=======
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { formatDistanceToNowStrict } from "date-fns";
import { User } from "@clerk/nextjs/server";
import { UserResource } from "@clerk/types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatCurrency(amount: number | null) {
  if (amount != null) {
    return new Intl.NumberFormat("ru-RU", {
      style: "currency",
      currency: "RUB",
    }).format(amount);
  } else {
    return null;
  }
}

export function relativeDate(from: Date) {
  return formatDistanceToNowStrict(from, { addSuffix: true });
}

export function toSlug(str: string) {
  return str
    .toLowerCase()
    .replace(/ /g, "-")
    .replace(/[^\w-]/g, "");
}

export function isAdmin(user: UserResource | User) {
  return user.publicMetadata?.role === "admin";
>>>>>>> 024fd08d9a198ca31feded75fb3b76f80ec9f37b
}
