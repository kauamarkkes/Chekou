function PageHeader({ title, description, children }) {
  return (
    <header className="header">
      <div>
        <h1>{title}</h1>

        {description && (
          <p>{description}</p>
        )}
      </div>

      {children && (
        <div className="header-actions">
          {children}
        </div>
      )}
    </header>
  );
}

export default PageHeader;