import React, { useState } from 'react';
import axios from 'axios';
import { Button, Row, Input, Typography } from 'antd';
import { useRouter } from 'next/router';
import { Header } from '../../components/Header';

export default function Games() {
    const { Title } = Typography;
    const [value, setValue] = useState('');
    const router = useRouter();
    const handleChange = (event) => setValue(event.target.value);

    const newGame = async () => {
        console.log(value);
        const game = await axios.post('/api/game/new', { name: value });
        router.push(`/game/${game.data._id}`);
    };

    return (
        <>
            <Header />
            <Row justify='center'>
                <Title level={2}>Create game</Title>
            </Row>
            <br />
            <Row>
                <Input value={value} onChange={handleChange} placeholder='Enter the name of your game' />
            </Row>
            <br />
            <Row justify='center'>
                <Button type='primary' size='large' onClick={newGame} disabled={!value} block>
                    Start!
                </Button>
            </Row>
        </>
    );
}
