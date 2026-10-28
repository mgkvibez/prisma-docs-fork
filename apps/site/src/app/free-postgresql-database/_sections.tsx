import Image from "next/image";
import { Texture } from "@/components/brand/texture";
import { ProductCta } from "@/components/product/product-cta";
import { ProductFeatures } from "@/components/product/product-features";
import { ProductHero } from "@/components/product/product-hero";
import { ProductPlatform } from "@/components/product/product-platform";
import type { ProductIllustrationName } from "@/components/product/illustrations";
import { CompareLinks } from "@/components/sections/compare-links";
import { Faq } from "@/components/sections/faq";
import { TestimonialsReveal } from "@/components/sections/testimonials-reveal";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { renderFaqAnswer } from "@/lib/faq-answer";
import { cn } from "@/lib/utils";
import { PRODUCT_TESTIMONIALS_HEADING } from "@/lib/markdown/product";
import {
  FREE_POSTGRES_HERO_SECONDARY_CTA,
  FREE_POSTGRES_CLOSER_BENEFITS,
  FREE_POSTGRES_CLOSER_BODY,
  FREE_POSTGRES_CLOSER_HEADLINE,
  FREE_POSTGRES_COMPARE_INTRO,
  FREE_POSTGRES_COMPARE_NOTE,
  FREE_POSTGRES_FAQ,
  FREE_POSTGRES_FEATURE_ITEMS,
  FREE_POSTGRES_FEATURES_HEADLINE,
  FREE_POSTGRES_H1,
  FREE_POSTGRES_HERO_CHECKS,
  FREE_POSTGRES_HERO_PRIMARY_CTA,
  FREE_POSTGRES_INCLUDED_CARDS,
  FREE_POSTGRES_INCLUDED_NOTES,
  FREE_POSTGRES_INCLUDED_ROWS,
  FREE_POSTGRES_CASES,
  FREE_POSTGRES_LIMIT,
  FREE_POSTGRES_PLATFORM_BODY,
  FREE_POSTGRES_PRICING_CTA,
  FREE_POSTGRES_PRIMARY_CTA,
  FREE_POSTGRES_PROBLEM_HEADLINE,
  FREE_POSTGRES_SUBHEADLINE,
} from "./_content";
import { FreePostgresTerminal } from "./_terminal";

