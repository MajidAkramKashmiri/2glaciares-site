'use client';

import { useState, type FormEvent } from 'react';
import { CheckCircle2, Loader2, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { readQuoteFields, validateQuote, type QuoteErrors } from '@/lib/quote';
import { services } from '@/lib/services';
import { cn } from '@/lib/utils';

interface QuoteState {
    status: 'idle' | 'success' | 'error';
    message?: string;
    errors?: QuoteErrors;
}

const initial: QuoteState = { status: 'idle' };
const endpoint = process.env.NEXT_PUBLIC_QUOTE_ENDPOINT;

const fieldClass =
    'h-12 w-full rounded-xl border border-frost-300 bg-white px-4 text-[0.95rem] text-ink placeholder:text-muted/70 transition-colors focus:border-ice-500 focus:outline-none focus:ring-4 focus:ring-ice-500/20 aria-invalid:border-red-400';

function Field({
    label,
    name,
    error,
    children,
    optional,
}: {
    label: string;
    name: string;
    error?: string;
    children: React.ReactNode;
    optional?: boolean;
}) {
    return (
        <div className="grid gap-1.5">
            <label htmlFor={name} className="text-sm font-semibold text-ink">
                {label} {optional ? <span className="font-normal text-muted">(optional)</span> : null}
            </label>
            {children}
            {error ? (
                <p id={`${name}-error`} className="text-sm text-red-600" role="alert">
                    {error}
                </p>
            ) : null}
        </div>
    );
}

export function QuoteForm({ className, defaultService }: { className?: string; defaultService?: string }) {
    const [state, setState] = useState<QuoteState>(initial);
    const [pending, setPending] = useState(false);

    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const form = event.currentTarget;
        const formData = new FormData(form);
        if (String(formData.get('company') ?? '')) {
            setState({ status: 'success', message: 'Thanks — we will be in touch shortly.' });
            return;
        }
        const fields = readQuoteFields(formData);
        const errors = validateQuote(fields);
        if (Object.keys(errors).length > 0) {
            setState({ status: 'error', message: 'Please fix the highlighted fields.', errors });
            return;
        }
        setPending(true);
        try {
            if (endpoint) {
                const response = await fetch(endpoint, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
                    body: JSON.stringify(fields),
                });
                if (!response.ok) {
                    throw new Error(`Request failed with ${response.status}`);
                }
            }
            setState({ status: 'success', message: 'Thanks — we will call you back shortly to confirm your free quote.' });
        }
        catch {
            setState({
                status: 'error',
                message: `Something went wrong sending your request. Please call us instead.`,
            });
        }
        finally {
            setPending(false);
        }
    }

    if (state.status === 'success') {
        return (
            <div className={cn('rounded-3xl bg-white p-8 text-center shadow-soft ring-1 ring-frost-200', className)}>
                <span className="mx-auto grid size-14 place-items-center rounded-full bg-ice-100 text-navy-900">
                    <CheckCircle2 className="size-7" aria-hidden />
                </span>
                <h3 className="mt-5 text-2xl font-bold">Request received</h3>
                <p className="mt-2 text-ink-soft">{state.message}</p>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} noValidate className={cn('grid gap-5 rounded-3xl bg-white p-6 shadow-soft ring-1 ring-frost-200 sm:p-8', className)}>
            <input type="text" name="company" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />
            <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Name" name="name" error={state.errors?.name}>
                    <input
                        id="name"
                        name="name"
                        autoComplete="name"
                        placeholder="Your name"
                        required
                        className={fieldClass}
                        aria-invalid={Boolean(state.errors?.name)}
                        aria-describedby={state.errors?.name ? 'name-error' : undefined}
                    />
                </Field>
                <Field label="Phone" name="phone" error={state.errors?.phone}>
                    <input
                        id="phone"
                        name="phone"
                        type="tel"
                        inputMode="tel"
                        autoComplete="tel"
                        placeholder="(954) 000-0000"
                        required
                        className={fieldClass}
                        aria-invalid={Boolean(state.errors?.phone)}
                        aria-describedby={state.errors?.phone ? 'phone-error' : undefined}
                    />
                </Field>
            </div>
            <Field label="Email" name="email" error={state.errors?.email} optional>
                <input
                    id="email"
                    name="email"
                    type="email"
                    inputMode="email"
                    autoComplete="email"
                    placeholder="you@email.com"
                    className={fieldClass}
                    aria-invalid={Boolean(state.errors?.email)}
                    aria-describedby={state.errors?.email ? 'email-error' : undefined}
                />
            </Field>
            <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Property type" name="propertyType">
                    <select id="propertyType" name="propertyType" className={fieldClass} defaultValue="Residential">
                        <option>Residential</option>
                        <option>Commercial</option>
                        <option>Community / Condo</option>
                    </select>
                </Field>
                <Field label="Service needed" name="service">
                    <select id="service" name="service" className={fieldClass} defaultValue={defaultService ?? services[0].name}>
                        {services.map((service) => (
                            <option key={service.slug}>{service.name}</option>
                        ))}
                    </select>
                </Field>
            </div>
            <Field label="Message" name="message" error={state.errors?.message} optional>
                <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Tell us a little about the property..."
                    className={cn(fieldClass, 'h-auto py-3')}
                    aria-invalid={Boolean(state.errors?.message)}
                    aria-describedby={state.errors?.message ? 'message-error' : undefined}
                />
            </Field>
            {state.status === 'error' ? (
                <p className="text-sm font-medium text-red-600" role="alert">
                    {state.message}
                </p>
            ) : null}
            <Button type="submit" size="lg" variant="primary" disabled={pending} className="w-full">
                {pending ? <Loader2 className="animate-spin" aria-hidden /> : <Send aria-hidden />}
                {pending ? 'Sending…' : 'Request a free quote'}
            </Button>
            <p className="text-center text-xs text-muted">No spam. We only use your details to follow up on this request.</p>
        </form>
    );
}
