import React, { useState, useEffect } from 'react';
import './App.css';
import CodeEditor from './components/CodeEditor';

const App = () => {
  const [html, setHtml] = useState('');
  const [css, setCss] = useState('');
  const [js, setJs] = useState('');

  const [srcDoc, setSrcDoc] = useState('');

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(`
        <html>
          <body>${html}</body>
          <style>${css}</style>
          <script>${js}</script>
        </html>
      `);
    }, 250);

    return () => clearTimeout(timeout);
  }, [html, css, js]);

  return (
    <div className='editor'>
      <div className="logo">CODE EDITOR BY LOKESHWAR KAMUNI</div>
      <div className="top-section">
        <CodeEditor language="xml" displayName="HTML" value={html} onChange={setHtml} />
        <CodeEditor language="css" displayName="CSS" value={css} onChange={setCss}/>
        <CodeEditor language="javascript" displayName="JS" value={js} onChange={setJs}/>
      </div>
      <div className="bottom-section">
        <iframe
          srcDoc={srcDoc}
          title="output"
          sandbox="allow-scripts"
          frameBorder="0"
          width="100%"
          height="100%"
        />
      </div>
    </div>
  );
}

export default App;
