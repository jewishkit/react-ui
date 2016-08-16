import React from 'react';
import { storiesOf, action } from '@kadira/storybook';

import StateProvider from '../StateProvider';
import Placer from './Placer';
import { TeleportContext } from '../Teleport';

storiesOf('Placer', module)
    .add('Y axis outside top', () => (
        <TeleportContext>
            <div style={{ margin: '40px' }}>
                <div style={{ padding: '20px', background: '#eee', width: '200px' }}>
                    Target
                    <Placer yAxisPresets={['outside-top']} xAxisPresets={['middle']} >
                        <div style={{ padding: '8px', background: '#333', width: '100px', color: '#fff' }}>
                            Placeable
                        </div>
                    </Placer>
                </div>
            </div>
        </TeleportContext>
    ))
    .add('Y axis outside bottom', () => (
        <TeleportContext>
            <div style={{ margin: '40px' }}>
                <div style={{ padding: '20px', background: '#eee', width: '200px' }}>
                    Target
                    <Placer yAxisPresets={['outside-bottom']} xAxisPresets={['middle']}>
                        <div style={{ padding: '8px', background: '#333', width: '100px', color: '#fff' }}>
                            Placeable
                        </div>
                    </Placer>
                </div>
            </div>
        </TeleportContext>
    ))
    .add('Y axis middle', () => (
        <TeleportContext>
            <div style={{ margin: '40px' }}>
                <div style={{ padding: '20px', background: '#eee', width: '200px' }}>
                    Target
                    <Placer yAxisPresets={['middle']} xAxisPresets={['middle']}>
                        <div style={{ padding: '8px', background: '#333', width: '100px', color: '#fff' }}>
                            Placeable
                        </div>
                    </Placer>
                </div>
            </div>
        </TeleportContext>
    ))
    .add('Y axis inside top', () => (
        <TeleportContext>
            <div style={{ margin: '40px' }}>
                <div style={{ padding: '20px', background: '#eee', width: '200px' }}>
                    Target
                    <Placer yAxisPresets={['inside-top']} xAxisPresets={['middle']}>
                        <div style={{ padding: '8px', background: '#333', width: '100px', color: '#fff' }}>
                            Placeable
                        </div>
                    </Placer>
                </div>
            </div>
        </TeleportContext>
    ))
    .add('Y axis inside bottom', () => (
        <TeleportContext>
            <div style={{ margin: '40px' }}>
                <div style={{ padding: '20px', background: '#eee', width: '200px' }}>
                    Target
                    <Placer yAxisPresets={['inside-bottom']} xAxisPresets={['middle']}>
                        <div style={{ padding: '8px', background: '#333', width: '100px', color: '#fff' }}>
                            Placeable
                        </div>
                    </Placer>
                </div>
            </div>
        </TeleportContext>
    ))
    .add('X axis outside left', () => (
        <TeleportContext>
            <div style={{ margin: '40px' }}>
                <div style={{ padding: '20px', background: '#eee', width: '200px' }}>
                    Target
                    <Placer xAxisPresets={['outside-left']} yAxisPresets={['middle']}>
                        <div style={{ padding: '8px', background: '#333', width: '100px', color: '#fff' }}>
                            Placeable
                        </div>
                    </Placer>
                </div>
            </div>
        </TeleportContext>
    ))
    .add('X axis outside right', () => (
        <TeleportContext>
            <div style={{ margin: '40px' }}>
                <div style={{ padding: '20px', background: '#eee', width: '200px' }}>
                    Target
                    <Placer xAxisPresets={['outside-right']} yAxisPresets={['middle']}>
                        <div style={{ padding: '8px', background: '#333', width: '100px', color: '#fff' }}>
                            Placeable
                        </div>
                    </Placer>
                </div>
            </div>
        </TeleportContext>
    ))
    .add('X axis middle', () => (
        <TeleportContext>
            <div style={{ margin: '40px' }}>
                <div style={{ padding: '20px', background: '#eee', width: '200px' }}>
                    Target
                    <Placer xAxisPresets={['middle']} yAxisPresets={['middle']}>
                        <div style={{ padding: '8px', background: '#333', width: '100px', color: '#fff' }}>
                            Placeable
                        </div>
                    </Placer>
                </div>
            </div>
        </TeleportContext>
    ))
    .add('X axis inside left', () => (
        <TeleportContext>
            <div style={{ margin: '40px' }}>
                <div style={{ padding: '20px', background: '#eee', width: '200px' }}>
                    Target
                    <Placer xAxisPresets={['inside-left']} yAxisPresets={['middle']}>
                        <div style={{ padding: '8px', background: '#333', width: '100px', color: '#fff' }}>
                            Placeable
                        </div>
                    </Placer>
                </div>
            </div>
        </TeleportContext>
    ))
    .add('X axis inside right', () => (
        <TeleportContext>
            <div style={{ margin: '40px' }}>
                <div style={{ padding: '20px', background: '#eee', width: '200px' }}>
                    Target
                    <Placer xAxisPresets={['inside-right']} yAxisPresets={['middle']}>
                        <div style={{ padding: '8px', background: '#333', width: '100px', color: '#fff' }}>
                            Placeable
                        </div>
                    </Placer>
                </div>
            </div>
        </TeleportContext>
    ))
    .add('Auto position left top corner', () => (
        <TeleportContext>
            <div style={{ margin: '40px' }}>
                <div style={{ position: 'absolute', top: 20, left: 20, padding: '20px', background: '#eee', width: '200px' }}>
                    Target
                    <Placer xAxisPresets={['inside-left']} yAxisPresets={['outside-bottom']}>
                        <div style={{ padding: '8px', background: '#333', width: '280px', color: '#fff' }}>
                            Placeable
                        </div>
                    </Placer>
                </div>
            </div>
        </TeleportContext>
    ))
    .add('Auto position right top corner', () => (
        <TeleportContext>
            <div style={{ margin: '40px' }}>
                <div style={{ position: 'absolute', top: 20, right: 20, padding: '20px', background: '#eee', width: '200px' }}>
                    Target
                    <Placer xAxisPresets={['inside-left']} yAxisPresets={['outside-bottom']}>
                        <div style={{ padding: '8px', background: '#333', width: '280px', color: '#fff' }}>
                            Placeable
                        </div>
                    </Placer>
                </div>
            </div>
        </TeleportContext>
    ))
    .add('Auto position left bottom corner', () => (
        <TeleportContext>
            <div style={{ margin: '40px' }}>
                <div style={{ position: 'absolute', bottom: 20, left: 20, padding: '20px', background: '#eee', width: '200px' }}>
                    Target
                    <Placer xAxisPresets={['inside-left']} yAxisPresets={['outside-bottom']}>
                        <div style={{ padding: '8px', background: '#333', width: '280px', color: '#fff' }}>
                            Placeable
                        </div>
                    </Placer>
                </div>
            </div>
        </TeleportContext>
    ))
    .add('Auto position right bottom corner', () => (
        <TeleportContext>
            <div style={{ margin: '40px' }}>
                <div style={{ position: 'absolute', bottom: 20, right: 20, padding: '20px', background: '#eee', width: '200px' }}>
                    Target
                    <Placer xAxisPresets={['inside-left']} yAxisPresets={['outside-bottom']}>
                        <div style={{ padding: '8px', background: '#333', width: '280px', color: '#fff' }}>
                            Placeable
                        </div>
                    </Placer>
                </div>
            </div>
        </TeleportContext>
    ))

// где больше пространтсва туда и помещаем

// 1) apply position to placeable
// 2) проходимся циклом по всем позациям и вычисляем свободное место , если оно больше предыдущего то запоминаем/
// need: 1) map position->targetProperty for space