import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { usePageMeta } from '../hooks/usePageMeta';

const NotFoundPage = () => {
  usePageMeta('Page not found');

  return (
    <section className="container-page flex min-h-[70vh] flex-col items-start justify-center pt-24 pb-14 sm:pt-28 sm:pb-20">
      <p className="hand text-2xl sm:text-3xl text-accent">oops — wrong counter</p>
      <h1 className="heading-xl mt-3">This page doesn’t exist.</h1>
      <p className="mt-5 max-w-md text-base text-ink-soft sm:mt-6 sm:text-lg">
        The link may be old or mistyped. Let’s get you back somewhere useful.
      </p>
      <div className="mt-10 flex flex-col gap-3 sm:flex-row">
        <Link to="/" className="btn-primary">
          Go to the home page <ArrowRight className="h-4 w-4" />
        </Link>
        <Link to="/fliproles" className="btn-secondary">
          FlipRoles for shops
        </Link>
      </div>
    </section>
  );
};

export default NotFoundPage;
