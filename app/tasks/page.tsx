"use client"

import { Flex, Layout } from 'antd';
import Sider from 'antd/es/layout/Sider';
import { Content } from 'antd/es/layout/layout';
import Sidebar from '@/components/Sidebar/Sidebar';

const Tasks = () => {

    return (
        <Flex>
            <Layout>
                <Layout>
                    <Sider>
                        <Sidebar />
                    </Sider>
                    <Content>
                        მზადების პროცესშია...
                    </Content>
                </Layout>
            </Layout>
        </Flex>
    )
}

export default Tasks