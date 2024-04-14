import { memo, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { ListBox } from '~/shared/ui';
import { Currency } from '../../model/consts/currency';
import type { CurrencySelectProps } from './CurrencySelect.types';

export const CurrencySelect = memo(function CurrencySelect(props: CurrencySelectProps) {
  const { className, value, onChange, disabled } = props;
  const { t } = useTranslation();

  const options = useMemo(
    () => Object.entries(Currency).map((val) => ({ value: val[0], content: val[1] })),
    [],
  );

  const onChangeHandler = useCallback(
    (currency: string) => {
      onChange?.(currency as Currency);
    },
    [onChange],
  );

  return (
    <ListBox
      className={className}
      options={options}
      onChange={onChangeHandler}
      value={value}
      defaultValue={t('Specify the currency')}
      label={t('Specify the currency')}
      disabled={disabled}
      direction="top right"
    />
  );
});
