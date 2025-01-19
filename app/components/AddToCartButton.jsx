import {CartForm} from '@shopify/hydrogen';
import Button from '@mui/material/Button';
import {useState} from 'react';

/**
 * @param {{
 *   analytics?: unknown;
 *   children: React.ReactNode;
 *   disabled?: boolean;
 *   lines: Array<OptimisticCartLineInput>;
 *   onClick?: () => void;
 * }}
 */
export function AddToCartButton({
  analytics,
  children,
  disabled,
  lines,
  onClick,
}) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <CartForm route="/cart" inputs={{lines}} action={CartForm.ACTIONS.LinesAdd}>
      {(fetcher) => (
        <>
          <input
            name="analytics"
            type="hidden"
            value={JSON.stringify(analytics)}
          />
          <Button
            type="submit"
            onClick={onClick}
            className="main-button"
            style={{background: 'rgb(111, 219, 181)'}}
            onMouseEnter={(e) => e.target.classList.add('hovered-button')}
            onMouseLeave={(e) => e.target.classList.remove('hovered-button')}
            disabled={disabled ?? fetcher.state !== 'idle'}
          >
            {children}
          </Button>
        </>
      )}
    </CartForm>
  );
}

/** @typedef {import('@remix-run/react').FetcherWithComponents} FetcherWithComponents */
/** @typedef {import('@shopify/hydrogen').OptimisticCartLineInput} OptimisticCartLineInput */
