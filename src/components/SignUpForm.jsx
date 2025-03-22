function SignUpForm() {
    return (
        <div className="signupForm w-full max-w-md">
            <form className="flex flex-col text-black">
                <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    required 
                    className="p-2 bg-gray-200 rounded mb-4"
                    placeholder="Full Name" 
                />
                <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    required 
                    className="p-2 bg-gray-200 rounded mb-4"
                    placeholder="Email" 
                />
                <input 
                    type="password" 
                    id="password" 
                    name="password" 
                    required 
                    className="p-2 bg-gray-200 rounded mb-4"
                    placeholder="Password" 
                />
                <input 
                    type="password" 
                    id="confirmPassword" 
                    name="confirmPassword" 
                    required 
                    className="p-2 bg-gray-200 rounded mb-4"
                    placeholder="Confirm Password" 
                />
                <input 
                    type="text" 
                    id="phone" 
                    name="phone" 
                    required 
                    className="p-2 bg-gray-200 rounded mb-4"
                    placeholder="Phone Number"
                />
                <button 
                    type="submit" 
                    className="mt-4 p-2 bg-blue-500 text-white rounded transition hover:bg-blue-600"
                >
                    Sign Up
                </button>
            </form>
            <p className="mt-4 text-left">
                Already have an account?{' '}
                <a href="/login" className="text-blue-500">
                    Login here
                </a>
            </p>
        </div>
    )
}

export default SignUpForm