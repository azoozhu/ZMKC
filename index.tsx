import { useState } from 'react'

export default function Component() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('Thank you for your message! We will get back to you soon.')
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-800">
      <header className="bg-blue-600 text-white py-6">
        <div className="container mx-auto px-4">
          <div className="text-3xl font-bold mb-4">ZMKC,LLC</div>
          <nav>
            <ul className="flex justify-center space-x-6">
              <li><a href="#about" className="hover:opacity-80 transition-opacity">About Us</a></li>
              <li><a href="#services" className="hover:opacity-80 transition-opacity">Services</a></li>
              <li><a href="#contact" className="hover:opacity-80 transition-opacity">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="flex-grow">
        <section id="about" className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-blue-600 mb-8">About Us</h2>
            <p className="text-center max-w-2xl mx-auto">
              ZMKC,LLC (Zhai Men Ke Chuang) is a technology company specializing in AI solutions. We are dedicated to providing advanced artificial intelligence technologies to help businesses optimize operations, improve efficiency, and drive innovation.
            </p>
          </div>
        </section>

        <section id="services" className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-blue-600 mb-8">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md transition-transform hover:-translate-y-1">
                <h3 className="text-xl font-semibold mb-4">Machine Learning Applications</h3>
                <p>We develop custom machine learning models to help businesses gain insights from data and make more informed decisions.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md transition-transform hover:-translate-y-1">
                <h3 className="text-xl font-semibold mb-4">Natural Language Processing</h3>
                <p>We offer advanced NLP solutions, including text analysis, sentiment analysis, and intelligent dialogue systems.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-blue-600 mb-8">Contact Us</h2>
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="mb-4">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Name"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="mb-4">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Email"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="mb-4">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Message"
                  rows={5}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
              >
                Send
              </button>
            </form>
            <p className="text-center mt-6">Company Email: cyz18845007587@gmail.com</p>
          </div>
        </section>
      </main>

      <footer className="bg-blue-600 text-white py-6">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 ZMKC,LLC (Zhai Men Ke Chuang). All rights reserved.</p>
          <div className="mt-4 space-x-4">
            <a href="#" target="_blank" rel="noopener noreferrer" className="hover:underline">LinkedIn</a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="hover:underline">Twitter</a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="hover:underline">GitHub</a>
          </div>
        </div>
      </footer>
    </div>
  )
}