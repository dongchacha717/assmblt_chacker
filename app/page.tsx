import { Hero } from "@/components/blocks/hero"

export default function Home() {
  return (
    <main className="flex-1">
      <Hero
        title="국회의원실의 평가를 확인하세요"
        subtitle="실제 경험자의 생생한 후기를 검색해보세요!"
        actions={[
          {
            label: "Try Demo",
            href: "#",
            variant: "outline",
          },
          {
            label: "Start Free",
            href: "#",
            variant: "default",
          },
        ]}
        titleClassName="text-5xl md:text-6xl font-extrabold"
        subtitleClassName="text-lg md:text-xl max-w-[600px]"
        actionsClassName="mt-8"
      />
    </main>
  )
}
