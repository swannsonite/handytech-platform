function App() {
  return (
    <div className="app">
      <header>
        <h1>HandyTech Platform</h1>
        <p>Field Service PWA — multi-tenant skeleton</p>
      </header>
      <main>
        <section>
          <h2>Beta foundation</h2>
          <ul>
            <li>Installable PWA shell</li>
            <li>Multi-tenant by location (RLS-ready)</li>
            <li>Office + tech single app experience</li>
            <li>Future widgets via Web Components</li>
          </ul>
        </section>
        <p className="note">
          Feature branch: pwa-shell. Data layer and auth abstraction kept separable for potential future native clients.
        </p>
      </main>
    </div>
  )
}

export default App
