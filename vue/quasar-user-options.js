import './styles/quasar.scss';
import '@quasar/extras/roboto-font/roboto-font.css';
import '@quasar/extras/material-icons/material-icons.css';
import '@quasar/extras/fontawesome-v6/fontawesome-v6.css';
import { AppFullscreen, Dialog, LoadingBar, Notify, SessionStorage } from 'quasar';
import de from 'quasar/lang/de';

// To be used on app.use(Quasar, { ... })
export default {
  config: {
    loadingBar: {
      color: 'secondary',
      size: '15px',
      position: 'bottom'
    }
  },
  plugins: { LoadingBar, AppFullscreen, Notify, Dialog, SessionStorage },
  lang: de,
  importStrategy: 'auto'
};
