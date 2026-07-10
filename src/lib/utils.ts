import { format } from "date-fns";
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(date: string | Date) {
  return format(new Date(date), "yyyy/MM/dd");
}

export function formatDateTime(date: string | Date) {
  return format(new Date(date), "yyyy/MM/dd HH:mm");
}