import * as React from 'react';
import * as css from '../less/main.less';

const WorksPage: React.StatelessComponent = () => (
  <div className={css.worksPage}>
    <div className={css.title}><span>我的作品</span></div>
    <div className={css.worksPage_context}>
    </div>
  </div>
);
export default WorksPage;