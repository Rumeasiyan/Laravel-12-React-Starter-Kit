import { Item } from '@/types';

export type SearchAndSelectProps = {
  items: Item[];
  selectedItem: Item | null;
  onSelect: (item: Item | null) => void;
  onSearch?: (query: string) => Promise<Item[]>;
  placeholder?: string;
  className?: string;
};
