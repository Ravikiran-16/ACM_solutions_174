import './Button.css';

export const Button = ({
  children,
  variant = 'primary',
  isDisabled = false,
  isLoading = false,
  onClick,
}) => {
  const disabled = isDisabled || isLoading;

  const className = [
    'btn',
    `btn-${variant}`,
    isDisabled ? 'btn-disabled' : '',
    isLoading ? 'btn-loading' : '',
  ]
    .filter(Boolean)
    .join(' ');

  const handleClick = (e) => {
    if (disabled) return;
    onClick?.(e);
  };

  return (
    <button
      className={className}
      disabled={disabled}
      onClick={handleClick}
    >
      {isLoading && <span data-testid="spinner">Loading...</span>}
      {children}
    </button>
  );
};// Day 1 Button Component