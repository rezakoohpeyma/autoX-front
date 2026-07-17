import { MetaType } from "../schemas";

interface FormattedPagination {
  page: number;
  limit: number;
  totalItems: number;
  totalPages: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
}

/**
 * Formats raw API meta object into a standardized pagination object.
 * Adjusts page index to be 0-based for frontend libraries like TanStack Table.
 */
export const formatPagination = (meta?: MetaType): FormattedPagination => {
  return {
    page: (meta?.page ?? 1) - 1, // Convert to 0-based index
    limit: meta?.limit ?? 10,
    totalItems: meta?.totalItems ?? 0,
    totalPages: meta?.totalPages ?? 0,
    hasNextPage: meta?.hasNextPage ?? false,
    hasPreviousPage: meta?.hasPreviousPage ?? false,
  };
};
