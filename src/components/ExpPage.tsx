import * as React from 'react';
import * as css from '../less/main.less';

const ExpPage: React.StatelessComponent = () => (
  <div className={css.expPage}>
    <div className={css.title}><span>经历</span></div>
    <div className={css.expPage_context}>
      <ul className={css.timeLine}>
        <li>
          <h2>北京科技大学</h2>
          <p>
            硕士 材料工程专业
          </p>
          <p>
            
          </p>
        </li>
        <li>
          <h2>中南大学</h2>
          <p>
            本科 粉体材料科学与工程专业
          </p>
        </li>
      </ul>
    </div>
  </div>
);
export default ExpPage;