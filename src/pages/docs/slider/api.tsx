import Meta from '@components/Meta';
import React, { Fragment } from 'react';
import { Doc } from '@root/layout/Doc';

const SliderAPI = () => {
  return (
    <Fragment>
      <Meta
        title="Slider API"
      />
      <h1>
        Slider API
      </h1>
      <div>
        This page has no content.
      </div>
    </Fragment>
  )
}

SliderAPI.Layout = Doc;

export default SliderAPI;