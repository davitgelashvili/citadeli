import { List } from 'antd'
import Item from '../Item/Item'
import { useEffect, useState } from 'react'
import { getData } from '@/http/api'

const UserList = () => {

    const [data, setData] = useState([])
    useEffect(()=>{
        getData('/members').then((res:any)=>{
            setData(res)
        })
    }, [])

    return (
        <List
            grid={{column: 4 }}
            dataSource={data}
            renderItem={(item, index) => (
                <Item item={item} key={item}/>
            )}>
        </List>
    )
}

export default UserList