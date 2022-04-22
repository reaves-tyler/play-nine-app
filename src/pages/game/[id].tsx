import { useRouter } from 'next/router';
import useSWR from 'swr';
import { Row, Input, Button, Col, Table, Typography } from 'antd';
import { Header } from '../../components/Header';
import React, { useState } from 'react';
import axios from 'axios';
import { useSession } from 'next-auth/react';

const fetcher = async (url) => {
    const res = await fetch(url);
    const data = await res.json();

    if (res.status !== 200) {
        throw new Error(data.message);
    }
    return data;
};

export default function Game({}) {
    const { data: session } = useSession();
    const { Title } = Typography;
    const { query } = useRouter();
    const { data, error, mutate } = useSWR(() => query.id && `/api/score/${query.id}`, fetcher, {
        refreshInterval: 5000,
    });
    const [value, setValue] = useState<string | number>(null);

    const [game, setGame] = useState<string>('');

    if (query.id) {
        axios.get(`/api/game/${query.id}`).then((res) => {
            setGame(res.data.name);
        });
    }

    if (error) return <div>{error.message}</div>;
    if (!data) return <div>Loading...</div>;

    const newScore = async (e, positive) => {
        if (!isNaN(Number(value))) {
            await axios.post('/api/score', {
                gameID: query.id,
                player: session?.user.email,
                value: positive ? 0 + Number(value) : 0 - Number(value),
            });
        }

        setValue(null);
        mutate();
    };

    return (
        <>
            <Header />
            <Row justify='center'>
                <Title level={4}>{game}</Title>
            </Row>
            <br />
            <Row>
                <Input value={value} onChange={(e) => setValue(e.target.value)} placeholder='Enter score' />
            </Row>
            <br />
            <Row>
                <Col span={12}>
                    {' '}
                    <Button
                        size='large'
                        onClick={(e) => newScore(e, false)}
                        disabled={value === null || isNaN(Number(value)) || String(value).trim() === ''}
                        block>
                        Negative
                    </Button>
                </Col>
                <Col span={12}>
                    {' '}
                    <Button
                        type='primary'
                        size='large'
                        onClick={(e) => newScore(e, true)}
                        disabled={value === null || isNaN(Number(value)) || String(value).trim() === ''}
                        block>
                        Positive
                    </Button>
                </Col>
            </Row>
            <br />
            <br />
            <Row>
                <Col span={24}>
                    <Table
                        dataSource={data}
                        columns={[
                            {
                                title: 'Player',
                                dataIndex: 'player',
                                key: 'player',
                            },
                            {
                                title: 'Score',
                                dataIndex: 'value',
                                key: 'value',
                            },
                            {
                                title: 'Round',
                                dataIndex: 'count',
                                key: 'count',
                            },
                        ]}
                        pagination={false}
                    />
                </Col>
            </Row>
        </>
    );
}
