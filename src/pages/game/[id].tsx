import { useRouter } from 'next/router';
import useSWR from 'swr';
import { Row, Input, Button, Col, Table, Typography } from 'antd';
import { Header } from '../../components/Header';
import React, { useState } from 'react';
import axios from 'axios';

const fetcher = async (url) => {
    const res = await fetch(url);
    const data = await res.json();

    if (res.status !== 200) {
        throw new Error(data.message);
    }
    return data;
};

export default function Game() {
    const { Title } = Typography;
    const { query } = useRouter();
    const { data, error, mutate } = useSWR(() => query.id && `/api/score/${query.id}`, fetcher);
    const [value, setValue] = useState<number>();

    if (error) return <div>{error.message}</div>;
    if (!data) return <div>Loading...</div>;

    const newScore = async (e, positive) => {
        await axios.post('/api/score', {
            gameID: query.id,
            player: 'Test Player',
            value: positive ? 0 + value : 0 - value,
        });
        setValue(0);
        mutate();
    };

    return (
        <>
            <Header />
            <br />
            <Row justify='center'>
                <Title level={4}>Enter score for round</Title>
            </Row>
            <Row>
                <Input value={value} onChange={(e) => setValue(Number(e.target.value))} placeholder='Enter score' />
            </Row>
            <br />
            <Row>
                <Col span={12}>
                    {' '}
                    <Button size='large' onClick={(e) => newScore(e, false)} disabled={!value} block>
                        Negative
                    </Button>
                </Col>
                <Col span={12}>
                    {' '}
                    <Button type='primary' size='large' onClick={(e) => newScore(e, true)} disabled={!value} block>
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
                        ]}
                        pagination={false}
                    />
                </Col>
            </Row>
        </>
    );
}
