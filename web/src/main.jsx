import App from '@/App';
import '@/index.css';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

const root = createRoot(document.getElementById('root'));

/**
 * @important - This is just to test the NUI, do not remove it unless your UI is ready
 */
window.postMessage({
  visible: true,
  data: {
    //!: Here we define the data that will be passed to the UI
  },
});

/**
 * @description - This is the event listener that will be triggered by postMessage
 */
window.addEventListener('message', (event) => {
  if (event.data.source) {
    return;
  }

  if (event.data.visible) {
    root.render(
      <StrictMode>
        <App {...event.data.data} />
      </StrictMode>
    );

    return;
  }

  root.render();
});
