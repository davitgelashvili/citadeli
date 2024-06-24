"use client"

import { Flex, Layout } from 'antd';
import Sider from 'antd/es/layout/Sider';
import { Header, Footer, Content } from 'antd/es/layout/layout';
import { useEffect, useState } from 'react';
import {getData} from './../http/api'
import Sidebar from '@/components/Sidebar/Sidebar';
import UserList from '@/components/Users/List/List';

const Home = () => {
    const [data, setData] = useState([])
    useEffect(()=>{
        getData('/members').then((res:any)=>{
            setData(res)
        })
    }, [])

    console.log(data)
    return (
        <Flex>
            <Layout>
                <Layout>
                    <Sider>
                        <Sidebar />
                    </Sider>
                    <Content>
                        <UserList data={data} />
                    </Content>
                </Layout>
            </Layout>
        </Flex>
    )
}

export default Home