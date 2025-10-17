import {Link} from 'react-router';

export default function Index() {
  return (
    <div className="mx-auto p-12 prose prose-xl prose-a:text-blue-500">
      <h1 className="text-3xl font-bold">Home</h1>
      <p>
        <Link className="text-blue-500 underline" to="/collections/all">
          All Products
        </Link>
      </p>
    </div>
  );
}