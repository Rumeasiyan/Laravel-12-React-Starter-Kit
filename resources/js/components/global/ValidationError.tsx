import { ValidationErrorProps } from './ValidationErrorProps';

export function ValidationError({ message }: ValidationErrorProps) {
  return <span className="text-sm text-red-700">*{message}</span>;
}
