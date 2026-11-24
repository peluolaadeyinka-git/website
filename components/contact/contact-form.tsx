'use client'

import { useActionState } from 'react'
import { useSearchParams } from 'next/navigation'
import { AlertTriangle, ArrowRight, CircleCheck, Loader2, Mail, MessageCircle } from 'lucide-react'
import { submitInquiry, type InquiryFields, type InquiryState } from '@/lib/actions/inquiry'
import { services } from '@/lib/data/services'
import { emailLink, siteConfig, whatsappLink } from '@/lib/site-config'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { cn } from '@/lib/utils'

const fieldClass =
  'h-12 w-full min-w-0 rounded-xl border border-input bg-background px-4 text-base outline-none transition-colors placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 md:text-sm'
const selectClass =
  'h-12 w-full appearance-none rounded-xl border border-input bg-background bg-[url("data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2716%27 height=%2716%27 fill=%27none%27 stroke=%27%236b7280%27 stroke-width=%272%27 viewBox=%270 0 24 24%27%3E%3Cpath d=%27m6 9 6 6 6-6%27/%3E%3C/svg%3E")] bg-[position:right_1rem_center] bg-no-repeat px-4 pr-10 text-base outline-none transition-colors focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 aria-invalid:border-destructive md:text-sm'

function composeMessage(v: InquiryFields) {
  return [
    `Hi ${siteConfig.ownerName}, I'd like to hire you.`,
    '',
    `Name: ${v.name}`,
    `Email: ${v.email}`,
    v.phone ? `Phone: ${v.phone}` : null,
    `Service: ${v.service}`,
    v.budget ? `Budget: ${v.budget}` : null,
    '',
    v.message,
  ]
    .filter((line) => line !== null)
    .join('\n')
}

