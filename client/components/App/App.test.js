import React from 'react';
import App from './App';
import renderer from 'react-test-renderer';

test('two plus two is four', () => {
    expect(2 + 2).toBe(4);
    expect(2 + 3).not.toBe(4);
});
//
// test('test add', () => {
//     let component = renderer.create(<App />);
//     let tree = component.toJSON();
//
//     expect(tree).toMatchSnapshot();
//
//     // expect(App.add(2, 3)).toBe(5);
// });
