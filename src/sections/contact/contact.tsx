'use client';

import {useTranslations} from 'next-intl';

async function handleSubmit(e) {
    e.preventDefault();
    const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        body: JSON.stringify({
            access_key: "a672882c-c585-49a0-912c-7b1bd145852c",
            name: e.target.name.value,
            email: e.target.email.value,
            message: e.target.message.value,
        }),
    });
    const result = await response.json();
    if (result.success) {
        console.log(result);
    }
}

export default function Contact() {
  const t = useTranslations('Contact');
  return (
    <section id="contact" className="p-8">
        <div className="mx-auto">
            <h2 className="text-4xl font-semibold mb-6">
                {t('title')}
            </h2>
            <p className="text-lg mb-8">
                {t('subtitle')}
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
            <div className="text-left">
                <label
                htmlFor="name"
                className="block text-sm font-medium mb-1"
                >
                    {t('nameLabel')}
                </label>
                <input
                type="text"
                name="name"
                required
                placeholder={t('namePlaceholder')}
                className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:text-white"
                />
            </div>

            <div className="text-left">
                <label
                htmlFor="email"
                className="block text-sm font-medium mb-1"
                >
                    {t('emailLabel')}
                </label>
                <input
                type="email"
                name="email"
                required
                placeholder={t('emailPlaceholder')}
                className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:text-white"
                />
            </div>

            <div className="text-left">
                <label
                htmlFor="message"
                className="block text-sm font-medium mb-1"
                >
                    {t('messageLabel')}
                </label>
                <textarea
                name="message"
                required
                placeholder={t('messagePlaceholder')}
                className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:text-white"
                ></textarea>
            </div>

            <button
                type="submit"
                className="w-full px-6 py-3 bg-primary text-secondary hover:bg-accent rounded-md shadow-lg font-bold"
            >
                {t('sendButton')}
            </button>
            </form>
        </div>
    </section>
  );
}