export function ContactForm() {
  const searchParams = useSearchParams()
  const serviceSlug = searchParams.get('service')
  const preselected = services.find((s) => s.slug === serviceSlug)?.inquiryLabel ?? ''
  const serviceOptions = Array.from(
    new Set([...services.map((s) => s.inquiryLabel), ...siteConfig.extraInquiryOptions]),
  )

  const [state, formAction, pending] = useActionState<InquiryState, FormData>(submitInquiry, { status: 'idle' })

  const values = state.status === 'error' || state.status === 'not_connected' ? state.values : undefined
  const errors = state.status === 'error' ? state.errors : {}

  return (
    <form
      action={formAction}
      noValidate
      className="flex flex-col gap-5"
      key={`${preselected}:${values ? JSON.stringify(values) : ''}`}
    >
      {preselected ? (
        <p className="flex items-center gap-2 rounded-xl border border-primary/20 bg-accent px-4 py-3 text-sm text-accent-foreground">
          <CircleCheck className="size-4 shrink-0" aria-hidden="true" />
          Inquiry for: <strong className="font-semibold">{preselected}</strong>
        </p>
      ) : null}

      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="name" label="Full name" error={errors.name} required>
          <input id="name" name="name" autoComplete="name" placeholder="Jane Doe" defaultValue={values?.name} aria-invalid={!!errors.name} aria-describedby={errors.name ? 'name-error' : undefined} className={fieldClass} required />
        </Field>
        <Field id="email" label="Email address" error={errors.email} required>
          <input id="email" name="email" type="email" autoComplete="email" placeholder="jane@company.com" defaultValue={values?.email} aria-invalid={!!errors.email} aria-describedby={errors.email ? 'email-error' : undefined} className={fieldClass} required />
        </Field>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="phone" label="Phone number" optional>
          <input id="phone" name="phone" type="tel" autoComplete="tel" placeholder="+1 555 000 0000" defaultValue={values?.phone} className={fieldClass} />
        </Field>
        <Field id="budget" label="Project budget" optional>
          <select id="budget" name="budget" defaultValue={values?.budget ?? ''} className={selectClass}>
            <option value="">Select a range</option>
            {siteConfig.budgets.map((b) => (
              <option key={b} value={b}>
                {b}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <Field id="service" label="Service of interest" error={errors.service} required>
        <select
          id="service"
          name="service"
          defaultValue={values?.service ?? preselected}
          aria-invalid={!!errors.service}
          aria-describedby={errors.service ? 'service-error' : undefined}
          className={selectClass}
          required
        >
          <option value="">Choose a service</option>
          {serviceOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </Field>

      <Field id="message" label="Project requirements" error={errors.message} required>
        <Textarea
          id="message"
          name="message"
          rows={5}
          placeholder="Describe your project, requirements, and timeline so I can prepare a quote…"
          defaultValue={values?.message}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? 'message-error' : undefined}
          className="min-h-36 rounded-xl bg-background px-4 py-3 text-base md:text-sm"
          required
        />
      </Field>

      <button
        type="submit"
        disabled={pending}
        className="group inline-flex h-12 items-center justify-center gap-2 rounded-full bg-primary px-7 font-medium text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:-translate-y-0.5 hover:bg-primary/90 focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-70"
      >
        {pending ? <Loader2 className="size-4 animate-spin" aria-hidden="true" /> : null}
        {pending ? 'Submitting…' : 'Submit Inquiry'}
        {!pending ? <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" /> : null}
      </button>

      <div aria-live="polite">
        {state.status === 'not_connected' ? (
          <div className="rounded-2xl border border-amber-300/60 bg-amber-50 p-5 text-sm text-amber-950">
            <p className="flex items-start gap-2 font-semibold">
              <AlertTriangle className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
              Your inquiry has not been sent yet.
            </p>
            {(() => {
              const message = composeMessage(state.values)
              const mail = emailLink(`Project inquiry: ${state.values.service}`, message)
              const whatsapp = whatsappLink(message)
              if (!mail && !whatsapp) {
                return (
                  <p className="mt-1.5 pl-6 leading-relaxed">
                    Online form delivery isn&apos;t connected yet, and direct contact details will be added soon.
                    Please check back shortly — thank you for your patience.
                  </p>
                )
              }
              return (
                <>
                  <p className="mt-1.5 pl-6 leading-relaxed">
                    Online form delivery isn&apos;t connected yet. Your details are ready — send them directly using
                    one of the options below.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2 pl-6">
                    {mail ? (
                      <a
                        href={mail}
                        className="inline-flex items-center gap-1.5 rounded-full bg-navy px-4 py-2 font-medium text-white transition-colors hover:bg-navy/90"
                      >
                        <Mail className="size-4" aria-hidden="true" />
                        Send via Email
                      </a>
                    ) : null}
                    {whatsapp ? (
                      <a
                        href={whatsapp}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-full bg-emerald-600 px-4 py-2 font-medium text-white transition-colors hover:bg-emerald-700"
                      >
                        <MessageCircle className="size-4" aria-hidden="true" />
                        Send via WhatsApp
                      </a>
                    ) : null}
                  </div>
                </>
              )
            })()}
          </div>
        ) : null}
        {state.status === 'success' ? (
          <p className="flex items-center gap-2 rounded-2xl border border-emerald-300 bg-emerald-50 p-4 text-sm text-emerald-900">
            <CircleCheck className="size-4" aria-hidden="true" />
            Thanks! Your inquiry was sent. I&apos;ll get back to you soon.
          </p>
        ) : null}
      </div>
    </form>
  )
}

function Field({
  id,
  label,
  error,
  required,
  optional,
  children,
}: {
  id: string
  label: string
  error?: string
  required?: boolean
  optional?: boolean
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col gap-2">
      <Label htmlFor={id} className="text-sm font-medium">
        {label}
        {required ? <span className="text-primary" aria-hidden="true">*</span> : null}
        {optional ? <span className="font-normal text-muted-foreground">(optional)</span> : null}
      </Label>
      {children}
      <p id={`${id}-error`} className={cn('text-xs text-destructive', !error && 'sr-only')}>
        {error}
      </p>
    </div>
  )
}
