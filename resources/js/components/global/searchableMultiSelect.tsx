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
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import { cn } from '@/lib/utils';
import { Item } from '@/types';
import { Check, ChevronDown, X } from 'lucide-react';
import React, { useState } from 'react';
import { SearchAndMultiSelectProps } from './SearchAndMultiSelectProps';

export default function SearchableMultiSelect({
  items,
  selectedItems,
  onSelect,
  onSearch,
  placeholder = 'Search and select items',
  className,
  selectedItemsVariant = 'chip',
  overflowHandle = 'scroll',
  handleRemoveItem,
}: SearchAndMultiSelectProps) {
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

  const handleSelect = (item: Item) => {
    const isSelected = selectedItems.some(
      (selectedItem: Item) => selectedItem.id === item.id,
    );
    const newSelectedItems = isSelected
      ? selectedItems.filter(
          (selectedItem: Item) => selectedItem.id !== item.id,
        )
      : [...selectedItems, item];

    onSelect(newSelectedItems);
    setSearch('');
    setSearchResults([]);
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild className={cn(className, 'rounded-lg border')}>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="relative flex h-auto min-h-[2.75rem] w-full items-center justify-between px-3"
        >
          <div className="flex max-w-[calc(100%-2rem)] flex-1 justify-start gap-2">
            {selectedItems &&
              selectedItems.length > 0 &&
              (selectedItemsVariant === 'chip' ? (
                <div className="w-full">
                  {overflowHandle === 'wrap' ? (
                    <div className="m-1 flex flex-wrap gap-2">
                      {selectedItems.map((item: Item) => (
                        <div
                          key={item.id}
                          className="flex items-center rounded-md bg-gray-100 px-2 py-1 text-[16px]"
                        >
                          {item.name}
                          <div
                            className="ml-2 h-auto p-0"
                            onClick={(e) => {
                              e.preventDefault();
                              e.stopPropagation();
                              handleSelect(item);
                              handleRemoveItem?.(item);
                              setOpen(false);
                            }}
                          >
                            <X className="h-4 w-4" />
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <ScrollArea className="w-full" type="auto">
                      <div className="m-1 mr-2 flex items-center gap-2 whitespace-nowrap">
                        {selectedItems.map((item: Item) => (
                          <div
                            key={item.id}
                            className="flex shrink-0 items-center rounded-md bg-gray-100 px-2 py-1 text-[16px]"
                          >
                            {item.name}
                            <div
                              className="ml-2 h-auto p-0"
                              onClick={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                                handleSelect(item);
                                handleRemoveItem?.(item);
                                setOpen(false);
                              }}
                            >
                              <X className="h-4 w-4" />
                            </div>
                          </div>
                        ))}
                      </div>
                      <ScrollBar className="h-2" orientation="horizontal" />
                    </ScrollArea>
                  )}
                </div>
              ) : (
                <div className="w-full">
                  {overflowHandle === 'wrap' ? (
                    <div className="m-1 flex flex-wrap gap-1">
                      {selectedItems.map((item: Item, index) => (
                        <span key={item.id}>
                          {item.name}
                          {index < selectedItems.length - 1 ? ', ' : ''}
                        </span>
                      ))}
                    </div>
                  ) : (
                    <ScrollArea className="w-full" type="auto">
                      <div className="m-1 mr-2 flex items-start whitespace-nowrap">
                        {selectedItems
                          .map((item: Item) => item.name)
                          .join(', ')}
                      </div>
                      <ScrollBar className="h-2" orientation="horizontal" />
                    </ScrollArea>
                  )}
                </div>
              ))}
          </div>
          <ChevronDown className="absolute right-3 ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="p-0">
        <Command>
          <CommandInput
            placeholder={placeholder}
            value={search}
            onValueChange={(value) => handleSearch(value)}
            className="w-full flex-1"
            ScrollAreaClassName="!w-full"
            cmdkInputWrapperClassName="w-full"
            isSelectedItemsVisible={false}
            searchIconVisible={false}
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
                  onSelect={() => handleSelect(item)}
                  className="flex items-center justify-between"
                >
                  <span>{item.name}</span>
                  {selectedItems.some(
                    (selectedItem: Item) => selectedItem.id === item.id,
                  ) && <Check className="h-4 w-4 text-gray-600" />}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
