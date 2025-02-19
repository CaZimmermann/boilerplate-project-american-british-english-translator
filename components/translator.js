const americanOnly = require('./american-only.js');
const americanToBritishSpelling = require('./american-to-british-spelling.js');
const americanToBritishTitles = require("./american-to-british-titles.js")
const britishOnly = require('./british-only.js')

class Translator {

  highlightTranslation(original, translated) {
      return original !== translated ? `<span class="highlight">${translated}</span>` : translated;
  }

  translateAmericanToBritish(text) {
      let translatedText = text;

      // Step 1: Handle multi-word phrases
      for (let phrase in americanOnly) {
          let regex = new RegExp(`\\b${phrase}\\b`, 'gi'); 
          translatedText = translatedText.replace(regex, (match) => {
              return this.highlightTranslation(match, americanOnly[phrase]);
          });
      } 

      // Step 2: Handle spelling changes
      for (let word in americanToBritishSpelling) {
          let regex = new RegExp(`\\b${word}\\b`, 'gi');
          translatedText = translatedText.replace(regex, (match) => {
              return this.highlightTranslation(match, americanToBritishSpelling[word]);
          });
      }

      // Step 3: Handle titles (fixing American titles with periods)
      translatedText = translatedText.replace(/\b(Mr|Mrs|Ms|Mx|Dr|Prof)\./g, (match) => {
        let lowerMatch = match.toLowerCase(); 
        let replacement = americanToBritishTitles[lowerMatch]; 
    
        // Preserve original capitalization
        if (match[0] === match[0].toUpperCase()) {
            replacement = replacement.charAt(0).toUpperCase() + replacement.slice(1);
        }
    
        return this.highlightTranslation(match, replacement);
    });

      // Step 4: Convert time format (10:30 → 10.30)
      translatedText = translatedText.replace(
          /\b(\d{1,2}):(\d{2})\b/g,
          (match, p1, p2) => {
              return `<span class="highlight">${p1}.${p2}</span>`;
          }
      );

      return translatedText;
  }

  translateBritishToAmerican(text) {
      let translatedText = text;

      // Step 1: Handle multi-word phrases
      for (let phrase in britishOnly) {
          let regex = new RegExp(`\\b${phrase}\\b`, 'gi'); 
          translatedText = translatedText.replace(regex, (match) => {
              return this.highlightTranslation(match, britishOnly[phrase]);
          });
      }

      // Step 2: Handle spelling changes (reverse lookup)
      for (let word in americanToBritishSpelling) {
          let britishWord = americanToBritishSpelling[word];
          let regex = new RegExp(`\\b${britishWord}\\b`, 'gi');
          translatedText = translatedText.replace(regex, (match) => {
              return this.highlightTranslation(match, word);
          });
      }

      // Step 3: Handle titles (fixing British titles without periods)
      translatedText = translatedText.replace(/\b(mr|mrs|ms|mx|dr|prof)\b/gi, (match) => {
          let lowerMatch = match.toLowerCase();
          let americanTitle = `${lowerMatch}.`; 
          return this.highlightTranslation(match, americanTitle);
      });

      // Step 4: Convert time format (10.30 → 10:30)
      translatedText = translatedText.replace(
          /\b(\d{1,2})\.(\d{2})\b/g,
          (match, p1, p2) => {
              return `<span class="highlight">${p1}:${p2}</span>`;
          }
      );

      return translatedText;
  }
}

module.exports = Translator;

