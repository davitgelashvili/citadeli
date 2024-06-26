"use client"

import UiInput from "@/components/Ui/UiInput"
import { Form, Input } from "antd"

const AddUser = ({inputList, inputValue, setInputValue}:any) => {
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

export default AddUser