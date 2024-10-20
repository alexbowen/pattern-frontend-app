// components/__tests__/Chatty.test.js

import React from 'react';
import { shallow } from 'enzyme';
import fetchMock from 'jest-fetch-mock';
import List from '../dataSet';

fetchMock.enableMocks();

beforeEach(() => {
  fetch.resetMocks();
});

describe('<Chatty />', () => {
  it('renders loading state initially', () => {
    fetch.mockResponseOnce(JSON.stringify([]));
    const wrapper = shallow(<List />);
    expect(wrapper.text()).toContain('Loading...');
  });

  it('renders chat messages after fetching data', async () => {
    const mockData = [
      { id: 1, user: 'Alice', message: 'Hi there!' },
      { id: 2, user: 'Bob', message: 'Hello!' },
      { id: 3, user: 'Charlie', message: 'Good morning!' }
    ];

    fetch.mockResponseOnce(JSON.stringify(mockData));
    
    const wrapper = shallow(<List />);
    
    await new Promise(resolve => setImmediate(resolve));
    
    wrapper.update();

    expect(wrapper.find('li').length).toBe(3);
    expect(wrapper.text()).toContain('Alice: Hi there!');
    expect(wrapper.text()).toContain('Bob: Hello!');
    expect(wrapper.text()).toContain('Charlie: Good morning!');
  });

  it('renders error message on fetch failure', async () => {
    fetch.mockRejectOnce(new Error('Failed to fetch'));

    const wrapper = shallow(<List />);
    
    await new Promise(resolve => setImmediate(resolve));
    
    wrapper.update();

    expect(wrapper.text()).toContain('Error: Failed to fetch');
  });
});