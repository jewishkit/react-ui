'use strict';

import React, { PropTypes } from 'react';

import { StyleSheet, css } from '../helpers/styles';
import TeleportWrapper from './TeleportWrapper';

export default class TeleportContext extends React.Component {
    static propTypes = {};

    constructor(props, ...args) {
        super(props, ...args);

        this.state = {
            shownComponents: []
        };

        this._componentsBank = {};
        this._shownComponents = [];
        this._refs = {};
    }

    getChildContext() {
        return {
            teleport: {
                move: (id, component) => {
                    this._componentsBank[id] = component;
                    this._shownComponents.push(id);

                    this.setState({
                        shownComponents: this._shownComponents
                    });
                },
                remove: (componentID: string, callback: () => void) => {
                    this._shownComponents = this._shownComponents.filter(id => id !== componentID);
                    this._componentsBank[componentID] = null;
                    this._refs[componentID] = null;

                    this.setState({ shownComponents: this._shownComponents }, callback);
                },
                update: (id: string, newChildren: Object, callback: () => void) => {
                    const component = this._refs[id];

                    component && component.isMount() && component.update(newChildren, callback);
                },
                isAdded: (componentID) => {
                    return this._shownComponents.some(id => id === componentID);
                }
            }
         };
    }

    render() {
        const props = this.props;

        return (
            <div>
                {React.cloneElement(
                    props.children,
                    {
                        children: [
                            <div className={css(styles.teleportRoot)}>
                                {
                                    this.state.shownComponents.map((id) => (
                                        <TeleportWrapper key={id} ref={(c) => c && (this._refs[id] = c)}>
                                            {this._componentsBank[id]}
                                        </TeleportWrapper>
                                    ))
                                }
                            </div>,
                            ...React.Children.toArray(props.children.props.children)
                        ]
                    })
                }
            </div>
        )
    }
}

TeleportContext.childContextTypes = {
    teleport: PropTypes.shape({
        move: PropTypes.func,
        remove: PropTypes.func,
        update: PropTypes.func,
        isAdded: PropTypes.func
    })
};


const styles = StyleSheet.create({
    teleportRoot: {
        position: 'absolute'
    }
});