"use client"

import UiInput from "@/components/Ui/UiInput"
import { Form } from "antd"

const UserForm = ({inputList, inputValue, setInputValue}:any) => {
    console.log(inputList)
    return (
        <Form>
            {
                inputList?.map((item:any)=>{
                    return (
                        <Form.Item label={item.title} name={item.name} rules={[{ required: true, message: 'ველი ცარიელია' }]} key={item.id}>
                            <UiInput 
                                inputValue={inputValue}
                                setInputValue={setInputValue}
                                item={item}
                            />
                        </Form.Item>
                    )
                })
            }
        </Form>
    )
}

export default UserForm