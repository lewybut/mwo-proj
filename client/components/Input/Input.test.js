import React from 'react';
import { mount, shallow } from 'enzyme';
import sinon from 'sinon';
import Input from './Input';

describe('<Input />', () => {

    let wrapper;

    beforeAll(() => {
        wrapper = shallow(
            <Input
                inputType="text"
                inputValue=""
                inputLabel="label"
                isCorrect={true}
                autoFocus={false}
                onBlur={() => null}
                onFocus={() => null}
                onChange={() => null}
            />
        );
    });

    it('calls render() once', () => {
        sinon.spy(Input.prototype, 'render');
        mount(<Input inputType="submit" inputValue="Submit" />);
        expect(Input.prototype.render.calledOnce).toBeTruthy();
    });

    it('check input props', () => {
        expect(wrapper.find('input').props().type).toBe('text');
        expect(wrapper.find('input').props().autoFocus).toBeFalsy();
    });

});
