type EmptyStateProps = {
  title: string;
  message: string;
  actionLabel?: string;
  onAction?: () => void;
};

function EmptyState({
  title,
  message,
  actionLabel,
  onAction,
}: EmptyStateProps) {
  return (
    <div className="rounded-lg bg-gray-800 px-6 py-12 text-center">
      <h2 className="mb-2 text-xl font-semibold text-white">
        {title}
      </h2>

      <p className="mb-5 text-gray-400">{message}</p>

      {actionLabel && onAction && (
        <button
          type="button"
          onClick={onAction}
          className="rounded-md bg-blue-600 px-4 py-2 font-semibold text-white transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800"
        >
          {actionLabel}
        </button>
      )}
    </div>
  );
}

export default EmptyState;