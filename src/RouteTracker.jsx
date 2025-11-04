import {useEffect} from 'react';
import {useLocation} from 'react-router-dom';
import {sendPageView} from './ga';

export default function RouteTracker() {
  const {pathname} = useLocation();

  useEffect(() => {
    const path = pathname;

    const title = document.title || pathname;
    sendPageView(path, title);
  }, [pathname]);

  return null;
}
