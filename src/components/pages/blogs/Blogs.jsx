import React from "react";
import Pdf from "react-to-pdf";
const ref = React.createRef();


// Default export is a4 paper, portrait, using millimeters for units



const Blogs = () => {




    return (
        <div className='w-full mt-6'>
            <h1 className="text-center text-3xl font-bold">Blogs</h1>
          <div className='w-3/4 mx-auto space-y-4'>


          <div ref={ref} className='bg-lightbg p-10 rounded-md shadow-lg relative '>
            <h3 className='text-2xl font-semibold'> the differences between uncontrolled and controlled components. </h3>
            <h3  className=''>Uncontrolled components in React rely on the DOM to manage the state of form inputs, while controlled components use React component state for state management. With controlled components, the data flow is from the component state to the inputs, allowing for validation and error handling, as well as easier form submission. In contrast, uncontrolled components have a data flow from the inputs to the parent component, requiring manual retrieval of input values for form submission and potentially more complex validation. Controlled components provide a centralized and controlled approach to managing form inputs, while uncontrolled components offer simplicity and flexibility by leveraging the DOM's native state handling capabilities.</h3>
        
         <Pdf targetRef={ref} filename="code-example.pdf">
        {({ toPdf }) => <button className='btn btn-secondary btn-sm absolute bottom-4 right-3' onClick={toPdf}>Generate Pdf</button>}
      </Pdf>
           </div>
         

           <div ref={ref} className='bg-lightbg p-10 rounded-md shadow-lg relative'>
            <h3 className='text-2xl font-semibold'>How to validate React props using PropTypes?  </h3>
            <h3 className=''>PropTypes is a library in React used for validating the types of props passed to a component. By specifying the expected prop types, PropTypes helps catch errors and ensures the correct data is provided. It supports various data types and allows you to mark props as required or optional. When a prop fails validation, a warning is logged to aid in debugging. Utilizing PropTypes improves code reliability, readability, and helps prevent potential runtime errors.</h3>
            <Pdf targetRef={ref} filename="code-example.pdf">
        {({ toPdf }) => <button className='btn btn-secondary btn-sm absolute bottom-4 right-3' onClick={toPdf}>Generate Pdf</button>}
      </Pdf>
           </div>


           <div ref={ref} className='bg-lightbg p-10 rounded-md shadow-lg relative'>
            <h3 className='text-2xl font-semibold'> Whats the difference between nodejs and express js  </h3>
            <h3 className=''>Node.js is a JavaScript runtime environment that allows running JavaScript code outside of a browser, enabling server-side development. Express.js, on the other hand, is a lightweight web application framework built on top of Node.js, providing a simpler and more intuitive way to build web applications and APIs. While Node.js provides the runtime environment, Express.js offers a higher-level abstraction with features like routing, middleware, and templating, making it easier to handle HTTP requests, define routes, and build server-side logic. Express.js simplifies the development process by providing a minimalistic and flexible framework on top of Node.js for building web applications.</h3>
            <Pdf targetRef={ref} filename="code-example.pdf">
        {({ toPdf }) => <button className='btn btn-secondary btn-sm absolute bottom-4 right-3' onClick={toPdf}>Generate Pdf</button>}
      </Pdf>
           </div>



           <div ref={ref} className='bg-lightbg p-10 rounded-md shadow-lg relative'>
            <h3 className='text-2xl font-semibold'>What is a custom hook, and why will you create a custom hook?  </h3>
            <h3 className=''>A custom hook in React is a reusable function that encapsulates a specific behavior or logic to be shared across multiple components. It allows you to extract and reuse stateful logic in a concise and modular way. You would create a custom hook to promote code reusability, reduce duplication, and separate concerns by abstracting away complex logic into a reusable function, making your components cleaner and more maintainable.</h3>
            <Pdf targetRef={ref} filename="code-example.pdf">
        {({ toPdf }) => <button className='btn btn-secondary btn-sm absolute bottom-4 right-3' onClick={toPdf}>Generate Pdf</button>}
      </Pdf>
           </div>




          </div>
        </div>
    );
};

export default Blogs;