import React from 'react';
import { Row, Col } from 'antd';
import ProgressBar from '../../Progress';

const SkillsProgress = () => (
  <div>
    <h2>Мои навыки</h2>
    <Row gutter={[20, 20]}>
      <Col xs={24} sm={24} md={12}>

        <ProgressBar
          percent={50}
          text="Javascript"
        />
        <ProgressBar
          percent={25}
          text="ReactJS"
        />
        <ProgressBar
          percent={85}
          text="Gatsby"
        />
        <ProgressBar
          percent={40}
          text="NodeJS"
        />
      </Col>
      <Col xs={24} sm={24} md={12}>
        <ProgressBar
          percent={90}
          text="Яндекс.Директ"
        />
        <ProgressBar
          percent={80}
          text="GoogleAds"
        />
        <ProgressBar
          percent={78}
          text="SEO"
        />
        <ProgressBar
          percent={85}
          text="CRM Битрикс24"
        />
      </Col>
    </Row>
  </div>
);

export default SkillsProgress;
