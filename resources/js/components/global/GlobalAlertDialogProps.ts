export type GlobalAlertDialogProps = {
  isOpen: boolean;
  title: string;
  description: string;
  onConfirm: () => void;
  onCancel?: () => void;
  confirmText?: string;
  cancelText?: string;
  alertDialogFooterClassNames?: string;
  alertCancelClassNames?: string;
  alertConfirmClassNames?: string;
};
