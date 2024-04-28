import { db } from "~/server/db";

// every time we made a change in the DB, the page will be updated on the next visit
export const dynamic = "force-dynamic";

export default async function HomePage() {
  const images = await db.query.images.findMany({
    orderBy: (model, { desc }) => desc(model.id),
  });

  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {[...images, ...images, ...images].map((image, index) => (
          <div className="flex w-48 flex-col" key={image.id + "-" + index}>
            <img src={image.url} alt={image.url} />
            <div>{image.name}</div>
          </div>
        ))}
      </div>
    </main>
  );
}
