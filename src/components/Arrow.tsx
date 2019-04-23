import * as React from 'react';
import * as css from '../less/main.less';

const arrow = require('../img/arrow.svg');

export interface ArrowProps {
  onClick: React.MouseEventHandler
}

const Arrow: React.StatelessComponent<ArrowProps> = (props: ArrowProps) => (
  <div className={css.arrow} onClick={props.onClick}>
    <img src={arrow} alt=""/>
  </div>
);

export default Arrow;