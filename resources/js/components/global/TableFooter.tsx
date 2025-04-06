import { TableFooterProps } from '@/components/global/TableFooterProps';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const pageSizeOptions = [7, 10, 20, 30, 40, 50];

const TableFooter = <TData extends object>({
  table,
}: TableFooterProps<TData>) => {
  return (
    <div className="flex w-screen flex-wrap items-center justify-between gap-4 overflow-x-auto px-4 py-4 md:w-[calc(100vw_-_17rem)]">
      <div className="text-sm text-gray-700">
        Page {table.getState().pagination.pageIndex + 1} of{' '}
        {table.getPageCount()}
      </div>
      <div className="flex items-center gap-2">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
          className="h-8 w-8"
        >
          <ArrowLeft />
        </Button>
        {table.getState().pagination.pageIndex > 2 && (
          <>
            <Button
              variant="outline"
              className="h-8 w-8"
              onClick={() => table.setPageIndex(0)}
            >
              1
            </Button>
            <Button variant="ghost" className="h-8 w-8" disabled>
              ...
            </Button>
          </>
        )}
        {table.getState().pagination.pageIndex === 2 && (
          <Button
            variant="outline"
            className="h-8 w-8"
            onClick={() => table.setPageIndex(0)}
          >
            1
          </Button>
        )}
        {table.getState().pagination.pageIndex > 0 && (
          <Button
            variant="outline"
            className="h-8 w-8"
            onClick={() =>
              table.setPageIndex(table.getState().pagination.pageIndex - 1)
            }
          >
            {table.getState().pagination.pageIndex}
          </Button>
        )}
        <Button variant="ghost" className="bg-accent h-8 w-8">
          {table.getState().pagination.pageIndex + 1}
        </Button>
        {table.getState().pagination.pageIndex < table.getPageCount() - 1 && (
          <Button
            variant="outline"
            className="h-8 w-8"
            onClick={() =>
              table.setPageIndex(table.getState().pagination.pageIndex + 1)
            }
          >
            {table.getState().pagination.pageIndex + 2}
          </Button>
        )}
        {table.getState().pagination.pageIndex === table.getPageCount() - 3 && (
          <Button
            variant="outline"
            className="h-8 w-8"
            onClick={() => table.setPageIndex(table.getPageCount() - 1)}
          >
            {table.getPageCount()}
          </Button>
        )}
        {table.getState().pagination.pageIndex < table.getPageCount() - 3 && (
          <>
            <Button variant="ghost" className="h-8 w-8" disabled>
              ...
            </Button>
            <Button
              variant="outline"
              className="h-8 w-8"
              onClick={() => table.setPageIndex(table.getPageCount() - 1)}
            >
              {table.getPageCount()}
            </Button>
          </>
        )}
        <Button
          variant="ghost"
          size="icon"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
          className="h-8 w-8"
        >
          <ArrowRight />
        </Button>
      </div>
      <div className="flex items-center gap-2">
        <Select
          value={`${table.getState().pagination.pageSize}`}
          onValueChange={(value) => {
            table.setPageSize(Number(value));
          }}
        >
          <SelectTrigger className="h-8 w-[70px]">
            <SelectValue placeholder={table.getState().pagination.pageSize} />
          </SelectTrigger>
          <SelectContent>
            {pageSizeOptions.map((pageSize) => (
              <SelectItem key={pageSize} value={`${pageSize}`}>
                {pageSize}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <span className="text-sm text-gray-700">/ page</span>
      </div>
    </div>
  );
};

export default TableFooter;
