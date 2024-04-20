import React from "react";
import { useTranslation } from 'react-i18next';

function Home(){
  const { t } = useTranslation();

  return(
    <>
      <h1 style={{marginTop: '50vh', marginBottom: '50vh'}}>{t('label-soon')}</h1>
    </>
  )

}

export default Home;