function LoginForm() {
    return (
        <div className="loginForm w-full max-w-md">
            <form method="POST" className="flex flex-col text-black">
                <input type="email" id="email" name="email" required className="p-2 bg-gray-200 rounded mb-4" placeholder="Email"/>
                
                <input type="password" id="password" name="password" required className="p-2 bg-gray-200 rounded mb-4" placeholder="Password"/>
                
                <button type="submit" className="mt-4 p-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">Login</button>
            </form>
            <p className="mt-4 text-center">Belum punya akun? <a href="#" className="text-blue-500">Daftar di sini</a></p>
        </div>
    )
}

export default LoginForm