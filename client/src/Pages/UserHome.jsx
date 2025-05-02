import React, { useEffect } from 'react'
import { getDatabase, ref, onValue } from "firebase/database";

function UserHome() {

useEffect(()=>{


      const db = getDatabase();
      const starCountRef = ref(db, 'users');
      onValue(starCountRef,(snapshot) => {
        const data = snapshot.val();
        console.log(data)
      })

},[])



return (
    <div>UserHome</div>
  )
}

export default UserHome