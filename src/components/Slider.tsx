import * as React from 'react';
import * as PropTypes from 'prop-types';
import SliderContext from './SliderContext';
import * as style from '../less/main.less';

export interface SliderProps {
  children: PropTypes.ReactNodeArray,
  currentPage?: number,
  onSlide: Function,
  onLoaded: Function
}
export interface SliderState {
  isSliding: boolean,
  children: PropTypes.ReactNodeArray,
  pageLength: number,
  currentPage: number
}
export default class Slider extends React.Component<SliderProps, SliderState>{
  constructor(props: SliderProps) {
    super(props);
    this.handleSroll = this.handleSroll.bind(this);
    this.handleTransitionend = this.handleTransitionend.bind(this);
    this.state = {
      isSliding: false,
      children: props.children,
      pageLength: props.children.length,
      currentPage:props.currentPage
    };
  }
  componentDidMount() {
    this.props.onLoaded(this.state.pageLength);
  }
  shouldComponentUpdate(nextProps: SliderProps, nextState: SliderState) {
    if(nextProps.currentPage == this.props.currentPage){
      return false;
    }
    return true;
  }
  handleSroll(event: React.WheelEvent) {
    // console.log(event.deltaMode, event.deltaX, event.deltaY, event.deltaZ);
    if(this.state.isSliding){
      return;
    }
    let nextPage: number = this.props.currentPage;
    if (event.deltaY < 0) {
      nextPage = nextPage > 0 ? nextPage - 1 : nextPage;
    } else {
      nextPage = nextPage < (this.state.children.length - 1) ? nextPage + 1 : nextPage;
    }
    event.stopPropagation();
    this.rearrange(nextPage);
  }
  handleTransitionend() {
    this.setState({ ...this.state, isSliding: false ,currentPage:this.props.currentPage});
  }

  rearrange(arg: number) {
    if(arg == this.props.currentPage){
      return;
    }
    this.setState({...this.state, isSliding: true});
    this.props.onSlide(arg);
  }

  render() {
    let children = this.state.children.map((child, index) => {
      let style = {
        top: '0',
        zIndex: '1',
        opacity: '1'
      };
      if (index < this.props.currentPage) {
        style = {
          top: '-100%',
          zIndex: '-10',
          opacity: '0'
        };
      } else if (index > this.props.currentPage) {
        style = {
          top: '100%',
          zIndex: '-10',
          opacity: '0'
        };
      }
      if(index == this.state.currentPage){
        style.opacity = '1';
      }
      return <SliderContext key={index} style={style}>{child}</SliderContext>;
    });
    return (
      <div className={style.sliderContainer} onWheel={this.handleSroll} onTransitionEnd={this.handleTransitionend}>{children}</div>
    );
  }
}