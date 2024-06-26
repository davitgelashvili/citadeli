"use client"

import { List } from 'antd'
import Item from '../Item/Item'
import { useEffect, useState } from 'react'
import { getData } from '@/http/api'

const UserList = ({success, setSuccess}:any) => {

    const [data, setData] = useState([])
    useEffect(()=>{
        getData('/members').then((res:any)=>{
            setData(res)
        })
    }, [success])

    return (
        <List
            grid={{column: 3}}
            dataSource={data}
            renderItem={(item, index) => (
                <Item item={item} key={item} success={success} setSuccess={setSuccess}/>
            )}>
        </List>
    )
}

export default UserList