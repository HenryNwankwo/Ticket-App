export default function Footer(){
  return (
    <footer className="bg-white border-t">
      <div className="container-centered px-6 py-6 text-sm text-gray-600">
        © {new Date().getFullYear()} TicketApp — Built for the Stage 2 task.
      </div>
    </footer>
  )
}
