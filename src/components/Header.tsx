import Link from 'next/link';
import { useState } from 'react';
import { Menu } from 'antd';
import { useRouter } from 'next/router';

export const Header = () => {
    const router = useRouter();
    console.log(router.route);
    return (
        <>
            <Menu mode='horizontal' selectedKeys={[router.route]}>
                <Menu.Item key='/'>
                    <Link href='/'>Home</Link>
                </Menu.Item>
                <Menu.Item key='/game/new'>
                    <Link href='/game/new'>New</Link>
                </Menu.Item>
                <Menu.Item key='/game'>
                    <Link href='/game'>Games </Link>
                </Menu.Item>
            </Menu>
            <br />
        </>
    );
};
