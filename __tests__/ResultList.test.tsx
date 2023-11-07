import renderer from 'react-test-renderer';
import { ResultList } from '../src/components/ResultList/ResultList';
import React from 'react';

test('se nelle props ricevo una lista vuota, il div #resultList non dovrà avere figli', () => {
    const results = renderer.create(<ResultList result={[]} />);
    const document = results.toJSON();
    const div = document?.children.find( => child.props.id == "resultList");
expect(div?.children.length).toBe(0);
});

test('se nelle props ottengo 1 solo risultato, mi aspetto che il div #resultList contenga 1 solo elemento e che rispecchi i valori delle props.', () => {
    const mockProps = [{ title: "The Lord of the Rings", overview: "bla bla bla", cover: "", id: 1 }];
    const results = renderer.create(<ResultList result={mockProps} />);
    const document = results.toJSON();
    const div = document?.children.find(child => child.props.id == "resultList");
    expect(div?.children.length).toBe(1);
});