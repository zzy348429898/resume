import { FSA } from './FSA';

export const slide = (pageNumber: number): FSA => (
  {
    type: 'SLIDE',
    payload: pageNumber
  }
);

export const sliderOnLoaded = (pageLength: number): FSA => (
  {
    type: 'SLIDER_ONLOADED',
    payload: pageLength
  }
);

export const toNextPage = (): FSA => (
  {
    type: 'TONEXTPAGE'
  }
);
export const trigHeaderNav = (): FSA => (
  {
    type: 'TRIG_HEADERNAV'
  }
);

