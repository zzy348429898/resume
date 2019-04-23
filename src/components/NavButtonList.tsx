import * as React from 'react';
import * as Proptypes from 'prop-types';
import * as css from '../less/main.less';
import NavItem from './NavItem';

export interface NavButtonListProps {
  onClick: Function,
  currentPage: number,
  pagesLength: number,
}

const NavButtonList: React.StatelessComponent<NavButtonListProps> = (props) => {
  let children:Proptypes.ReactNodeArray = [];
  for(let i:number = 0; i < props.pagesLength; i++){
    children.push(<NavItem key={i} index={i} isCurrent={props.currentPage == i} onClick={(i: number) => props.onClick(i)}></NavItem>);
  }
  return <ul className={css.navList}>{children}</ul>;
};
export default NavButtonList;