import Head from "next/head";
import Link from "next/link";
export default function Home() {
  return (
    <div>
      <Head>
        <title>Undig Official</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
        />
        <script
          src="https://code.jquery.com/jquery-3.5.1.min.js"
          integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0="
          crossOrigin="anonymous"
        ></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.bundle.min.js"></script>
      </Head>

      <main>
        <div className="p-3">
          <Link href="template_one">
            <button className="btn btn-success mb-3 d-block mx-auto">
              Open Template One
            </button>
          </Link>
          <Link href="template_two">
            <button className="btn btn-success mb-3 d-block mx-auto">
              Open Template Two
            </button>
          </Link>
        </div>
      </main>
    </div>
  );
}
