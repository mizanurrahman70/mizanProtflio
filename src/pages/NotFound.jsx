const NotFound = () => (
  <section className="container-x flex min-h-screen flex-col items-center justify-center text-center">
    <p className="eyebrow">Error 404</p>
    <h1 className="mt-4 font-display text-5xl font-bold tracking-tight sm:text-7xl">Page not found.</h1>
    <p className="mt-4 text-muted">The page you&apos;re looking for doesn&apos;t exist or has moved.</p>
    <a href="/" className="btn-primary mt-8">Back to home</a>
  </section>
);

export default NotFound;
