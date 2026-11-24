'use server'

export type InquiryFields = {
  name: string
  email: string
  phone: string
  service: string
  budget: string
  message: string
}

export type InquiryState =
  | { status: 'idle' }
  | { status: 'error'; errors: Partial<Record<keyof InquiryFields, string>>; values: InquiryFields }
  | { status: 'not_connected'; values: InquiryFields }
  | { status: 'success' }

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function read(formData: FormData, key: keyof InquiryFields, max: number) {
  return String(formData.get(key) ?? '').trim().slice(0, max)
}

export async function submitInquiry(_prev: InquiryState, formData: FormData): Promise<InquiryState> {
  const values: InquiryFields = {
    name: read(formData, 'name', 120),
    email: read(formData, 'email', 200),
    phone: read(formData, 'phone', 40),
    service: read(formData, 'service', 120),
    budget: read(formData, 'budget', 60),
    message: read(formData, 'message', 5000),
  }

  const errors: Partial<Record<keyof InquiryFields, string>> = {}
  if (values.name.length < 2) errors.name = 'Please enter your name.'
  if (!EMAIL_RE.test(values.email)) errors.email = 'Please enter a valid email address.'
  if (!values.service) errors.service = 'Please choose a service.'
  if (values.message.length < 10) errors.message = 'Please describe your project (at least 10 characters).'

  if (Object.keys(errors).length > 0) {
    return { status: 'error', errors, values }
  }

  /**
   * BACKEND INTEGRATION POINT
   * No delivery service is connected yet, so nothing is sent.
   * To go live, deliver `values` here (e.g. with Resend email, a database
   * insert, or a CRM webhook), then return { status: 'success' }.
   */
  return { status: 'not_connected', values }
}
