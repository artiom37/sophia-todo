import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './styles.css';
import "bootstrap/dist/css/bootstrap.min.css";
import SophiaTodoApp from './SophiaTodoApp';

const rootElement = document.getElementById("root")!;
const root = ReactDOM.createRoot(rootElement);

<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css"
  integrity="sha384-F3w7mX95PdgyTmZZMECAngseQB83DfGTowi0iMjiWaeVhAn4FJkqJByhZMI3AhiU"
  crossOrigin="anonymous"
/>

root.render(
  <React.StrictMode>
    <SophiaTodoApp />
  </React.StrictMode>
);

