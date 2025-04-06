import { Item } from '@/types';

export type SearchAndMultiSelectProps = {
  items: Item[];
  selectedItems: Item[];
  onSelect: (items: Item[]) => void;
  onSearch?: (query: string) => Promise<Item[]>;
  placeholder?: string;
  className?: string;
  isSelectedItemsVisible?: boolean;
  selectedItemsVariant?: 'chip' | 'badge';
  overflowHandle?: 'scroll' | 'wrap';
  handleRemoveItem?: (item: Item) => void;
};
