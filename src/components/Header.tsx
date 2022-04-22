import Link from 'next/link';
import { Menu, Button } from 'antd';
import { useRouter } from 'next/router';
import { useSession, signIn, signOut } from 'next-auth/react';

export const Header = () => {
    const router = useRouter();
    const { data: session } = useSession();

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
                <Menu.Item key='/login'>
                    {session ? (
                        <Button onClick={() => signOut()}>Sign out</Button>
                    ) : (
                        <Button onClick={() => signIn()}>Sign in</Button>
                    )}
                </Menu.Item>
            </Menu>
            <br />
        </>
    );
};
