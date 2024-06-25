"use client"

import { Form, Input } from "antd"

const AddUser = ({inputList, inputValue, setInputValue}:any) => {
    return (
        <Form>
            {
                inputList?.map((item:any)=>{
                    return (
                        <Form.Item label={item.title} name={item.name} rules={[{ required: true, message: 'ველი ცარიელია' }]} key={item.id}>
                            <Input placeholder={item.placeholder} onChange={(e) => setInputValue({...inputValue, [item.name]: e.target.value})}/>
                        </Form.Item>
                    )
                })
            }
        </Form>
    )
}

export default AddUser