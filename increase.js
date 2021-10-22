const rootid= document.querySelector("#root");

const Child1=()=>{
    const [value, myFunction] = React.useState(0);
    return (
        <div className="text-center p-4">
            <button className="btn btn-outline-primary"
            onClick={()=>myFunction(value-1)}
            >
                Decrement -</button>
            <h1 >{value}</h1>
            <button className="btn btn-outline-primary"
            onClick={()=>myFunction(value+1)}
            >
                Increment +</button>
                <hr />
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