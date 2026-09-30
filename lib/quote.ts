export interface QuoteFields {
    name: string;
    phone: string;
    email: string;
    propertyType: string;
    service: string;
    message: string;
}

export type QuoteErrors = Partial<Record<'name' | 'phone' | 'email' | 'message', string>>;

const PHONE = /^[\d\s()+.-]{7,20}$/;
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function readQuoteFields(formData: FormData): QuoteFields {
    const read = (key: string) => String(formData.get(key) ?? '').trim();
    return {
        name: read('name'),
        phone: read('phone'),
        email: read('email'),
        propertyType: read('propertyType'),
        service: read('service'),
        message: read('message'),
    };
}

export function validateQuote(fields: QuoteFields): QuoteErrors {
    const errors: QuoteErrors = {};
    if (fields.name.length < 2) {
        errors.name = 'Please tell us your name.';
    }
    if (!PHONE.test(fields.phone)) {
        errors.phone = 'Enter a phone number we can reach you on.';
    }
    if (fields.email && !EMAIL.test(fields.email)) {
        errors.email = 'That email address does not look right.';
    }
    if (fields.message.length > 2000) {
        errors.message = 'Please keep your message under 2000 characters.';
    }
    return errors;
}
