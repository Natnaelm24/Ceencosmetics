import React from "react";

export default function ConcernDetail({ data }) {
  if (!data) return <p className="text-center py-10">Loading...</p>;

  const { title, description, signs, causes, treatments, image_url } = data;

  return (
    <div className="max-w-3xl mx-auto px-6 py-10">
      {/* Title */}
      <h1 className="text-3xl font-bold text-gray-900">{title}</h1>

      {/* Description */}
      <p className="mt-4 text-gray-600">{description}</p>

      {/* Images Section */}
      {image_url?.length > 0 && (
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {image_url.map((img, i) => (
            <img
              key={i}
              src={img}
              alt={title}
              className="w-full rounded-lg shadow-md object-cover"
            />
          ))}
        </div>
      )}

      {/* Signs */}
      <section className="mt-8">
        <h2 className="text-xl font-semibold">Signs</h2>
        <div
          className="mt-2 text-gray-700 leading-relaxed"
          dangerouslySetInnerHTML={{ __html: signs }}
        />
      </section>

      {/* Causes */}
      <section className="mt-8">
        <h2 className="text-xl font-semibold">Causes</h2>
        <div
          className="mt-2 text-gray-700 leading-relaxed"
          dangerouslySetInnerHTML={{ __html: causes }}
        />
      </section>

      {/* Treatments */}
      {treatments && treatments.trim() !== "" && (
        <section className="mt-8">
          <h2 className="text-xl font-semibold">Treatments</h2>
          <div
            className="mt-2 text-gray-700 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: treatments }}
          />
        </section>
      )}
    </div>
  );
}
