import { createContext } from "react";

const userContext= createContext({
        user:{
            name:"sagar goyal",
            email:"sagargoyal@gmail.com"
    }
})

export default userContext;