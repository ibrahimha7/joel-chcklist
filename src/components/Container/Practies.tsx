import React, {useState,useEffect} from 'react';
import { Button } from 'antd';

import {useFirebase} from '../Firebase/FirebaseContext'

// import firebase from '../../firebase';

// import axios from 'axios'



interface userProps {
    id?:number;
    name?:string;
}
interface usersProps {
    user?:[userProps]
}

interface refProps {
    text?:string
    
}




// type defualt = {
//     text:string
// }

//this is how we use defualt value in our porops 
// const Practies:React.FC = ({text = "defualt"}) => {
const Practies:React.FC<userProps> = ({id,name,children}) => {
    const [value, setvalue] = useState()

    const afterClick = () => {
        if (value === true) {
        setvalue(false)
        } else { setvalue(true) }
    }

    // react using firebase 
    // const firebase = useFirebase();
    // console.log(firebase)
    

    // const [users, setUsers] = useState()



    // useEffect(() => {
    //     axios
    //       .get(
    //         'https://jsonplaceholder.typicode.com/users'
    //       )
    //       .then(res => {
    //         console.log(res.data);
    //         setUsers({
    //             ...users.data
    //         });

    //       })
    //       .catch(err => console.log(err));
    //   }, []);

      

    // useEffect(() => {
    //         const fetchData = async () => {
    //             const data = await fetch('https://jsonplaceholder.typicode.com/users')
    //             const userss = await data.json();
    //             console.log(userss.map((doc:any) => doc.data()))
    //             setUsers(userss.docs.map((doc:any) => doc.data()));
                  
    //         };
    //         fetchData();
            
    // }, []);

    
    
    // const [users, setUsers] = useState([])

    // React.useEffect(() => {
    //     const fetchData = async () => {
    //       const db = firebase.firestore();
    //       const data = await db.collection("users").get();
    //       console.log(data)
    //       setUsers(data.docs.map((doc:any) => doc.data()));
    //     };
    //     fetchData();
    //   }, []);


    // to use ref with typescript and hooks 
    // https://www.pluralsight.com/guides/using-react-refs-typescript
    const textRef =React.useRef<HTMLInputElement>(null)
    
    const submit = () => {
        console.log(textRef.current?.value)
    }

    return (
        <div>
            <h1>here is react practieses</h1>
            <br/>
            {/* event trigger the after click function  */}
            <Button type="primary" onClick={afterClick}> show / hide</Button> 
            {
                value && 
                <h3>This is use of inline condition</h3>
            }

            <br/>

            <div>
                <h4>this is users feching from api </h4>
                <p key={id} >{name}</p>
            </div>

            <br/>
            <div>
                <h3>using react ref</h3>
                <input type="text" ref ={textRef}/>
                <button onClick={submit}>submit using ref</button>
        
            </div>
        </div>
    )
}

export default Practies;