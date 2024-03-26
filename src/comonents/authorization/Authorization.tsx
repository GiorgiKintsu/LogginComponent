import './Authorization.css'
import { Card } from "antd";
import UserIcon from '../../assets/images/UserIcon.svg'
import React, { useState } from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import axios, {AxiosResponse} from 'axios';
import { useNavigate } from 'react-router-dom';

const Authorization : React.FC = () => {
    const [data, setData] = useState({
        username: "",
        password: ""
    })
    

    const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setData({...data, [e.target.name]: e.target.value}) 
    }

    const navigate = useNavigate()

    const submitHandler = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()
        axios.post('https://dummyjson.com/auth/login', data)
        .then((response: AxiosResponse) => {
            console.log(response);
            localStorage.setItem("token", JSON.stringify(response))
            navigate('/homepage')
        })
    }

    const [showParssword, setShowPassword] = useState(false)

    const toggleShowParssword = () => {
        setShowPassword(!showParssword)
    }



    const onFinish = (values: any) => {
        console.log('Received values of form: ', values);
    };

    return (
        <div className='authorizationCardWrapper'>
            <h1 className='authCardTitle'>ავტორიზაცია</h1>
            <Card className='authCardWrapper'>
                <div className='authCardTop'>
                    <img src={UserIcon} alt="user-icon" />
                    <h2 className='nameAndPassword'>სახელით და პაროლით</h2>
                    <p className='authInstruction'>ავტორიზაციისთვის გთხოვთ გამოიყენოთ თქვენი MY.GOV.GE_ის ანგარიში</p>
                </div>
                <Form
                    name="normal_login"
                    className="login-form"
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                >
                    <Form.Item
                        rules={[{ required: true, message: 'Please input your Username!' }]}
                    >
                        <label>მომხმარებელი</label>
                        <Input placeholder="ელ.ფოსტა ან მობილური" name="username" onChange={inputHandler} />
                    </Form.Item>
                    <Form.Item
                        rules={[{ required: true, message: 'Please input your Password!' }]}
                    >
                        <label>პაროლი</label>
                        <Input type={showParssword ? 'text' : 'password'} placeholder="პაროლი" name="password" onChange={inputHandler} />
                        <Form.Item name="remember" noStyle>
                            <Checkbox className='showParssword' onChange={toggleShowParssword}>მაჩვენე პაროლი</Checkbox>
                        </Form.Item>
                    </Form.Item>

                    
                    <Button type="primary" htmlType="submit" className="login-form-button" onClick={submitHandler}>
                            შესვლა
                    </Button>              
                </Form>
            </Card>
        </div>
    )
}

export default Authorization