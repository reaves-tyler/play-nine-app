import useSwr from 'swr';
import Link from 'next/link';
import { Header } from '../../components/Header';
import axios from 'axios';
import { Row, Button, Col, Card, Typography } from 'antd';

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function games() {
    const { Title } = Typography;
    const { data, error, mutate } = useSwr('/api/game', fetcher);

    if (error) return <div>Failed to load games</div>;
    if (!data) return <div>Loading...</div>;

    const endGame = async (e, _id) => {
        await axios.patch(`/api/game/${_id}`, { active: false });
        mutate();
    };

    if (data.length === 0) {
        return (
            <>
                <Header />
                <Row>
                    <Link href='/game/new'>
                        <Button size='large' type='primary'>
                            Create Game
                        </Button>
                    </Link>
                </Row>
            </>
        );
    }

    return (
        <>
            <Header />
            <Row justify='center'>
                <Title level={2}>Join game</Title>
            </Row>
            <Row justify='center' gutter={[32, 32]}>
                {data.map(
                    (game) =>
                        game.active && (
                            <>
                                <Col span={12}>
                                    <Card size='small' title={game.name}>
                                        {' '}
                                        <Row justify='center'>
                                            <Col span={12}>
                                                <Link href='/game/[id]' as={`/game/${game._id}`}>
                                                    <Button size='large' type='primary' block>
                                                        Join
                                                    </Button>
                                                </Link>
                                            </Col>
                                            <Col span={12}>
                                                <Button size='large' onClick={(e) => endGame(e, game._id)} block>
                                                    End
                                                </Button>
                                            </Col>
                                        </Row>
                                    </Card>
                                </Col>
                            </>
                        )
                )}
            </Row>
        </>
    );
}
