import React from 'react';
import {SoftKeyProvider} from '../kai-ui/src/components/SoftKey/SoftKeyProvider';
import PageContent from './PageContent';

export default function HomeB(){
  return(
    <SoftKeyProvider>
      <PageContent />
    </SoftKeyProvider>
  )
}