function FreePostgresIncluded() {
  return (
    <div className="overflow-hidden rounded-[1.5rem] border border-black/[0.06] bg-white text-left">
      <div className="grid grid-cols-1 sm:grid-cols-3">
        {FREE_POSTGRES_INCLUDED_CARDS.map((card, index) => (
          <Card
            key={card.title}
            className={cn(
              "h-full gap-0 rounded-none border-0 bg-transparent py-0 shadow-none",
              index < FREE_POSTGRES_INCLUDED_CARDS.length - 1 &&
                "border-b border-black/[0.06] sm:border-r sm:border-b-0",
            )}
          >
            <CardHeader className="gap-3 px-6 py-8 sm:px-8 sm:py-10">
              <CardTitle className="text-[clamp(2.25rem,3vw,2.75rem)] font-semibold leading-none tabular-nums text-foreground">
                {renderFaqAnswer(card.title)}
                {card.note ? (
                  <a href={`#free-postgres-note-${card.note}`} className="ml-0.5">
                    <sup className="text-sm font-medium">{card.note}</sup>
                  </a>
                ) : null}
              </CardTitle>
              <CardDescription className="max-w-[32ch] text-pretty text-[0.9375rem] font-normal leading-relaxed">
                {renderFaqAnswer(card.detail)}
              </CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
      <div className="border-t border-black/[0.06]">
        <Table>
          <TableHeader>
            <TableRow className="border-black/[0.06] hover:bg-transparent">
              <TableHead className="h-auto w-44 px-6 py-3 text-sm font-medium text-muted-foreground sm:px-8">
                Feature
              </TableHead>
              <TableHead className="h-auto px-6 py-3 text-sm font-medium text-muted-foreground sm:px-8">
                Included
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {FREE_POSTGRES_INCLUDED_ROWS.map((row) => (
              <TableRow key={row.label} className="border-black/[0.06] hover:bg-transparent">
                <TableCell className="px-6 py-4 font-medium whitespace-normal text-foreground sm:px-8">
                  {row.label}
                </TableCell>
                <TableCell className="px-6 py-4 leading-relaxed whitespace-normal text-foreground sm:px-8">
                  {renderFaqAnswer(row.value)}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <div
        id="free-postgres-notes"
        className="flex flex-col gap-1.5 border-t border-black/[0.06] px-6 py-5 text-sm leading-relaxed text-muted-foreground sm:px-8"
      >
        {FREE_POSTGRES_INCLUDED_NOTES.map((note) => (
          <p key={note.n} id={`free-postgres-note-${note.n}`}>
            <sup>{note.n}</sup> {note.text}
          </p>
        ))}
      </div>
    </div>
  );
}

function FreePostgresSubtitle() {
  return (
    <>
      <strong className="font-semibold text-foreground">2 GB</strong> of storage,{" "}
      <strong className="font-semibold text-foreground">200,000 operations</strong> a month (one
      query each), and{" "}
      <strong className="font-semibold text-foreground">50 databases</strong>. Prisma Postgres
      works with any Postgres client.
    </>
  );
}

function LimitFigure({ figure, label }: { figure: string; label: string }) {
  return (
    <div>
      <p className="whitespace-nowrap text-[clamp(1.75rem,2.5vw,2.25rem)] font-semibold tabular-nums leading-none text-foreground">
        {figure}
      </p>
      <p className="mt-2 text-sm leading-snug text-muted-foreground">{label}</p>
    </div>
  );
}

// One grainy panel. The heading does not repeat the stop, and the three
// rough days sit in the panel rather than under a second heading.
// Free-page only. ProductProblem stays the centered narrative /postgres uses.
function FreeLimit() {
  return (
    <section id="limits" className="scroll-mt-28 bg-white px-4 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-site">
        <h2 className="max-w-[14ch] text-balance text-[clamp(1.75rem,2.75vw,2.375rem)] leading-[1.1]">
          {FREE_POSTGRES_PROBLEM_HEADLINE}
        </h2>

        <div className="relative mt-10 overflow-hidden rounded-[1.5rem] border border-black/[0.06] bg-white">
          <Texture opacity={0.05} blend="multiply" />
          <div className="relative px-6 py-7 sm:px-10 sm:py-8">
            <p className="max-w-[46ch] text-pretty leading-snug text-foreground">
              {FREE_POSTGRES_LIMIT.counts}
            </p>
            <div className="mt-6 grid grid-cols-2 gap-6 sm:max-w-xl">
              <LimitFigure
                figure={FREE_POSTGRES_LIMIT.monthFigure}
                label={FREE_POSTGRES_LIMIT.monthLabel}
              />
              <LimitFigure
                figure={FREE_POSTGRES_LIMIT.dayFigure}
                label={FREE_POSTGRES_LIMIT.dayLabel}
              />
            </div>
            <p className="mt-6 max-w-[54ch] text-pretty leading-snug text-foreground">
              {FREE_POSTGRES_LIMIT.idle}
            </p>
            <p className="mt-2 max-w-[54ch] text-pretty leading-snug text-foreground">
              {FREE_POSTGRES_LIMIT.stop}
            </p>
            <p className="mt-4 max-w-[62ch] text-pretty text-sm leading-relaxed text-muted-foreground">
              {FREE_POSTGRES_LIMIT.restore} {renderFaqAnswer(FREE_POSTGRES_LIMIT.paid)}
            </p>

            <ul className="mt-6 grid grid-cols-1 gap-3 border-t border-black/[0.06] pt-5 lg:grid-cols-3">
              {FREE_POSTGRES_CASES.map((item) => (
                <li
                  key={item.name}
                  className="overflow-hidden rounded-xl border border-black/[0.06] bg-white"
                >
                  <Image
                    src={item.image}
                    alt={item.imageAlt}
                    width={800}
                    height={600}
                    className="h-24 w-full object-cover grayscale"
                  />
                  <div className="px-4 py-3">
                    <h3 className="text-base leading-snug">{item.name}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                      {item.body}
                    </p>
                    <p className="mt-3 text-sm font-semibold tabular-nums text-foreground">
                      {item.count}
                    </p>
                    <p className="mt-0.5 text-sm text-foreground">{item.plan}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

// Same sections as /postgres, with the free-plan contents directly under the
// hero. The limit panel comes next, then the two cards.
export function FreePostgresPage() {
  return (
    <>
      <ProductHero
        name="Prisma Postgres"
        accent="postgres"
        visual={<FreePostgresTerminal />}
        visualAspect={false}
        hero={{
          headline: FREE_POSTGRES_H1,
          subheadline: FREE_POSTGRES_SUBHEADLINE,
          primaryCta: FREE_POSTGRES_HERO_PRIMARY_CTA,
          secondaryCta: FREE_POSTGRES_HERO_SECONDARY_CTA,
        }}
        subheadline={<FreePostgresSubtitle />}
        checks={FREE_POSTGRES_HERO_CHECKS}
      />
      <ProductFeatures
        features={{
          headline: FREE_POSTGRES_FEATURES_HEADLINE,
          // The pricing, create-db, and connection-string links sit on the panel.
          bridge: "",
          items: [],
        }}
        lead={<FreePostgresIncluded />}
        leadLayout="wide"
      />
      <FreeLimit />
      <ProductFeatures
        features={{
          headline: "",
          bridge: "",
          items: FREE_POSTGRES_FEATURE_ITEMS.map((item) => ({
            ...item,
            illustration: item.illustration as ProductIllustrationName,
          })),
        }}
      />
      <ProductPlatform platform={{ body: FREE_POSTGRES_PLATFORM_BODY }} />
      <CompareLinks intro={FREE_POSTGRES_COMPARE_INTRO} note={FREE_POSTGRES_COMPARE_NOTE} />
      <Faq items={FREE_POSTGRES_FAQ} id="faq" />
      <TestimonialsReveal heading={PRODUCT_TESTIMONIALS_HEADING} />
      <ProductCta
        cta={{
          headline: FREE_POSTGRES_CLOSER_HEADLINE,
          body: FREE_POSTGRES_CLOSER_BODY,
          benefits: [...FREE_POSTGRES_CLOSER_BENEFITS],
          primaryCta: FREE_POSTGRES_PRIMARY_CTA,
          secondaryCta: FREE_POSTGRES_PRICING_CTA,
        }}
      />
    </>
  );
}
