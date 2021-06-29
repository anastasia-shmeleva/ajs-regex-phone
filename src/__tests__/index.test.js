/* eslint-disable no-undef */
import converter from '../index';

test('number transform', () => {
  expect(converter('8 (927) 000-00-00')).toBe('+79270000000');
});
