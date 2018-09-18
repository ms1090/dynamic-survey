import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
// configure adapter to use enzyme in unit test cases
configure({ adapter: new Adapter() });
