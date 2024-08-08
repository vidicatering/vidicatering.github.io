import Link from "next/link";

interface Post {
  id: string;
  title: string;
  date: string;
}

const posts: Post[] = [
  { id: "1", title: "Artikel Pertama", date: "2024-08-05" },
  { id: "2", title: "Artikel Kedua", date: "2024-08-06" },
];

export default function Blog() {
  return (
    <div className="min-h-screen min-w-full mx-auto  mt-20 px-32">
      <div className="grid grid-cols-3 w-full gap-20 py-20">
        <article className="overflow-hidden rounded-lg shadow transition hover:shadow-lg">
          <img alt="" src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" className="h-56 w-full object-cover" />

          <div className="bg-white p-4 sm:p-6">
            <time dateTime="2022-10-10" className="block text-xs text-gray-500">
              {" "}
              10th Oct 2022{" "}
            </time>

            <a href="#">
              <h3 className="mt-0.5 text-lg text-gray-900">How to position your furniture for positivity</h3>
            </a>

            <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus pariatur animi temporibus nesciunt praesentium dolore sed nulla ipsum eveniet corporis quidem, mollitia itaque minus soluta, voluptates
              neque explicabo tempora nisi culpa eius atque dignissimos. Molestias explicabo corporis voluptatem?
            </p>
          </div>
        </article>
        <article className="overflow-hidden rounded-lg shadow transition hover:shadow-lg">
          <img alt="" src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" className="h-56 w-full object-cover" />

          <div className="bg-white p-4 sm:p-6">
            <time dateTime="2022-10-10" className="block text-xs text-gray-500">
              {" "}
              10th Oct 2022{" "}
            </time>

            <a href="#">
              <h3 className="mt-0.5 text-lg text-gray-900">How to position your furniture for positivity</h3>
            </a>

            <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus pariatur animi temporibus nesciunt praesentium dolore sed nulla ipsum eveniet corporis quidem, mollitia itaque minus soluta, voluptates
              neque explicabo tempora nisi culpa eius atque dignissimos. Molestias explicabo corporis voluptatem?
            </p>
          </div>
        </article>
        <article className="overflow-hidden rounded-lg shadow transition hover:shadow-lg">
          <img alt="" src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" className="h-56 w-full object-cover" />

          <div className="bg-white p-4 sm:p-6">
            <time dateTime="2022-10-10" className="block text-xs text-gray-500">
              {" "}
              10th Oct 2022{" "}
            </time>

            <a href="#">
              <h3 className="mt-0.5 text-lg text-gray-900">How to position your furniture for positivity</h3>
            </a>

            <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus pariatur animi temporibus nesciunt praesentium dolore sed nulla ipsum eveniet corporis quidem, mollitia itaque minus soluta, voluptates
              neque explicabo tempora nisi culpa eius atque dignissimos. Molestias explicabo corporis voluptatem?
            </p>
          </div>
        </article>
      </div>
    </div>
  );
}
