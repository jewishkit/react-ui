'use strict';

import React, { PropTypes } from 'react';
import View from '../View';
import Teleport from '../Teleport';
import Popup from '../Popup';
import Transition from '../Transition';
import AutoClosable from '../AutoClosable';

import { StyleSheet } from '../helpers/styles';

export default class Modal extends React.Component {
    static propTypes = {
        isShown: PropTypes.boolean,
        onDidClose: PropTypes.func,
        onDidShow: PropTypes.func
    };

    constructor(props, ...args) {
        super(props, ...args);

        this.state = {
            isShown: false
        };

        this._onShowHandler =  this._onShowHandler.bind(this);
        this._onCloseHandler =  this._onCloseHandler.bind(this);
        this._isBodyScrollDisabled = null;
        this._prevBodyOverflow = null;
    }

    componentDidMount() {
        this.props.isShown && this.show();
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.isShown !== this.props.isShown) {
            nextProps.isShown ? this.show() : this.hide();
        }
    }
    
    show() {
        this.setState({ isShown: true });
    }

    hide() {
        this._enableBodyScroll();
        this.setState({ isShown: false });
    }

    _renderChildren() {
        const props = this.props;

        return React.Children.map(props.children, (child) => {
            if (child && child.type && child.type.__MODAL_HEADER__) {
                return React.cloneElement(child, {
                    onClose: props.onClose
                });
            }

            return child;
        });
    }

    _disableBodyScroll() {
        if (typeof document !== 'undefined' && !this._isBodyScrollDisabled) {
            let body = document.body;

            this._isBodyScrollDisabled = true;
            this._prevBodyOverflow = body.style.overflow;
            body.style.overflow = 'hidden';
        }
    }

    _enableBodyScroll() {
        if (typeof document !== 'undefined') {
            this._isBodyScrollDisabled = false;
            document.body.style.overflow = this._prevBodyOverflow;
        }
    }

    _onShowHandler() {
        this._disableBodyScroll();
        this.props.onDidShow && this.props.onDidShow();
    }

    _onCloseHandler() {
        this.hide();
    }

    render() {
        return (
            <Teleport>
                <Transition
                    timeout={200}
                    leaveTimeout={400}
                    onDidEnter={this._onShowHandler}
                    onDidLeave={() => this.props.onDidClose && this.props.onDidClose()}>
                    {this.state.isShown && (({ isEnter, isLeave }) => (
                        <View
                            styles={[
                                styles.overlay,
                                isEnter && styles.shownOverlay,
                                isLeave && styles.leaveOverlay
                            ]}>
                            <View
                                styles={[
                                    styles.inner,
                                    isEnter && styles.shownInner,
                                    isLeave && styles.leaveInner
                                ]}>
                                <AutoClosable onClose={this._onCloseHandler}>
                                    <Popup styles={[styles.popup]} isRounded >
                                        {this._renderChildren()}
                                    </Popup>
                                </AutoClosable>
                            </View>
                        </View>
                    ))}
                </Transition>
            </Teleport>
        )
    }
}

const styles = StyleSheet.create({
    overlay: {
        position: 'fixed',
        top: 0,
        right: 0,
        left: 0,
        bottom: 0,
        zIndex: 9999,
        transform: 'translate3d(0, 0, 0)',
        transition: 'all .2s ease-out',
        background: 'rgba(0, 0, 0, 0)',
    },
    inner: {
        minWidth: '100%',
        alignItems: 'flex-start',
        justifyContent: 'center',
        padding: '4.4rem 140px 5rem 140px',
        transition: 'all .2s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
        transform: 'translate3d(0, 0, 0) scale(.9)',
        opacity: 0,
    },
    popup: {
        padding: 0,
        flexDirection: 'column',
        overflow: 'hidden'
    },
    shownOverlay: {
        background: 'rgba(0, 0, 0, .4)'
    },
    shownInner: {
        transform: 'translate3d(0, 0, 0) scale(1)',
        opacity: 1
    },
    leaveInner: {
        transition: 'all .4s cubic-bezier(0.165, 0.84, 0.44, 1)'
    },
    leaveOverlay: {
        transition: 'all .4s cubic-bezier(0.165, 0.84, 0.44, 1)'
    }
});