import { ColumnDef } from '@tanstack/react-table';

export type ClientDataTableProps<TData, TValue> = {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  tableWrapperClassName?: string;
  tableClassName?: string;
  tableHeaderClassName?: string;
  handleAddButtonClick?: () => void;
};
