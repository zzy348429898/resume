import * as React from 'react';
import * as css from '../less/main.less';

const SkillPage: React.StatelessComponent = () => (
  <div className={css.skillPage}>
    <div className={css.title}><span>技术栈</span></div>
    <div className={css.skillPage_context}>
      <div className={css.circleWrapper}>
        <ul className={css.circle}>
          <li className={css.fontSmaller}><p style={{ lineHeight: '1em', backgroundColor: 'unset', margin: '15px 0' }}>React-router</p></li>
          <li>html</li>
          <li>css</li>
          <li>ES6</li>
          <li>Redux</li>
          <li className={css.fontSmaller}>webpack</li>
          <li>git</li>
          <li>Java</li>
        </ul>
        <ul className={css.circle2}>
          <li className={css.fontSmaller}>JavaScript</li>
          <li>React</li>
          <li>less</li>
          <li className={css.fontSmaller}>TypeScript</li>
        </ul>
      </div>
      <div className={css.skillPage_context_description}>
        <p>自学的过程很寂寞很不容易，不过我也掌握了一些技能。</p>
        <p>现在我能自己搭建前端工程化开发环境，使用html/css(less)构建web应用界面，或者使用React、Redux、React-router等框架/工具构建复杂应用。</p>
        <p>同时，也不同程度地学习了数据结构与算法、网络过程、java后端等知识。</p>
        <p>我也关注社区的发展，前端发展很快，不断有新的工具、解决方案和“哲学”出现，在这个时间点选择前端，就是选择不断地学习。</p>
      </div>
    </div>
  </div>
);
export default SkillPage;