const components = import.meta.glob('../page/SkinCareGuides/**/**.jsx');

export default function Concern({ slug }) {
  const path = `../page/SkinCareGuides/${slug}/${slug}.jsx`;
  const ComponentPromise = components[path];

  if (!ComponentPromise) {
    return <p className="text-center py-20 text-gray-600">Skin concern not found</p>;
  }

  const Component = React.lazy(ComponentPromise);

  return (
    <Suspense fallback={<p className="text-center py-20">Loading...</p>}>
      <Component />
    </Suspense>
  );
}





