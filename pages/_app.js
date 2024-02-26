import '../styles/globals.css';

// components
import Layout from '../components/Layout';
import Transtion from '../components/Transition';

// router
import { useRouter } from 'next/router';

// framer motion
import { AnimatePresence, motion } from 'framer-motion';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
  <Layout> 
    <AnimatePresence mode='wait'>
      <motion.div key={router.route} className='h-full'>
    <Transtion />
    <Component {...pageProps} />;
    </motion.div>
    </AnimatePresence>
  </Layout>
  );
}

export default MyApp;
