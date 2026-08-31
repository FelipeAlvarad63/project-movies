
export default function Home() {
  return (
        <div className="movies-list py-6">
            <h2>Last Movies added</h2>

            <div className="container-movies">
                <article className="card__movie p-4">
                  <h3 className="card__movie--title">Title</h3>
                  <p>Description...</p>
                </article>
                <article className="card__movie p-4">
                  <h3 className="card__movie--title">Title</h3>
                  <p>Description...</p>
                </article>
                <article className="card__movie p-4">
                  <h3 className="card__movie--title">Title</h3>
                  <p>Description...</p>
                </article>
            </div>
        </div>
    );
}
