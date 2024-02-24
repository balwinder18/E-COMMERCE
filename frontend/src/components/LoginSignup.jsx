import React ,{useRef, useState , useEffect} from 'react'
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import {  Link, useNavigate } from 'react-router-dom';
import './loginsignup.css'
import FaceIcon from '@mui/icons-material/Face';
import {useDispatch, useSelector} from 'react-redux'
import { login, register} from '../actions/Useractions';
import Loader from './Loader';

const LoginSignup = () => {
  const navigate = useNavigate();
const dispatch  = useDispatch();


const {loading,isAuthenticated} = useSelector(state=> state.user)

  const loginTab = useRef(null);
  const registerTab = useRef(null);
  const switcherTab = useRef(null);

  const [loginemail , setLoginEmail] = useState("");
  const [loginpassword ,setLoginPassword ] = useState("");
  const [ user,setUser] = useState({
    name:"", email:"",password:""
})

const [avatar , setAvatar] = useState()
const [ avatarpreview , setavatarpreview] = useState('/Profile.png')

const {name, email, password} = user;
  
  const loginSubmit = (e)=>{
    e.preventDefault();

    

    dispatch(login(loginemail,loginpassword));
    
   
  }

  const registersubmit =(e)=>{
    e.preventDefault();

    const myform = new FormData();
    myform.set("name",name);
    myform.set("email",email);
    myform.set("password",password);
    myform.set("avatar", avatar)
    dispatch(register(myform));
  } 

  const switchTabs = (e,tab)=>{
      if(tab === "login"){
        switcherTab.current.classList.add("shifttoneutral");
        switcherTab.current.classList.remove("shifttoright");
 
        registerTab.current.classList.remove("shifttoneutralform");
        loginTab.current.classList.remove("shifttoleft");
      } 

      if(tab === "register"){
        switcherTab.current.classList.add("shifttoright");
        switcherTab.current.classList.remove("shifttoneutral");
 
        registerTab.current.classList.add("shifttoneutralform");
        loginTab.current.classList.add("shifttoleft");

      }
  }

  const registerdatachange=(e)=>{
    if(e.target.name === "avatar"){
      const reader = new FileReader();
      reader.onload = () =>{
        if(reader.readystate === 2){
          setavatarpreview(reader.result);
          setAvatar(reader.result);
        }
      };

      reader.readAsDataURL(e.target.files[0]);

    } else {
      setUser({...user , [e.target.name]:e.target.value});
    }
  } 
   
  useEffect(() => {
  
    if(isAuthenticated){
      navigate('/account')
    }
   
  }, [navigate,isAuthenticated])
  

  return (
    <>
   {loading ? <Loader/> :
       <div className="loginsignupcontainer">
       <div className="loginsignupbox">
        <div>
            <div className="loginsignuptoggle">
                <p onClick={(e)=> switchTabs(e , "login")}>LOGIN</p>
                <p onClick={(e)=> switchTabs(e , "register")}>Register</p>
            </div>
            <button ref={switcherTab}></button>
        </div>
        <form  className="loginform" ref={loginTab} onSubmit={loginSubmit}>
          <div className="loginemail">
            <MailOutlineIcon/>
           <input type='email' placeholder='email' required value={loginemail} onChange={(e)=>setLoginEmail(e.target.value)} />
           </div>
           <div className="loginpassowrd">
             <LockOpenIcon/>
             <input type="password" placeholder='password' required value={loginpassword} onChange={(e)=>setLoginPassword(e.target.value)} />
           </div>
           <Link to="/password/forgot"> Forgot Password</Link>
           <input type="submit" value="login" className='loginbutton' />
        </form>
        <form className='signupform' ref={registerTab} encType='multipart/form-data' onSubmit={registersubmit} >
          <div className="signupname">
            <FaceIcon/>
            <input type='text' placeholder='name' name='name' required value={name} onChange={registerdatachange} />
          </div>
          <div className="signupemail">
            <MailOutlineIcon/>
            <input type='text' placeholder='email' name='email' required value={email} onChange={registerdatachange} />
          </div>
          <div className="signuppassword">
            <LockOpenIcon/>
            <input type='text' placeholder='password' name='password' required value={password} onChange={registerdatachange} />
          </div>
           <div className="registerimage">
            <img src={avatarpreview} alt="avatarpreview"  />
            <input type="file" name='avatar' accept='image' onChange={registerdatachange} />
           </div>

          <input type="submit" value="register" className='signupbtn' />


        </form>
       </div>
    </div>
   }
    </>
  )
}

export default LoginSignup;