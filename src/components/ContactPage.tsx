import * as React from 'react';
import * as css from '../less/main.less';

const zhihuIcon = require('../img/zhihu.svg');
const email = require('../img/email.svg');
const github = require('../img/github.svg');

const ContactPage: React.StatelessComponent = () => (
  <div className={css.contactPage}>
    <div className={css.title}><span>联系我</span></div>
    <div className={css.contactPage_context}>
      <div className={css.contactPage_context_top}></div>
      <div className={css.contactPage_context_left}></div>
      <div className={css.contactPage_context_right}></div>
      <div className={css.contactPage_context_innerContext}>
        <p className={css.slogan}>
          <span style={{ color: 'rgb(193, 208, 78)' }}>想法</span>
          <span style={{ color: 'rgb(78, 189, 208)' }}>行动</span>
          <span style={{ color: 'rgb(208, 109, 78)' }}>习惯</span>
          <span style={{ color: 'rgb(208, 78, 125)' }}>人生</span>
        </p>
        <div className={css.contactPage_context_innerContext_description}>
          <p>从一个渺小的想法出发</p>
          <p>编程之路延伸到了前端</p>
          <p>不知道什么时候变成了一种习惯</p>
          <p>希望最终变成我人生的一部分</p>
          <p>期待与您一起工作</p>
        </div>
        <div className={css.contactPage_context_innerContext_linkWrapper}>
          <a href="https://www.zhihu.com/people/zhou-zhao-yuan" target="view_window" className={css.contactLinkItem}>
            <img src={zhihuIcon} alt="" />
          </a>
          <a href="https://github.com/zzy348429898" target="view_window" className={css.contactLinkItem}>
            <img src={github} alt="" />
          </a>
          <span className={css.link_email + ' ' + css.contactLinkItem}>
            <span>348429898@qq.com</span>
            <img src={email} alt=""/>
          </span>
        </div>
      </div>

    </div>
  </div>
);
export default ContactPage;