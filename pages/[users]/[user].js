import { useRouter } from "next/router";

const User =()=>{
       const router=useRouter();
       console.log(router.query.users);
       return <>
       <div>
         you are fucking {router.query.users} {router.query.user}
       </div>
       </>
}
export default User ;