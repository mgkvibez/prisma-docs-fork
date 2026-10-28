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
  FREE_POSTGRES_CASES_HEADLINE,
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

// The free plan's limit, as one reading column. The catch is the sentence
// under the heading. The panel holds what a query counts as, the two paces,
// idle, and the one-time restore. Free-page only. ProductProblem stays the
// centered narrative /postgres uses.
function FreeLimit() {
  return (
    <section id="limits" className="scroll-mt-28 bg-white px-4 pt-24 sm:px-8 sm:pt-32">
      <div className="mx-auto max-w-3xl">
        <h2 className="max-w-[14ch] text-balance text-[clamp(1.75rem,2.75vw,2.375rem)] leading-[1.1]">
          {FREE_POSTGRES_PROBLEM_HEADLINE}
        </h2>
        <p className="mt-5 max-w-[34ch] text-pretty text-xl leading-snug text-foreground sm:text-2xl">
          {FREE_POSTGRES_LIMIT.catch}
        </p>

        <div className="mt-12 rounded-[1.5rem] border border-black/[0.06] bg-white px-6 py-8 sm:px-10 sm:py-10">
          <p className="max-w-[36ch] text-pretty text-lg leading-snug text-foreground">
            {FREE_POSTGRES_LIMIT.counts}
          </p>
          <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2">
            <LimitFigure
              figure={FREE_POSTGRES_LIMIT.monthFigure}
              label={FREE_POSTGRES_LIMIT.monthLabel}
            />
            <LimitFigure
              figure={FREE_POSTGRES_LIMIT.dayFigure}
              label={FREE_POSTGRES_LIMIT.dayLabel}
            />
          </div>
          <p className="mt-8 max-w-[42ch] text-pretty text-lg leading-snug text-foreground">
            {FREE_POSTGRES_LIMIT.idle}
          </p>
          <div className="mt-8 space-y-3 border-t border-black/[0.06] pt-6 text-sm leading-relaxed text-muted-foreground">
            <p className="max-w-[58ch] text-pretty">{FREE_POSTGRES_LIMIT.restore}</p>
            <p className="max-w-[58ch] text-pretty">{renderFaqAnswer(FREE_POSTGRES_LIMIT.paid)}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

// The section after the limit. Three rough days, in sentences, so the step
// from a blog to a restaurant is readable without a chart.
function FreeLimitCases() {
  return (
    <section
      id="a-day"
      className="scroll-mt-28 bg-white px-4 pt-20 pb-24 sm:px-8 sm:pt-24 sm:pb-32"
    >
      <div className="mx-auto max-w-3xl">
        <h2 className="max-w-[14ch] text-balance text-[clamp(1.75rem,2.75vw,2.375rem)] leading-[1.1]">
          {FREE_POSTGRES_CASES_HEADLINE}
        </h2>
        <div className="mt-8 flex max-w-[46ch] flex-col gap-5">
          {FREE_POSTGRES_CASES.map((item) => (
            <p key={item.name} className="text-pretty text-lg leading-snug text-foreground">
              {item.name},{" "}
              <span className="font-semibold tabular-nums text-foreground">{item.count}</span>{" "}
              {item.tail}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}

// Same sections as /postgres, with the free-plan contents directly under the
// hero. The limit comes next, then three rough days, then the two cards.
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
      <FreeLimitCases />
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
