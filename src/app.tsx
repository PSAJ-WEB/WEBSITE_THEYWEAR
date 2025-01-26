import { Suspense, type Component } from 'solid-js';
import { A, useLocation } from '@solidjs/router';

const App: Component = (props: { children: Element }) => {

  return (
    <>
      <main>
        <Suspense>{props.children}</Suspense>
      </main>
    </>
  );
};

export default App;