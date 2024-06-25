"use client"

import { Flex, Layout } from 'antd';
import Sider from 'antd/es/layout/Sider';
import { Content } from 'antd/es/layout/layout';
import Sidebar from '@/components/Sidebar/Sidebar';
import Users from '@/components/Users/Users';

const UsersPage = () => {

    return (
        <Flex>
            <Layout>
                <Layout>
                    <Sider>
                        <Sidebar />
                    </Sider>
                    <Content>
                        <Users />
                    </Content>
                </Layout>
            </Layout>
        </Flex>
    )
}

export default UsersPage