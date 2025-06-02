import { Outlet } from 'react-router-dom';
import Header from './components/Header';

function Layout({ inpValue, setValue }) {
  return (
    <div>
      <Header inpValue={inpValue} setValue={setValue} />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
