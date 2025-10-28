import AuthForm from '../../../components/AuthForm'

export default function SignupPage(){
  return (
    <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-8 items-center">
      <div>
        <h1 className="text-2xl font-bold">Create an account</h1>
        <p className="text-gray-600 mt-2">Sign up and start managing tickets immediately.</p>
      </div>
      <div>
        <AuthForm mode="signup" />
      </div>
    </div>
  )
}
