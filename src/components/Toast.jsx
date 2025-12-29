import { Toaster } from 'react-hot-toast';

const Toast = () => {
  return (
    <Toaster
      position="top-right"
      reverseOrder={false}
      gutter={8}
      toastOptions={{
        // Default options
        duration: 4000,
        style: {
          background: '#ffffff',
          color: '#0f172a',
          padding: '16px 20px',
          borderRadius: '12px',
          border: '1px solid #e2e8f0',
          boxShadow: '0 8px 24px rgba(0, 0, 0, 0.12)',
          fontSize: '15px',
          fontFamily: "'Inter', sans-serif",
          fontWeight: '500',
          maxWidth: '400px',
        },
        // Success
        success: {
          duration: 4000,
          style: {
            background: 'linear-gradient(135deg, #f0fdfa 0%, #ccfbf1 100%)',
            border: '1px solid #14b8a6',
            color: '#0f172a',
          },
          iconTheme: {
            primary: '#14b8a6',
            secondary: '#ffffff',
          },
        },
        // Error
        error: {
          duration: 5000,
          style: {
            background: 'linear-gradient(135deg, #fef2f2 0%, #fee2e2 100%)',
            border: '1px solid #ef4444',
            color: '#0f172a',
          },
          iconTheme: {
            primary: '#ef4444',
            secondary: '#ffffff',
          },
        },
        // Loading
        loading: {
          style: {
            background: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)',
            border: '1px solid #cbd5e1',
            color: '#475569',
          },
          iconTheme: {
            primary: '#64748b',
            secondary: '#ffffff',
          },
        },
      }}
    />
  );
};

export default Toast;
