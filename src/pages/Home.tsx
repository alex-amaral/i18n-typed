import React from 'react';
import { useTranslation } from 'react-i18next';
import { _t } from '../utils/messages';
import { messages } from './messages';

export const Home = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t(messages.title)}</h1>
      <p>{t(messages.description)}</p>
    </div>
  );
};
