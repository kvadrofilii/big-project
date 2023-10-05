import { memo } from 'react';

import clsx from 'clsx';
import { useTranslation } from 'react-i18next';

import css from './<FTName|pascalcase>.m.css';

import type { <FTName|pascalcase>Props } from './<FTName|pascalcase>.types';

export const <FTName|pascalcase> = memo(function <FTName|pascalcase>(props: <FTName|pascalcase>Props) {
  const { className } = props;
  const { t } = useTranslation();

  return (
    <div className={clsx(css.root, className)}>
      <div/>
      </div>
  );
});
