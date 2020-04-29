import React from 'react';
import { Row, Col } from 'antd';
import AboutTile from '../../AbouTile';
import { stripTags, domHtml } from '../../../utils/stripTags';
import SEO from '../../Seo';

const pageText = {
  paraOne: `Привет, мир! Меня зовут Артур. Я веб-разработчик, увлекающийся различными веб-технологиями.
    Этот сайт, пример, того что я люблю делать:) В настоящее время я работаю в основном с технологиями Javascript, такими как Reactjs и Nodejs.
    Я постоянно самостоятельно обучаюсь, благодаря морю полезной информации в интернете.`,
  paraTwo: `Помимо программирования я считаю себя довольно опытным маркетером, т.к. уже не в одной компании поднял оборот в разы, благодаря профессиональному внедрению digital маркетинга. 
    Готов взять удаленно digital маркетинг в вашей компании при условии оплаты 50к руб. + процент с продаж.`,
};
const AboutMe = () => {
  const description = `${pageText.paraOne} ${stripTags(pageText.paraTwo)}`;
  return (
    <>
      <div>
        <SEO
          title="Обо мне"
          description={description}
          path=""
          keywords={['Ezcube', 'FullStack developer', 'Javascript', 'ReactJS', 'NodeJS', 'Gatsby']}
        />
        <h1 className="titleSeparate">Обо мне</h1>
        <p>
          {pageText.paraOne}
        </p>
        <p dangerouslySetInnerHTML={domHtml(pageText.paraTwo)} />
      </div>
      <Row gutter={[20, 20]}>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="location.png"
            height={60}
            alt="location image"
            textH4="Родился и вырос в"
            textH3="г. Набережные Челны, РТ, Россия"
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="coffee.png"
            alt="coffee image"
            textH4="Люблю кофе"
            textH3="Кофе + Я = Счастье"
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="meeting.png"
            alt="meeting image"
            textH4="Интроверт"
            textH3="Предпочитаю работать с техникой"
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="motorcycle.png"
            alt="technology image"
            textH4="Люблю технологии"
            textH3="Будущее за ними"
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="web.png"
            alt="web image"
            textH4="Самостоятельно обученный программист"
            textH3="Спасибо интернету"
            height={60}
            width={60}
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="graduation.png"
            alt="graduation image"
            textH4="Получил высшее образование"
            textH3="А оно надо?"
            height={60}
            width={60}
          />
        </Col>
      </Row>
    </>
  );
};
export default AboutMe;
