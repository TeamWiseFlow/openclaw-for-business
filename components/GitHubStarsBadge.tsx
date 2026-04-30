import Image from "next/image";

export default function GitHubStarsBadge() {
  return (
    <a
      href="https://github.com/TeamWiseFlow/wiseflow"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1.5 mt-3"
      aria-label="查看 GitHub 星标数"
    >
      <Image
        src="https://img.shields.io/github/stars/TeamWiseFlow/wiseflow?style=social"
        alt="GitHub stars"
        width={100}
        height={20}
        className="h-5"
        unoptimized
      />
    </a>
  );
}