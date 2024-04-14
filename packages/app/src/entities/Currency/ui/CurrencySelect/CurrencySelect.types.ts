import type { Currency } from '../../model/consts/currency';

export type CurrencySelectProps = {
  className?: string;
  value?: Currency;
  onChange?: (value: Currency) => void;
  disabled?: boolean;
};
