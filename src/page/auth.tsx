import  { useState } from 'react';
const Auth=()=> {
    const [auth, setAuth] = useState<'signup' | 'signin'>('signin')
    const toogleAuth=(state:'signup'| 'signin')=>{
        setAuth(state)
    }
  return (
<div className="container">
<main className="form-signin w-100 m-auto text-center">
            <form className=" w-100 m-auto">
      <img className="m-5" src="https://upload.wikimedia.org/wikipedia/commons/2/2e/Microsoft_Account_Logo.svg" alt="" width="72" height="57"/>
      <h1 className="h3 mb-3 fw-normal">{auth =='signup' ? 'sign in':'sign up'}</h1>
  
      <div className="form-floating">
        <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
        <label htmlFor="floatingInput">Email address</label>
      </div>
      <div className="form-floating">
        <input type="password" className="form-control  mt-3" id="floatingPassword" placeholder="Password"/>
        <label htmlFor="floatingPassword">Password</label>
      </div>
  <button className="w-100 btn btn-lg mt-2 btn-primary" type="submit">Sign in</button>
<p className='mt-2 fw-bold'>

{auth ==='signup' ? 'Already have account ' : 'Not account yet '}{' '}
{auth ==='signup' ?(<span className="fw-normal text-primary "onClick={()=>toogleAuth('signin')} style={{cursor:'pointer'}}>{' '}Sign in</span>):(<span className="fw-normal text-primary "onClick={()=>toogleAuth('signup')} style={{cursor:'pointer'}}>Sign up now</span>)}

</p>
    </form>
  </main>
</div>
  )
}

export default Auth