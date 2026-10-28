import type { ReactNode } from "react";
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
  FREE_POSTGRES_LIMIT,
  FREE_POSTGRES_PLATFORM_BODY,
  FREE_POSTGRES_PRICING_CTA,
  FREE_POSTGRES_PRIMARY_CTA,
  FREE_POSTGRES_PROBLEM_HEADLINE,
  FREE_POSTGRES_SUBHEADLINE,
  STORAGE_CONFIRM,
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

// The free plan's limit, drawn as one instrument: what a query counts as, then
// what idle and the cap actually do. Free-page only. ProductProblem stays the
// centered narrative /postgres uses.
function FreeLimit() {
  return (
    <section id="limits" className="scroll-mt-28 bg-white px-4 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-site">
        <h2 className="max-w-[12ch] text-balance text-[clamp(1.75rem,2.75vw,2.375rem)] leading-[1.1]">
          {FREE_POSTGRES_PROBLEM_HEADLINE}
        </h2>
        <p className="mt-5 max-w-[62ch] text-pretty text-lg leading-relaxed text-muted-foreground">
          {FREE_POSTGRES_LIMIT.intro}
        </p>

        <div className="relative mt-16 overflow-hidden rounded-[1.5rem] border border-black/[0.06] bg-white">
          <Texture opacity={0.05} blend="multiply" />
          <div className="relative grid lg:grid-cols-[minmax(0,0.86fr)_minmax(0,1.14fr)]">
            <div className="border-b border-black/[0.06] p-6 sm:p-10 lg:border-b-0 lg:border-r">
              <h3 className="text-xl">{FREE_POSTGRES_LIMIT.countsTitle}</h3>
              <p className="mt-3 max-w-[36ch] text-pretty text-lg leading-snug text-foreground">
                {FREE_POSTGRES_LIMIT.countsLead}
              </p>
              <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2">
                <LimitFigure
                  figure={FREE_POSTGRES_LIMIT.monthFigure}
                  label={FREE_POSTGRES_LIMIT.monthLabel}
                />
                <LimitFigure
                  figure={FREE_POSTGRES_LIMIT.dayFigure}
                  label={FREE_POSTGRES_LIMIT.dayLabel}
                />
              </div>
              <p className="mt-8 text-sm font-medium text-foreground">
                {FREE_POSTGRES_LIMIT.idleNotBilled}
              </p>
            </div>

            <div className="flex flex-col">
              <div className="p-6 sm:p-10">
                <div className="flex items-start gap-3">
                  <span
                    aria-hidden
                    className="mt-2 size-2 shrink-0 rounded-full bg-prism-cyan-500"
                  />
                  <div>
                    <h3 className="text-xl leading-snug">{FREE_POSTGRES_LIMIT.idleTitle}</h3>
                    <p className="mt-3 max-w-[52ch] text-pretty leading-relaxed text-muted-foreground">
                      {FREE_POSTGRES_LIMIT.idleBody}
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-prism-red-500/[0.05] p-6 sm:p-10">
                <div className="flex items-start gap-3">
                  <span
                    aria-hidden
                    className="mt-2 size-2 shrink-0 rounded-full bg-prism-red-500"
                  />
                  <div>
                    <h3 className="text-xl leading-snug">{FREE_POSTGRES_LIMIT.capTitle}</h3>
                    <p className="mt-3 max-w-[52ch] text-pretty leading-relaxed text-foreground">
                      {FREE_POSTGRES_LIMIT.capBody}
                    </p>
                  </div>
                </div>
                <div className="mt-8 border-t border-prism-red-500/20 pt-8">
                  <div className="flex items-start gap-3 sm:pl-5">
                    <span
                      aria-hidden
                      className="mt-2 size-2 shrink-0 rounded-full bg-prism-yellow-400"
                    />
                    <div>
                      <h3 className="text-lg leading-snug">{FREE_POSTGRES_LIMIT.restoreTitle}</h3>
                      <p className="mt-2 max-w-[48ch] text-pretty leading-relaxed text-muted-foreground">
                        {FREE_POSTGRES_LIMIT.restoreBody}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <p className="relative border-t border-black/[0.06] px-6 py-6 text-pretty text-sm leading-relaxed text-muted-foreground sm:px-10">
            {renderFaqAnswer(FREE_POSTGRES_LIMIT.paid)}
          </p>
        </div>

        <div className="max-w-3xl">
          <EngineeringConfirm>{STORAGE_CONFIRM}</EngineeringConfirm>
        </div>
      </div>
    </section>
  );
}

/** Temporary callout. Delete this once engineering answers the two open facts. */
export function EngineeringConfirm({ children }: { children: ReactNode }) {
  return (
    <p
      className="mt-4 rounded-md border border-prism-yellow-400/70 bg-prism-yellow-50 px-3 py-2 text-[0.8125rem] leading-relaxed text-foreground"
      data-engineering-confirm=""
    >
      <span className="font-semibold uppercase tracking-[0.04em] text-prism-yellow-800">
        TO CONFIRM WITH ENGINEERING
      </span>
      <span className="mt-0.5 block text-foreground/80">{children}</span>
    </p>
  );
}

// Same sections as /postgres, with the free-plan contents directly under the
// hero. The limit comes next, then the two cards. Composed here so the limit
// section and the engineering callouts stay on this page only.
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
