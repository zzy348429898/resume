import * as React from 'react';
import * as css from '../less/main.less';
import { hot } from 'react-hot-loader';
const degree = require('../img/ic_degree.svg');
const age = require('../img/age.svg');
const location = require('../img/location.svg');
const search = require('../img/search.svg');

const aboutMePage: React.StatelessComponent = () => (
  <div className={css.aboutMePage}>
    <div className={css.title}><span>关于我</span></div>
    <div className={css.aboutMePage_context}>
      <div>
        <ul>
          <li>
            <div className={css.aboutMePage_card} >
              <img src={age} alt="" />
              <div className={css.description}>
                <span>年龄/27岁</span>
              </div>
            </div>
          </li>
          <li>
            <div className={css.aboutMePage_card} >
              <img src={degree} alt="" />
              <div className={css.description}>
                <span>学历/硕士</span>
              </div>
            </div>
          </li>
          <li>
            <div className={css.aboutMePage_card} >
              <img src={location} alt="" />
              <div className={css.description}>
                <span>地点/珠三角</span>
              </div>
            </div>
          </li>
          <li>
            <div className={css.aboutMePage_card} >
              <img src={search} alt="" />
              <div className={css.description}>
                <span>状态/求职中</span>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <p>硕士(材料专业)期间开始接触计算机技术，从此走上计算机学习之路。从2017年3月开始，陆续自学JavaScript、Java、TypeScript、数据结构、网络过程和web前后端等知识，对web应用有一定了解，决定毕业后从事web前端工作。</p>
    </div>
  </div>
);
export default hot(module)(aboutMePage);