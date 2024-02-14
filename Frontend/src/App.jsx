import React,{lazy,Suspense,Fragment} from 'react';
const Router = lazy(()=> import('./Routes/router'))
function App() {

  return (
    <Suspense fallback={<div>loading...</div>}>  
          <Fragment>
          <Router />
         </Fragment>
    </Suspense>
  )
}

export default App
