const rootid= document.querySelector("#root");

const Child1=()=>{
    return (
        <div>
            From Child!
        </div>
    )
}
const Parent=()=>{
    return (
        <div>
            <Child1/>
            <Child1/>
            <Child1/>
        </div>
    )
}
ReactDOM.render(<Parent/>, rootid);