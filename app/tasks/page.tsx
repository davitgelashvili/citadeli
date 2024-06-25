"use client"

import { Flex, Layout } from 'antd';
import Sider from 'antd/es/layout/Sider';
import { Header, Footer, Content } from 'antd/es/layout/layout';
import { useEffect, useState } from 'react';
import {getData} from '../../http/api'
import Sidebar from '@/components/Sidebar/Sidebar';
import UserList from '@/components/Users/List/List';

const Tasks = () => {
    const [data, setData] = useState([])
    useEffect(()=>{
        getData('/members').then((res:any)=>{
            setData(res)
        })
    }, [])

    return (
        <Flex>
            <Layout>
                <Layout>
                    <Sider>
                        <Sidebar />
                    </Sider>
                    <Content>
                        <button>daamteba</button>
                        <UserList data={data} />
                    </Content>
                </Layout>
            </Layout>
        </Flex>
    )
}

export default Tasks