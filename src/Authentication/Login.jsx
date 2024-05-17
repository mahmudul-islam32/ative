
import { Link } from "react-router-dom";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
// import { AuthContext } from "../../provider/AuthProvider";
import logo from '../../public/logo.png'
const Login = () => {
    //   const { signIn } = useContext(AuthContext)
    //   const [showPassword, setShowPassword] = useState(false);
    //   const navigate = useNavigate();

    //   // const location = useLocation();
    //   const handleLogin = (e) => {
    //     e.preventDefault();
    //     const email = e.target.email.value;
    //     const password = e.target.password.value;
    //     console.log(email, password);

    //     // sign in user
    //     signIn(email, password)
    //       .then((result) => {
    //         console.log(result.user);
    //         toast("Successfully logged in");
    //         setTimeout(() => {
    //           navigate(location?.state ? location.state : "/dashboard");

    //         }, 2000);
    //       })
    //       .catch((error) => {
    //         console.error(error);
    //         toast.error("email or password don't match.please try again");
    //       });
    //   };
    return (

        <div className="flex flex-col lg:flex-col justify-evenly items-center hero h-screen bg-gradient-to-b from-[#5337FF] to-[#4931e4]">

            <div className=" items-center justify-center">
                <img
                    className=" "
                    src={logo}
                    alt="logo"
                />

            </div>

            <div className="card shadow-2xl w-[26rem] bg-[#1E1E1E]">

                <div role="tablist" className="tabs bg-black p-2 rounded-lg mx-7 mt-8">
                    <a role="tab" className="tab tab-active rounded-lg  bg-[#5BFFA7]">Creator</a>
                    <a role="tab" className="tab ">Brand</a>

                </div>
                <form className="card-body h-[300px] " >

                    <div className="form-control">

                        <input type="email" name="email" placeholder="Email-Adresse" className="input input-bordered border-white bg-black" />
                    </div>


                    <div className="form-control">

                        <input type="password" name="password" placeholder="password" className="input input-bordered border-white bg-black" />

                    </div>


                    <div className="form-control mt-9">
                        <input className="btn bg-white text-black" type="submit" value="Login" />
                    </div>

                </form>
            </div>

            <p className="pb-3 text-center text-white">
                    New here? Please<Link to="/register">
                        <button className="btn btn-link text-white">Create an account</button>
                    </Link>
                </p>

            {/* <p className=' text-center text-white'><small>New Here? <Link className=' underline text-white' to="/signup">Create an account</Link> </small></p> */}

        </div>

    );
};
export default Login;