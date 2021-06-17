import { toast } from 'react-toastify';

export const showNotificationSucess = (text: string) => {
  toast.success(text, {
    autoClose: 2000,
    hideProgressBar: true,
  });
};

export const showNotificationError = (text: string) => {
  toast.error(text, {
    autoClose: 3000,
    hideProgressBar: true,
  });
};
