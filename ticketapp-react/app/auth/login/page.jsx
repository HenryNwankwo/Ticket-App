import AuthForm from '../../../components/AuthForm'

export default function LoginPage(){
  return (
    <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-8 items-center">
      <div>
        <h1 className="text-2xl font-bold">Welcome back</h1>
        <p className="text-gray-600 mt-2">Login to access your dashboard and tickets.</p>
      </div>
      <div>
        <AuthForm mode="login" />
      </div>
    </div>
  )
}
