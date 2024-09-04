const CreateAccount: React.FC = () => {

  return (
    <div className="h-full p-[30px]">
      {/* Form for creating an account */}
      <form>
        
        {/* First Name input */}
        <div className="flex flex-col mb-4">
          <label htmlFor="firstname" className="py-2">First Name</label>
          <input
            type="text"
            id="firstname"
            className="p-2 border rounded"
            placeholder="Enter your first name"
          />
        </div>

        {/* Last Name input */}
        <div className="flex flex-col mb-4">
          <label htmlFor="lastname">Last Name</label>
          <input
            type="text"
            id="lastname"
            className="p-2 border rounded"
            placeholder="Enter your last name"
          />
        </div>

        {/* Email input */}
        <div className="flex flex-col mb-4">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            className="p-2 border rounded"
            placeholder="Enter your email"
          />
        </div>

        {/* Password input */}
        <div className="flex flex-col mb-4">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            className="p-2 border text-black rounded"
            placeholder="Enter your password"
          />
        </div>

        {/* Confirm Password input */}
        <div className="flex flex-col mb-4">
          <label htmlFor="confirmpassword">Confirm Password</label>
          <input
            type="password"
            id="confirmpassword"
            className="p-2 border text-black rounded"
            placeholder="Confirm your password"
          />
        </div>

        {/* Submit button */}
        <div className="flex justify-center">
          <button className="w-full bg-green-400 p-3 text-white max-w-screen-lg">
            CREATE ACCOUNT
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateAccount;
