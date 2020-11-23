import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
const PageOne = () => {
    return(
        <div>
            PageOne
            <a href="/pagetwo">Page Two</a>
        </div>
    )
}
const PageTwo = () => {
    return(
        <div>
            PageTwo
            <button>Click me</button>
            <a href="/">Page One</a>

        </div>
    )
}
const App = () => {
    return(
       <div>
            <BrowserRouter>
                <div>
                    <Route path="/" exact component={PageOne} />
                    <Route path="/pagetwo" component={PageTwo} />
                </div>
            </BrowserRouter>
       </div>
    )
}
export default App;