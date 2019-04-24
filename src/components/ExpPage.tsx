import * as React from 'react';
import * as css from '../less/main.less';

const ExpPage: React.StatelessComponent = () => (
  <div className={css.expPage}>
    <div className={css.title}><span>经历</span></div>
    <div className={css.expPage_context}>
      <ul className={css.timeLine}>
        <li>
          <span className={css.timeLineLeft}>2016 - 2019</span>
          <h2>北京科技大学</h2>
          <p>
            <span className={css.green}>硕士</span> {'<'}材料工程专业{'>'}
          </p>
          <p>
            期间使用python神经网络建立材料流变应力模型，进行有限元热力过程模拟。
          </p>
        </li>
        <li>
          <span className={css.timeLineLeft}>2011 - 2015</span>
          <h2>中南大学</h2>
          <p>
            <span className={css.green}>本科</span> {'<'}粉体材料科学与工程专业{'>'}
          </p>
        </li>
      </ul>
    </div>
  </div>
);
export default ExpPage;