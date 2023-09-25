import type { Currency } from '../../model/consts/currency';

export interface CurrencySelectProps {
  className?: string;
  value?: Currency;
  onChange?: (value: Currency) => void;
  disabled?: boolean;
}
