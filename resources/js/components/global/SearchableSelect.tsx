import { Button } from '@/components/ui/button';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { cn } from '@/lib/utils';
import { Item } from '@/types';
import { Check, ChevronDown, X } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { SearchAndSelectProps } from './SearchAndSelectProps';

export default function SearchableSelect({
  items,
  selectedItem,
  onSelect,
  onSearch,
  placeholder = 'Search and select an item',
  className,
}: SearchAndSelectProps) {
  const [open, setOpen] = useState<boolean>(false);
  const [search, setSearch] = useState<string>('');
  const [searchResults, setSearchResults] = useState<Item[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSearch = React.useCallback(
    async (value: string) => {
      setSearch(value);
      if (!value) {
        setSearchResults([]);
        return;
      }

      if (onSearch) {
        setIsLoading(true);
        try {
          const results = await onSearch(value);
          setSearchResults(results);
        } catch (error) {
          console.error('Search error:', error);
          setSearchResults([]);
        } finally {
          setIsLoading(false);
        }
      } else {
        // Fallback to local filtering
        const filtered = items.filter((item: Item) =>
          item.name.toLowerCase().includes(value.toLowerCase()),
        );
        setSearchResults(filtered);
      }
    },
    [items, onSearch],
  );

  const handleClear = () => {
    onSelect(null);
    setSearch('');
    setSearchResults([]);
    setOpen(true);
  };

  useEffect(() => {
    setSearch(selectedItem?.name || '');
  }, [selectedItem]);

  return (
    <Popover
      open={open && !selectedItem}
      onOpenChange={(isOpen) => {
        if (!selectedItem) {
          setOpen(isOpen);
        }
      }}
    >
      <PopoverTrigger asChild className={cn(className, 'rounded-lg border')}>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="relative flex h-auto min-h-[2.75rem] w-full items-center justify-between px-3"
        >
          {selectedItem ? (
            <>
              <div className="flex w-full flex-1 items-center justify-between gap-2">
                {selectedItem.name}
                <div
                  className="flex h-5 w-5 items-center justify-center rounded-full bg-gray-400 p-0 text-white hover:bg-gray-400"
                  onClick={handleClear}
                >
                  <X className="text-white hover:text-white" />
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="flex max-w-[calc(100%-2rem)] flex-1 items-center justify-between gap-2">
                <span className="text-muted-foreground">{placeholder}</span>
                <ChevronDown className="absolute right-3 ml-2 h-4 w-4 shrink-0 opacity-50" />
              </div>
            </>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="p-0">
        <Command>
          <CommandInput
            placeholder={placeholder}
            value={search}
            onValueChange={(value) => {
              if (!selectedItem) {
                handleSearch(value);
              }
            }}
            className="w-full flex-1"
            cmdkInputWrapperClassName="w-full"
            searchIconVisible={!selectedItem}
          />
          <CommandList className="max-h-[200px] w-full overflow-y-auto bg-white">
            <CommandEmpty className="text-muted-foreground flex items-center justify-center py-3 text-center text-sm">
              {isLoading
                ? 'Loading...'
                : search
                  ? 'No matching items found.'
                  : 'Type to start searching...'}
            </CommandEmpty>
            <CommandGroup>
              {searchResults.map((item: Item) => (
                <CommandItem
                  key={item.id}
                  value={item.name}
                  onSelect={() => {
                    onSelect(item);
                    setSearch(item.name);
                  }}
                  className="flex items-center justify-between"
                >
                  <span>{item.name}</span>
                  {selectedItem && (selectedItem as Item).id === item.id && (
                    <Check className="h-4 w-4 text-gray-600" />
                  )}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
