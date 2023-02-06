import React from "react"

class Profile extends React.Component{
 constructor(props)
 {
    super(props)
    this.state={
        count:0
    }
 }
 async componentDidMount(){
    const data= await fetch("https://api.github.com/users/sagargoyal-bit");
    const json =await data.json();
 }
 componentDidUpdate(){
 }
 componentWillUnmount(){
 }
 render(){
    return(
        <>
        <h1>This is profile component</h1>
        <button onClick={()=>{
            if(this.state.count==0)
            {
            this.setState({count:1})
            }else{
            this.setState({ count: 0 });

            }
        }
        }>child count{this.state.count}</button>
        </>
    )
 }
}

export default Profile