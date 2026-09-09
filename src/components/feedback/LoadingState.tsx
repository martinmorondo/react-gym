type LoadingStateProps = {
  message?: string;
};

function LoadingState({
  message = 'Cargando...',
}: LoadingStateProps) {
  return (
    <div
      className="py-12 text-center text-gray-400"
      role="status"
      aria-live="polite"
    >
      {message}
    </div>
  );
}

export default LoadingState;