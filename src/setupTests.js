import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import fetchMock from 'fetch-mock';

import { payload } from './__mocks__/payload';

configure({ adapter: new Adapter() });

fetchMock.get('*', payload);
