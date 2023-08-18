import LoginForm from "@/components/loginform/LoginForm";
import Link from "next/link";

export const metadata = {
  title: "Japhet's Private Space",
  description:
    "This is a control panel for the portfolio which only Japhet has an access of this page. If you are other than the owner, you are not supposedly here",
};

const Login = () => {
  return (
    <div className="flex flex-row max-lg:flex-col justify-between w-50 gap-5">
      <div className="flex-1 card w-full bg-base-100 rounded-lg shadow-xl">
        <div className="card-body">
          <div className="text-center text-4xl font-bold">Login</div>
          <div className="divider divider-vertical"></div>
          <LoginForm />
        </div>
      </div>
      <div className="flex-2 p-5">
        <h1 className="text-8xl font-bold italic">Hello Li.M!!!</h1>
        <div className="divider divider-vertical"></div>
        <div className="font-bold">
          <h3 className="text-3xl">You are not supposed to be able to get here you know...</h3>
          <p className="text-end italic label-text">- Easter egg message in GTA III</p>
          <div className="text-end">
            <Link href="/" className="underline">Redirect to homepage</Link>
            <p>Or</p>
            <p>Press (<kbd className="kbd kbd-sm">alt</kbd> + <kbd className="kbd kbd-sm">F4</kbd>)<sup>2x</sup> then press <kbd className="kbd kbd-sm">Enter</kbd> 🤭</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
