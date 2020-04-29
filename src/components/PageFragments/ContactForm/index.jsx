import {
  Col, Form, Input, Button, message,
} from 'antd';
import React from 'react';
import Config from '../../../../config';


const validateMessages = {
  required: 'Поле обязательно для заполнения!',
  types: {
    email: 'неверный формат почты!',
  },
};
export default () => {
  const [form] = Form.useForm();
  const onFinish = (data) => {
    const formData = new FormData();
    // eslint-disable-next-line no-restricted-syntax
    for (const key in data) {
      if (data[key]) {
        formData.append(key, data[key]);
      }
    }

    fetch(Config.contactFormUrl, { method: 'POST', body: formData })
      .then(() => {
        message.success('Спасибо за обращение 🙂. Я с вами свяжусь!');
        form.resetFields();
      })
      // eslint-disable-next-line no-console
      .catch((error) => console.error('Error:', error));
  };

  return (
    <Col sm={24} md={24} lg={12} className="widthFull">
      <Form form={form} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
        <Form.Item name={['name']} rules={[{ required: true }]}>
          <Input size="large" placeholder="Имя *" />
        </Form.Item>
        <Form.Item name={['email']} rules={[{ type: 'email' }]}>
          <Input size="large" placeholder="Email" />
        </Form.Item>
        <Form.Item name={['description']} rules={[{ required: true }]}>
          <Input.TextArea size="large" rows={7} placeholder="Текст сообщения *" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" shape="round" size="large" htmlType="submit" style={{ background: '#304CFD' }}>
            ОТПРАВИТЬ
          </Button>
        </Form.Item>
      </Form>
    </Col>
  );
};
