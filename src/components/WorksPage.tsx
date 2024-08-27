import * as React from 'react';
import * as css from '../less/main.less';

const resume = require('../img/resume.jpg');
const gallery = require('../img/gallery.png');

const WorksPage: React.StatelessComponent = () => (
  <div className={css.worksPage}>
    <div className={css.title}><span>我的作品</span></div>
    <div className={css.worksPage_worksSet}>
      <div className={css.workItem}>
        <img src={resume} alt=""/>
        <a href="https://zhouzhaoyuan.top/resume" target="view_window">本网站</a>
      </div>
      <div className={css.workItem}>
        <img src={gallery} alt=""/>
        <a href="https://zhouzhaoyuan.top/gallery" target="view_window">我的相册</a>
      </div>
    </div>
  </div>
);
export default WorksPage;