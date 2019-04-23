import * as React from 'react';
import * as css from '../less/main.less';

let iconFilename: string[] = ['home.svg', 'nickname.svg', 'skill.svg', 'exp.svg', 'icon_workset.svg', 'contact.svg'];

export interface NavItemProps{
  isCurrent: boolean,
  onClick: Function,
  key?: number,
  index: number
}

const NavItem: React.StatelessComponent<NavItemProps> = (props: NavItemProps) =>
  < li >
    <div onClick={() => props.onClick(props.index)} className={props.isCurrent?css.navItem_isCurrent: ''}>
      <img src={require(`../img/${iconFilename[props.index]}`)} />
    </div>
  </li >
  ;

export default NavItem;