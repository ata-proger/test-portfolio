/** @type {import('next').NextConfig} */
const nextConfig = {
    /* config options here */
    reactCompiler: true,
    i18n: {
        locales: ['ru', 'en', 'tr'],
        defaultLocale: 'ru',
    },
};

export default nextConfig;
