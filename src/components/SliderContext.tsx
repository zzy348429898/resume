import * as React from 'react';
import * as PropTypes from 'prop-types';
import * as style from '../less/main.less';

export interface SliderContextProps {
  children: PropTypes.ReactNodeLike,
  key?: number,
  style?: {}
}
export const defaultStyle = {
  position: 'absolute',
  width:'100%',
  transition: 'top 0.5s ease',
  height: '100%'
};

let SliderContext: React.FunctionComponent<SliderContextProps> = (props: SliderContextProps) => (
  <div style={props.style} className={style.sliderContext}>{props.children}</div>
);

export default SliderContext;