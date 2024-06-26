"use client"

import { DatePicker, Form, Input, Radio } from "antd"

const UiInput = ({item, inputValue, setInputValue}:any) => {
    const dateFormat = (e:any) => {
        let m = e.$M
        let y = e.$y
        let d = e.$D
        if(m < 9) {
            m = `0${(m+1)}`
        }else {
            m = m+1
        }

        if(d < 10) {
            d = `0${(d)}`
        }

        return `${y}-${m}-${d}`
    }

    if(item.type == 'date') {
        return (
            <DatePicker onChange={(e) => {
                return setInputValue({...inputValue, [item.name]: dateFormat(e)})
            }} />
        )
    }else if(item.type == 'radio') {
        return (
            <Radio.Group defaultValue={inputValue?.[item.name] ? inputValue?.[item.name] : undefined}  options={item.options} onChange={(e) => setInputValue({...inputValue, [item.name]: e.target.value})}  />
        )
    }else {
        return (
            <Form.Item name={item.name} rules={[{ required: true, message: 'ველი ცარიელია' }]} key={item.id}>
                <Input defaultValue={inputValue?.[item.name] ? inputValue?.[item.name] : undefined} placeholder={item.placeholder} onChange={(e) => setInputValue({...inputValue, [item.name]: e.target.value})}/>
            </Form.Item>
        )
    }
}

export default UiInput