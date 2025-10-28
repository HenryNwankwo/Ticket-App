import Hero from '../components/Hero'

export default function Page(){
  return (
    <>
      <Hero />
      <section className="mt-10 grid md:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold">Features</h2>
          <ul className="mt-4 list-disc ml-5 text-gray-700">
            <li>Ticket CRUD with validation</li>
            <li>Protected routes with localStorage session</li>
            <li>Responsive layout & accessible components</li>
          </ul>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold">How to get started</h2>
          <ol className="mt-4 list-decimal ml-5 text-gray-700">
            <li>Sign up or use the test account</li>
            <li>Create tickets and manage their status</li>
            <li>Logout to clear your session</li>
          </ol>
        </div>
      </section>
    </>
  )
}
