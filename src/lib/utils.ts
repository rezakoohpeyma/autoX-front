import { format } from "date-fns";
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { env } from "@/config/env";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(date: string | Date) {
  return format(new Date(date), "yyyy/MM/dd");
}

export function formatDateTime(date: string | Date) {
  return format(new Date(date), "yyyy/MM/dd HH:mm");
}

export function getBaseUrl(){
  if(env.SITE_URL) return env.SITE_URL;

  return "http://localhost:3000"
}