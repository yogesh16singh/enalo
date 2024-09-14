import React, { useState } from "react";
import { Button, Checkbox, Form, Input, Select } from "antd";
import "./index.css";
import TextArea from "antd/es/input/TextArea";
const onFinish = (values) => {
  console.log("Success:", values);
};
const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};
const App = () => {
  const [form] = Form.useForm();
  const [formLayout, setFormLayout] = useState("vertical");
  const onFormLayoutChange = ({ layout }) => {
    setFormLayout(layout);
  };
  const validateMessages = {
    required: "${label} is required!",
    types: {
      email: "${label} is not a valid email!",
      number: "${label} is not a valid number!",
    },
    number: {
      range: "${label} must be between ${min} and ${max}",
    },
  };
  const formItemLayout =
    formLayout === "horizontal"
      ? {
          labelCol: {
            span: 4,
          },
          wrapperCol: {
            span: 14,
          },
        }
      : null;
  const buttonItemLayout =
    formLayout === "horizontal"
      ? {
          wrapperCol: {
            span: 14,
            offset: 4,
          },
        }
      : null;
  return (
    <div className="container">
      <header className="header">
        <div>
          <h5 style={{textAlign:"center"}}>Contact us</h5>
          <h2 style={{textAlign:"center"}}>Make an Appointment</h2>
        </div>

        <div>
          <h3 style={{textAlign:"center"}}> Book Appointment</h3>
        </div>
      </header>
      <div className="form">
      <Form
        {...formItemLayout}
        layout={formLayout}
        form={form}
        initialValues={{
          layout: formLayout,
        }}
        onValuesChange={onFormLayoutChange}
        style={{
          maxWidth: formLayout === "inline" ? "none" : 600,
        }}
        validateMessages={validateMessages}
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <div className="formfirstrow" >
        <Form.Item
          label="Name"
          name="Name"
          rules={[
            {
              required: true,
              message: "Please input your Name!",
            },
          ]}
        >
          <Input placeholder="Full Name *" />
        </Form.Item>

        <Form.Item
          name={["email"]}
          label="Email Address"
          rules={[
            {
              required: true,
              message: "Please input your email!",
              type: "email",
            },
          ]}
        >
          <Input placeholder="example@gmail.com" />
        </Form.Item>

        </div>
       

        <Form.Item name={["department"]} 
        label="Department"
        rules={[
          {
            required: true,
            message: "Please enter department!",
            
          },
        ]}
        >
          <Select placeholder="Please Select">
            <Select.Option value="demo">Demo</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item
         name={["time"]}
          label="Time *"
          rules={[
            {
              required: true,
              message: "Please enter time!",
              
            },
          ]}>
          <Select placeholder="4:00 Available">
            <Select.Option value="demo">Demo</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item name={["message"]}>
          <TextArea placeholder="Message" rows={4} />
        </Form.Item>
        <Form.Item
          wrapperCol={{
            offset: 4,
            span: 16,
          }}
        >
        
          <Button style={{ padding:"25px",background: "#23A6F0" }} type="primary" htmlType="submit">
            Book Appointment
          </Button>

        </Form.Item>
      </Form>
      </div>

      
    </div>
  );
};
export default App;
