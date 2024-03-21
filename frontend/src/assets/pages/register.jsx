import React from 'react';

const Register = () => {
    return (
        <div className=" container">
      <div className="flex justify-center items-center mx-auto">
        <form className="text-center mt-36">
          <div className="grid grid-flow-row">
            <p className="text-start text-3xl mb-4">Sign up</p>
            <p className="text-start text-sm mb-4">Already have an account? <a className="text-[#006494] font-bold" href="/">Log in</a> </p>

            <label className=" text-xs text-start font-bold mb-2">Email</label>
            <input
              className="border border-[#E3E3E3] rounded-sm text-xs h-10 w-80 mb-2"
              type="email"
            />

            <div className="grid grid-flow-row">
              <label className=" text-xs text-start font-bold mb-2">
                Set a password
              </label>
              <input
                className="border border-[#E3E3E3] rounded-sm text-xs h-10 w-80 mb-2"
                type="Password"
              />

              <button className="bg-[#006494] w-full text-white rounded-sm mb-2 h-10 font-bold">
                Register
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
    );
}

export default Register;
