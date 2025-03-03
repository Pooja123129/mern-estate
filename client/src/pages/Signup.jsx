import { useState } from 'react'
import { Link,useNavigate,useNavigate } from 'react-router-dom'

export default function Signup() {
  const [ FormData, setFormData ] = useState({})
  const [error, setError] = useState(null);
  const [ loading, setloading] = useState(false);
  const useNavigate = useNavigate();

  const handlechange = (e) => {
  setFormData({
    ...FormData,
    [e.target.id]: e.target.value,
  });
  };
  const handleSubmit = async (e) => {
   e.preventDefault();
try{


setLoading(true);
   const res = await fetch('/api/auth/Signup',{
      method:'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(FormData),
    });
   const data = await res.json();
   console.log(data);
   if (data.success === false) {
    setError(data.message);
    setloading(false);
    return;
   }
   setloading(false);
   setError(null);
   Navigate('/sign-in');
  }
   catch(error) {

    setLoading(false);
    setError(error.message);
  }};
  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className ='text-3xl text-center font-semibold 
      my-7'>Signup </h1>
    <form onSubmit = { handleSubmit } className='flex flex-col gap-4'>
    <input type="text" placeholder='username' className='border p-3 rounded-lg' id='username' onChange={handlechange}/>
    <input type="email" placeholder='email' className='border p-3 rounded-lg' id='email' onChange={handlechange}/>
    <input type="password" placeholder='password' className='border p-3 rounded-lg' id='password' onChange={handlechange}/>
    <button disabled = {loading} className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80'>{loading ? 'loading...' : 'Signup'}</button>
    </form>
    <div className="flex gap-2 mt-5"><p>
      Have an account?
      </p>
      <Link to = {"/Sign-in"}>
      <span className='text-blue-700'>Sign in</span>
      </Link></div>
      {error && <p className='text-red-500 mt-5'>{error}</p>}
</div>
  );
}
