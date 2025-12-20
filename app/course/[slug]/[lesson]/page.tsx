import Link from "next/link";
import { notFound } from "next/navigation";
import { courses } from "@/data/courses";

type Params = {
  slug: string;
  lesson: string;
};

export function generateStaticParams() {
  return courses.flatMap((course) =>
    course.lessons.map((lesson) => ({
      slug: course.slug,
      lesson: lesson.slug,
    })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug, lesson: lessonSlug } = await params;
  const course = courses.find((item) => item.slug === slug);
  const lesson = course?.lessons.find((item) => item.slug === lessonSlug);

  if (!course || !lesson) {
    return { title: "找不到影片" };
  }

  return {
    title: `${lesson.title} | ${course.title}`,
    description: `觀看 ${course.title} 的 ${lesson.title} 章節影片。`,
  };
}

export default async function LessonPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug, lesson: lessonSlug } = await params;
  const course = courses.find((item) => item.slug === slug);
  const lesson = course?.lessons.find((item) => item.slug === lessonSlug);

  if (!course || !lesson) {
    return notFound();
  }

  const embedUrl = `https://www.youtube.com/embed/${lesson.youtubeId}?rel=0`;

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-6 px-4 py-8 sm:gap-8 sm:px-6 sm:py-10">
        <div className="flex flex-wrap items-center gap-3 text-sm text-blue-700">
          <Link href={`/course/${course.slug}`} className="hover:underline">
            ← 返回「{course.title}」
          </Link>
          <span aria-hidden className="text-slate-400">
            |
          </span>
          <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium">
            {course.type === "course" ? "教學單元" : "社群直播"}
          </span>
        </div>

        <header className="flex flex-col gap-2">
          <p className="text-sm text-slate-600">{course.title}</p>
          <h1 className="text-2xl font-bold sm:text-3xl">{lesson.title}</h1>
        </header>

        <div
          className="relative w-full overflow-hidden rounded-2xl bg-black shadow-lg"
          style={{ aspectRatio: "16 / 9" }}
        >
          <iframe
            src={embedUrl}
            title={lesson.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 h-full w-full border-0"
          />
        </div>

        <div className="flex flex-wrap items-center gap-2 text-sm text-slate-600">
          <span>其他章節：</span>
          {course.lessons.map((item) => (
            <Link
              key={item.slug}
              href={`/course/${course.slug}/${item.slug}`}
              className={`rounded-full px-3 py-1 ring-1 transition ${
                item.slug === lesson.slug
                  ? "bg-blue-600 text-white ring-blue-600"
                  : "bg-white text-slate-700 ring-slate-200 hover:bg-blue-50 hover:text-blue-700"
              }`}
            >
              {item.title}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
