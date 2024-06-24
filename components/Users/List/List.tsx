import { List, Row } from 'antd'
import Item from '../Item/Item'

const UserList = ({data}:any) => {
    return (
        <Row>
            <List
                grid={{column: 4 }}
                dataSource={data}
                renderItem={(item, index) => (
                    <Item item={item} key={item}/>
                )}>
            </List>
        </Row>
    )
}

export default UserList