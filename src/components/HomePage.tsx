import * as React from 'react';
import * as css from '../less/main.less';
import throttle from 'lodash-decorators/throttle';
// import * as photo from '../img/me.png';
const photo = require('../img/me.png');
export interface HomePageState {
  mouseX: number,
  mouseY: number,
  contRef?: React.RefObject<HTMLDivElement>
}

export default class HomePage extends React.Component<React.Props<{}>, HomePageState> {
  constructor(props: React.Props<{}>) {
    super(props);
    this.state = {
      mouseX: 0,
      mouseY: 0
    };
    this.contRef = React.createRef();
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.transformStyle = this.transformStyle.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
  }
  contRef: React.RefObject<HTMLDivElement>

  handleMouseMove(event: React.MouseEvent) {
    let clientX = event.clientX;
    let clientY = event.clientY;
    this.handleMouseMoveThrottle(clientX, clientY);
  }
  @throttle(100)
  handleMouseMoveThrottle(clientX: number, clientY: number) {
    this.setState({ ...this.state, mouseX: clientX, mouseY: clientY });
  }
  handleMouseLeave() {
    let originX = this.contRef.current.offsetLeft + this.contRef.current.clientWidth / 2;
    let originY = this.contRef.current.offsetTop + this.contRef.current.clientHeight / 2;
    setTimeout(() => this.setState({ ...this.state, mouseX: originX, mouseY: originY }), 100);
  }
  transformStyle(): {} {
    if (!this.contRef.current) {
      return {};
    }
    let originX = this.contRef.current.offsetLeft + this.contRef.current.clientWidth / 2;
    let originY = this.contRef.current.offsetTop + this.contRef.current.clientHeight / 2;
    let clientWidth = this.contRef.current.clientWidth;
    let clientHeight = this.contRef.current.clientHeight;
    let maxRotateX = 10;
    let maxRotateY = 10;
    let rotateX = (this.state.mouseX - originX) / clientWidth * maxRotateX * 2;
    let rotateY = (this.state.mouseY - originY) / clientHeight * maxRotateY * 2;
    let maxTranslateX = 12;
    let maxTranslateY = 8;
    let translateX = (this.state.mouseX - originX) / clientWidth * maxTranslateX * 2;
    let translateY = (this.state.mouseY - originY) / clientHeight * maxTranslateY * 2;
    return { transform: `scale(1.1) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translate(${translateX}px, ${translateY}px)` };
  }
  render() {
    return <div className={css.homePage}>
      <div className={css.homePage_context} onMouseMove={this.handleMouseMove} onMouseLeave={this.handleMouseLeave} ref={this.contRef} style={this.transformStyle()}>
        <div id="main__homePage_lightWrapper" className={css.homePage_context_lightWrapper}></div>
        <div id="main__homePage_container" className={css.homePage_context_container}>
          {/* <div className={css.homePage_context_container_photo}>
            <img src={photo} alt="" />
          </div> */}
          <div className={css.homePage_context_container_description}>
            <h2>Life is hard, but dreams still exist</h2>
            <p>我叫周兆垣</p>
            <p>想当一名前端研发工程师</p>
            <p>348429898@qq.com</p>
          </div>
        </div>
      </div>
    </div>;
  }
}