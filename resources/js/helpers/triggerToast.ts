import { toast } from 'sonner';

export const triggerToast = (
  message: string,
  variant: 'success' | 'error' | 'info',
) => {
  const toastOptions = {
    richColors: true,
    closeButton: true,
  };

  switch (variant) {
    case 'success':
      toast.success(message, toastOptions);
      break;
    case 'error':
      toast.error(message, toastOptions);
      break;
    case 'info':
      toast.info(message, toastOptions);
      break;
    default:
      break;
  }
};
