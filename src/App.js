// import { Route, Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Download, Gallery, Slider, Service } from './components';
import Layout from './components/layout';
import { workData, secondWorkData } from './data';
import { StickyProvider } from './contexts/app/app.provider';


function App() {
  return (
    <>
    <div>
    {/* <StickyProvider> */}
        <Layout>
          <Slider />
          <Download />
          <Service />
          <Gallery data={workData} secondData={secondWorkData} />
        </Layout>
    {/* </StickyProvider> */}
        
    </div>
      <ToastContainer />
    </>
  );
}

export default App;
