import Link from "next/link";
import Image from "next/image";
import { courses, type Course } from "@/data/courses";

export default function Home() {
  const courseUnits = courses.filter((course) => course.type === "course");
  const liveUnits = courses.filter((course) => course.type === "live");

  return (
    <div className="min-h-screen bg-[#f7f7f7] text-slate-900">
      <main className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-4 py-8 sm:gap-10 sm:px-6 sm:py-10">
        <Section
          title="教學單元"
          items={courseUnits}
        />
        <Section
          title="社群直播"
          items={liveUnits}
        />
      </main>
    </div>
  );
}

type SectionProps = {
  title: string;
  items: Course[];
};

function Section({ title, items }: SectionProps) {
  return (
    <section className="flex flex-col gap-4">
      <div className="flex flex-col gap-1">
        <h2 className="text-xl font-semibold">{title}</h2>
      </div>
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {items.map((course) => (
          <CourseCard key={course.slug} course={course} />
        ))}
      </div>
    </section>
  );
}

function CourseCard({ course }: { course: Course }) {
  return (
    <Link
      href={`/course/${course.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
    >
      <div className="relative h-48 w-full overflow-hidden bg-slate-100 sm:h-56">
        {course.cover ? (
          <Image
            src={course.cover}
            alt={course.title}
            fill
            sizes="(min-width: 1280px) 33vw, (min-width: 768px) 45vw, 100vw"
            className="object-cover"
          />
        ) : (
          <div className="flex h-full items-center justify-center bg-gradient-to-br from-rose-50 via-white to-blue-50 text-sm text-slate-500">
            無封面
          </div>
        )}
      </div>

      <div className="bg-[#e89090] px-4 py-2 text-sm font-semibold text-white">
        {course.type === "course" ? "教學單元" : "社群直播"}
      </div>

      <div className="flex flex-1 flex-col gap-4 px-4 py-4">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-lg font-semibold leading-tight">
            {course.title}
          </h3>
          <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
            {course.lessons.length} 章節
          </span>
        </div>
      </div>
    </Link>
  );
}
