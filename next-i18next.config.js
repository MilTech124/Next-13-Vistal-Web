module.exports = {
    i18n: {
      defaultLocale: 'pl',
      locales: ['pl', 'sk','hu'],
      ...(typeof window === undefined
        ? { localePath: path.resolve('./public/locales') }
        : {}),
    },
  }