import { FC } from 'react';

import clsx from 'clsx';
import { useTranslation } from 'react-i18next';

import css from './[FTName].m.css';

interface [FTName]Props {
   className?: string;
}

export const [FTName]: FC<[FTName]Props> = (props) => {
   const { className } = props;
   const { t } = useTranslation();

   return (
      <div className={clsx(css.root, className)}>

      </div>
   );
}
