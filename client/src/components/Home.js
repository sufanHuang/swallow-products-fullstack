import React, { Fragment } from 'react';
import ImagesDisplay from './imagesDisplay';
import HomeContent from './HomeContent';

export default function Home() {
  return (
    <Fragment>
      <ImagesDisplay />
        <br/>
      <HomeContent />
    </Fragment>
  )
}
