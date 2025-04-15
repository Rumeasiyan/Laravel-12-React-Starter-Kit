'use client';

import { Skeleton } from '@/components/ui/skeleton';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { cn } from '@/lib/utils';
import {
  flexRender,
  getCoreRowModel,
  Header,
  HeaderGroup,
  useReactTable,
} from '@tanstack/react-table';
import { DataTableProps } from './DataTableProps';
import TableFooter from './TableFooter';

export function DataTable<TData extends object, TValue>({
  columns,
  data,
  loading,
  pageCount,
  pageSize,
  pageIndex,
  onPaginationChange,
  isPaginationEnabled = true,
  tableWrapperClassName,
  tableClassName,
  tableHeaderClassName,
}: DataTableProps<TData, TValue>) {
  const updatedColumns = columns.map((column) => ({
    ...column,
  }));

  const table = useReactTable({
    data,
    columns: updatedColumns,
    getCoreRowModel: getCoreRowModel(),
    state: {
      pagination: {
        pageIndex,
        pageSize,
      },
    },
    pageCount,
    manualPagination: isPaginationEnabled,
    onPaginationChange: (updater) => {
      if (typeof updater === 'function') {
        const newState = updater({ pageIndex, pageSize });
        onPaginationChange(newState.pageIndex, newState.pageSize);
      } else {
        onPaginationChange(updater.pageIndex, updater.pageSize);
      }
    },
  });

  return (
    <>
      <div
        className={cn(
          'w-screen overflow-x-auto pt-4 pl-4 md:w-[calc(100vw_-_16rem)]',
          tableWrapperClassName,
        )}
      >
        <Table className={cn('w-max border border-gray-200', tableClassName)}>
          <TableHeader
            className={cn('bg-[#F5F7FA] text-[#525866]', tableHeaderClassName)}
          >
            {table.getHeaderGroups().map((headerGroup: HeaderGroup<TData>) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header: Header<TData, unknown>) => {
                  return (
                    <TableHead
                      key={header.id}
                      className="border border-t-0 border-gray-200 p-2 px-3 text-[#525866]"
                    >
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext(),
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {loading === true ? (
              Array.from({ length: pageSize }).map((_, index) => (
                <TableRow key={index}>
                  {columns.map((_, cellIndex) => (
                    <TableCell
                      key={cellIndex}
                      className="border border-gray-200 p-3"
                    >
                      <Skeleton className="h-6 w-full" />
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : table.getRowModel().rows?.length > 0 ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && 'selected'}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell
                      key={cell.id}
                      className="border border-gray-200 p-3 text-black"
                    >
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext(),
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 border border-gray-200 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      {isPaginationEnabled && <TableFooter<TData> table={table} />}
    </>
  );
}
