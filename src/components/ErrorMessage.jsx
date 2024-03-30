export function ErrorMessage({message}) {
    return (
      <div className="cont-error">
        {message && (
          <p className="error_message">
            {message}
          </p>
        )}
      </div>
    );
  }