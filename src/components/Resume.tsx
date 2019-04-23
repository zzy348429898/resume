import * as React from 'react';
import SliderContainer from '../containers/SliderContainer';
import HomePage from './HomePage';
import AboutMePage from './AboutMePage';
import SkillPage from './SkillPage';
import ExpPage from './ExpPage';
import WorksPage from './WorksPage';
import ContactPage from './ContactPage';

const Resume: React.StatelessComponent = () => (
  <SliderContainer>
    <HomePage></HomePage>
    <AboutMePage></AboutMePage>
    <SkillPage></SkillPage>
    <ExpPage></ExpPage>
    <WorksPage></WorksPage>
    <ContactPage></ContactPage>
  </SliderContainer>
);
export default Resume;