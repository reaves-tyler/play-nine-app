import { Header } from '../components/Header';
import { Row, Button, Typography } from 'antd';

export default function Index() {
    const { Title } = Typography;

    return (
        <>
            <Header />

            <Row justify='center'>
                <Title level={2}>Welcome to Play Nine!</Title>
            </Row>
            <br />
            <Row justify='center'>
                <Button type='primary' size='large' href='/game/new' block>
                    Start a new game
                </Button>
            </Row>
            <br />
            <Row justify='center'>
                <Button type='primary' size='large' href='/game' block>
                    Join a game
                </Button>
            </Row>
        </>
    );
}
