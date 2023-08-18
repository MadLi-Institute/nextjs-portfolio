"use client";

import { useRef, useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

const LoginForm = () => {
  const userRef = useRef();
  const passRef = useRef();
  const [err, setErr] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const username = userRef.current.value;
    const password = passRef.current.value;
    if (!username || !password) {
      setErr(true);
      return;
    }
    setErr(false);
    try {
      const res = await signIn("credentials", {
        username,
        password,
        redirect: false,
      });
      if (res.error) {
        setErr(true);
        return;
      }
      router.replace("dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {err && (
        <div className="alert alert-error mb-3 flex flex-col">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="stroke-current shrink-0 h-10 w-10"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span className="font-bold">Error! Wrong Credentials</span>
        </div>
      )}
      <div className="form-control mb-3">
        <label htmlFor="username" className="label">
          <span className="label-text font-semibold">Username</span>
        </label>
        <input
          ref={userRef}
          type="text"
          id="username"
          placeholder="Type username"
          className="input input-bordered rounded-lg"
        />
      </div>
      <div className="form-control mb-3">
        <label htmlFor="password" className="label">
          <span className="label-text font-semibold">Password</span>
        </label>
        <input
          ref={passRef}
          type="password"
          id="password"
          placeholder="Type password"
          className="input input-bordered rounded-lg"
        />
      </div>
      <div className="form-control mb-3">
        <label htmlFor="remember" className="label cursor-pointer">
          <span className="label-text font-semibold">Remember me</span>
          <input type="checkbox" id="remember" className="checkbox" />
        </label>
      </div>
      <button type="submit" className="btn btn-block rounded-lg">
        Login
      </button>
    </form>
  );
};

export default LoginForm;
