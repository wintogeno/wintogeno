export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="px-6 md:px-12 lg:px-16 py-10 border-t border-paper/10 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
      <p className="tick text-sand">
        © {year}{' '}
        <a href="https://muneebdevops.online" className="hover:text-signal">
          muneebdevops.online
        </a>
      </p>
      <p className="tick text-sand">DevOps · AKS · GitOps · Azure / AWS</p>
      <p className="tick text-sand">Islamabad, PK</p>
    </footer>
  );
}
