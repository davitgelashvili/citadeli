"use client"

import { Button, Form, Input } from "antd"
import { useEffect, useState } from "react"

const AddUser = () => {
    const [data, setData] = useState({
        name: ''
    })

    useEffect(()=>{
        console.log(data)
    }, [data])

    return (
        <>
        <Form>
            <Form.Item label="სახელი" name="Input" rules={[{ required: true, message: 'ველი ცარიელია' }]}>
                <Input value={data.name} placeholder={''} onChange={(e) => setData({...data, [data.name]: e.target.value})}/>
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 6, span: 16 }}>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
        </>
    )
}

export default AddUser