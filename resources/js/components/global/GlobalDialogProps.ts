import { ReactNode } from 'react';

export type GlobalDialogProps = {
  isOpen: boolean;
  alertDialogClassNames?: string;
  onOpenChange: (open: boolean) => void;
  title: string;
  description?: string;
  children?: ReactNode;
  primaryButton?: {
    text: string;
    type?: 'button' | 'submit' | 'reset';
    onClick: () => void;
    isDisabled?: boolean;
    className?: string;
  };
  secondaryButton?: {
    text: string;
    type?: 'button' | 'submit' | 'reset';
    onClick: () => void;
    isDisabled?: boolean;
    className?: string;
  };
  dialogFooterClassNames?: string;
};
