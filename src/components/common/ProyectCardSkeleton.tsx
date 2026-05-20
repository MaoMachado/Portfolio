export default function ProjectCardSkeleton() {
  return (
    <article
      className="
        w-full
        max-w-sm
        p-4
        rounded-xl
        border
        bg-white
        dark:bg-gray-800
        shadow-lg
        animate-pulse
      "
    >
      {/* Header */}
      <div className="space-y-3">
        <div
          className="
          h-6
          w-2/3
          rounded
          bg-gray-200
          dark:bg-gray-700
        "
        />

        <div className="space-y-2">
          <div
            className="
            h-3
            rounded
            bg-gray-200
            dark:bg-gray-700
          "
          />

          <div
            className="
            h-3
            rounded
            bg-gray-200
            dark:bg-gray-700
          "
          />

          <div
            className="
            h-3
            w-4/5
            rounded
            bg-gray-200
            dark:bg-gray-700
          "
          />
        </div>
      </div>

      {/* Image */}
      <div
        className="
          mt-4
          h-44
          rounded-lg
          bg-gray-200
          dark:bg-gray-700
        "
      />

      {/* Tags */}
      <div className="flex gap-2 mt-4">
        <div
          className="
          h-6
          w-16
          rounded
          bg-gray-200
          dark:bg-gray-700
        "
        />

        <div
          className="
          h-6
          w-20
          rounded
          bg-gray-200
          dark:bg-gray-700
        "
        />

        <div
          className="
          h-6
          w-14
          rounded
          bg-gray-200
          dark:bg-gray-700
        "
        />
      </div>

      {/* Footer */}
      <div className="flex justify-between mt-6">
        <div
          className="
          h-4
          w-20
          rounded
          bg-gray-200
          dark:bg-gray-700
        "
        />

        <div
          className="
          h-4
          w-28
          rounded
          bg-gray-200
          dark:bg-gray-700
        "
        />
      </div>
    </article>
  );
}
