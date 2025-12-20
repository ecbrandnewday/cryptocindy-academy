import Link from "next/link";
import { notFound } from "next/navigation";
import Image from "next/image";
import { courses } from "@/data/courses";

type Params = {
  slug: string;
};

export function generateStaticParams() {
  return courses.map((course) => ({
    slug: course.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const course = courses.find((item) => item.slug === slug);

  if (!course) {
    return { title: "找不到單元" };
  }

  return {
    title: `${course.title} | 課程單元`,
    description: `檢視 ${course.title} 的章節列表並播放影片。`,
  };
}

export default async function CoursePage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const course = courses.find((item) => item.slug === slug);

  if (!course) {
    return notFound();
  }

  return (
    <div className="min-h-screen bg-[#f7f7f7] text-slate-900">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-4 py-8 sm:gap-8 sm:px-6 sm:py-10">
        <div className="flex flex-wrap items-center gap-3 text-sm text-rose-700">
          <Link href="/" className="font-medium hover:underline">
            ← 返回首頁
          </Link>
          <span aria-hidden className="text-slate-400">|</span>
          <span className="rounded-full bg-rose-100 px-3 py-1 text-xs font-semibold text-rose-800">
            {course.type === "course" ? "教學單元" : "社群直播"}
          </span>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.1fr_1.9fr]">
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <div className="relative h-48 w-full overflow-hidden bg-slate-100 sm:h-56">
              {course.cover ? (
                <Image
                  src={course.cover}
                  alt={course.title}
                  fill
                  sizes="(min-width: 1024px) 320px, 100vw"
                  className="object-cover"
                />
              ) : (
                <div className="flex h-full items-center justify-center bg-gradient-to-br from-rose-50 via-white to-blue-50 text-sm text-slate-500">
                  無封面
                </div>
              )}
            </div>
            <div className="bg-[#e89090] px-4 py-2 text-sm font-semibold text-white">
              {course.title}
            </div>
            <div className="space-y-3 px-5 py-4">
              <div className="text-xs text-slate-500" />
            </div>
          </div>

          <div className="space-y-4">
            <h1 className="text-2xl font-bold sm:text-3xl">{course.title}</h1>

            <div className="grid gap-3 sm:gap-4 md:grid-cols-2">
              {course.lessons.map((lesson, index) => (
                <Link
                  key={lesson.slug}
                  href={`/course/${course.slug}/${lesson.slug}`}
                  className="group flex flex-col gap-2 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                >
                  <div className="flex items-center justify-between">
                    <p className="text-xs font-semibold uppercase tracking-wide text-rose-700">
                      章節 {index + 1}
                    </p>
                    <span aria-hidden className="flex h-8 w-8 items-center justify-center">
                      <svg
                        viewBox="0 0 24 24"
                        className="h-6 w-6 fill-rose-600 transition group-hover:scale-110 group-hover:fill-rose-700"
                        role="presentation"
                      >
                        <path d="M10 8.65v6.7c0 .5.54.8.97.56l5.52-3.35a.65.65 0 0 0 0-1.12l-5.52-3.35A.65.65 0 0 0 10 8.65Z" />
                        <path
                          d="M20.4 7.34c-.15-.57-.6-1.02-1.17-1.17C18.07 6 12 6 12 6s-6.07 0-7.23.17c-.57.15-1.02.6-1.17 1.17C3.43 8.5 3.43 12 3.43 12s0 3.5.17 4.66c.15.57.6 1.02 1.17 1.17C5.93 18 12 18 12 18s6.07 0 7.23-.17c.57-.15 1.02-.6 1.17-1.17.17-1.16.17-4.66.17-4.66s0-3.5-.17-4.66Z"
                          opacity="0.25"
                        />
                      </svg>
                    </span>
                  </div>
                  <h2 className="text-lg font-semibold leading-snug">
                    {lesson.title}
                  </h2>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
