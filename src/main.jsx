import { createRoot } from 'react-dom/client';

const title = "My First React App";

const desc = "i just learned how to create a react root and render the React-Dom";


const element = (
<>
 <h1>{title}</h1>
 <p className='main-desc'>{desc}</p>
</>
)

const root = createRoot( document.getElementById('root'));
root.render(element);