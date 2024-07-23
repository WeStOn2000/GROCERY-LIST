import { createRoot } from 'react-dom/client';

const element = (
<>
 <h1>My First React App</h1>
 <p>i just learned how to create a react and use React-Dom</p>
</>
)

const root = createRoot( document.getElementById('root'));
root.render(element);