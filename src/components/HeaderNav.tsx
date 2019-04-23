import * as React from 'react';
import * as css from '../less/main.less';

export interface HeaderNavProps {
  onClick: Function;
  currentPage: number;
  trigHeader: Function;
  isHidden: boolean
}

const HeaderNav: React.StatelessComponent<HeaderNavProps> = (props: HeaderNavProps) => {
  let titles = ['首页', '关于我', '技术栈', '经历', '作品', '联系我'];
  let children = titles.map((title, index) => {
    let style = index == props.currentPage ? { color: '#de9941' } : {};
    return <li key={index} style={style} onClick={() => props.onClick(index)}><span>{title}</span></li>;
  });
  return <div className={css.headerNav}>
    <div className={css.headerNavTitle} onClick={() => props.trigHeader()}>
      <span>
        {titles[props.currentPage]}
        <em style={{transform: props.isHidden?'rotate(0deg)':'rotate(180deg)'}}></em>
      </span>
    </div>
    <ul style={{display: props.isHidden?'none': 'flex'}}>
      {children}
    </ul>
  </div>;
};

export default HeaderNav;