import Enzyme from 'enzyme';
import Adapter from '@chalbert/enzyme-adapter-react-18';
import { StyleSheetTestUtils } from 'aphrodite';

Enzyme.configure({ adapter: new Adapter() });

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});
