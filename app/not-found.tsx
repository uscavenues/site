export default function NotFound() {
  return (
    <div className="not-found">
      <h1 className="not-found-title">404 Not Found</h1>
      <p>
        <span className="not-found-error">error: </span> the requested page does
        not exist.
      </p>
      <p>
        return <a href="/">home</a>.
      </p>
    </div>
  );
}
