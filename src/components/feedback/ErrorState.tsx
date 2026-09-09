type ErrorStateProps = {
  message: string;
  onRetry?: () => void;
};

function ErrorState({ message, onRetry }: ErrorStateProps) {
  return (
    <div
      className="rounded-lg border border-red-500/30 bg-red-500/10 p-6 text-center"
      role="alert"
    >
      <p className="mb-4 font-medium text-red-300">{message}</p>

      {onRetry && (
        <button
          type="button"
          onClick={onRetry}
          className="rounded-md bg-red-600 px-4 py-2 font-semibold text-white transition-colors hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-gray-900"
        >
          Reintentar
        </button>
      )}
    </div>
  );
}

export default ErrorState;