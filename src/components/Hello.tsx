import * as React from 'react';
// let style = require('../hello.less');
import * as style from '../less/hello.less';
// import '../hello.less';
// import * as style from '/src/less/hello.css';
export default class Hello extends React.Component<{}, {}> {
  render() {
    // console.log('style:', style);
    return <h1 className={style.hello}> Hello TypesScript </h1>;
  }
}