import type { Country } from '../../model/consts/country';

export type CountrySelectProps = {
  className?: string;
  value?: Country;
  onChange?: (value: Country) => void;
  disabled?: boolean;
};
