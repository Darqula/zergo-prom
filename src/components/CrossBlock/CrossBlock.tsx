import React from 'react';
import { Cross } from '../Cross/Cross';

export function CrossBlock() {
    return (
        <div style={{ display: 'flex', justifyContent: 'space-between', margin: '5%' }}>
            <Cross />
            <Cross />
            <Cross />
            <Cross />
        </div>
    );
}