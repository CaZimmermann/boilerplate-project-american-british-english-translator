'use strict';

const Translator = require('../components/translator.js');

module.exports = function (app) {
  
  const translator = new Translator();

  app.route('/api/translate')
    .post((req, res) => {
      const { text, locale } = req.body;

      if (!text || !locale) {
        if (text === '') {
          return res.json({ error: 'No text to translate' });
        }
        return res.json({ error: 'Required field(s) missing' });
      }

      if (locale !== 'american-to-british' && locale !== 'british-to-american') {
        return res.json({ error: 'Invalid value for locale field' });
      }

      const translator = new Translator();
      let translatedText;

      if (locale === 'american-to-british') {
        translatedText = translator.translateAmericanToBritish(text);
      } else if (locale === 'british-to-american') {
        translatedText = translator.translateBritishToAmerican(text);
      }

      if (translatedText === text) {
        return res.json({
          text,
          translation: 'Everything looks good to me!'
        });
      }

      res.json({
        text,
        translation: translatedText
      });
    });
};
