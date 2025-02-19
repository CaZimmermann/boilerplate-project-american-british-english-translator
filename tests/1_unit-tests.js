const chai = require('chai');
const assert = chai.assert;

const Translator = require('../components/translator.js');

suite('Unit Tests', () => {

    test('Translate Mangoes are my favorite fruit. to British English', () => {
        const americanText = 'Mangoes are my favorite fruit.';
        const translator = new Translator();
        const translatedText = translator.translateAmericanToBritish(americanText);
        const cleanTranslatedText = translatedText.replace(/<span class="highlight">([^<]*)<\/span>/g, '$1');
        assert.equal(cleanTranslatedText, 'Mangoes are my favourite fruit.');
      });

      test('Translate I ate yogurt for breakfast. to British English', () => {
        const americanText = 'I ate yogurt for breakfast.';
        const translator = new Translator();
        const translatedText = translator.translateAmericanToBritish(americanText);
        const cleanTranslatedText = translatedText.replace(/<span class="highlight">([^<]*)<\/span>/g, '$1');
        assert.equal(cleanTranslatedText, 'I ate yoghurt for breakfast.');
      });

      test("Translate We had a party at my friend's condo. to British English", () => {
        const americanText = "We had a party at my friend's condo.";
        const translator = new Translator();
        const translatedText = translator.translateAmericanToBritish(americanText);
        const cleanTranslatedText = translatedText.replace(/<span class="highlight">([^<]*)<\/span>/g, '$1'); 
        assert.equal(cleanTranslatedText, "We had a party at my friend's flat.");
      });

      test("Translate Can you toss this in the trashcan for me? to British English", () => {
        const americanText = "Can you toss this in the trashcan for me?";
        const translator = new Translator();
        const translatedText = translator.translateAmericanToBritish(americanText);
        const cleanTranslatedText = translatedText.replace(/<span class="highlight">([^<]*)<\/span>/g, '$1'); 
        assert.equal(cleanTranslatedText, "Can you toss this in the bin for me?");
      });

      test("Translate The parking lot was full. to British English", () => {
        const americanText = "The parking lot was full.";
        const translator = new Translator();
        const translatedText = translator.translateAmericanToBritish(americanText);
        const cleanTranslatedText = translatedText.replace(/<span class="highlight">([^<]*)<\/span>/g, '$1');
        assert.equal(cleanTranslatedText, "The car park was full.");
      });

      test("Translate Like a high tech Rube Goldberg machine. to British English", () => {
        const americanText = "Like a high tech Rube Goldberg machine.";
        const translator = new Translator();
        const translatedText = translator.translateAmericanToBritish(americanText);
        const cleanTranslatedText = translatedText.replace(/<span class="highlight">([^<]*)<\/span>/g, '$1');
        assert.equal(cleanTranslatedText, "Like a high tech Heath Robinson device.");
      });

      test("Translate To play hooky means to skip class or work. to British English", () => {
        const americanText = "To play hooky means to skip class or work.";
        const translator = new Translator();
        const translatedText = translator.translateAmericanToBritish(americanText);
        const cleanTranslatedText = translatedText.replace(/<span class="highlight">([^<]*)<\/span>/g, '$1');
        assert.equal(cleanTranslatedText, "To bunk off means to skip class or work.");
      });

      test("Translate No Mr. Bond, I expect you to die. to British English", () => {
        const americanText = "No Mr. Bond, I expect you to die.";
        const translator = new Translator();
        const translatedText = translator.translateAmericanToBritish(americanText);
        const cleanTranslatedText = translatedText.replace(/<span class="highlight">([^<]*)<\/span>/g, '$1');
        assert.equal(cleanTranslatedText, "No Mr Bond, I expect you to die.");
      });

      test("Translate Dr. Grosh will see you now. to British English", () => {
        const americanText = "Dr. Grosh will see you now.";
        const translator = new Translator();
        const translatedText = translator.translateAmericanToBritish(americanText);
        const cleanTranslatedText = translatedText.replace(/<span class="highlight">([^<]*)<\/span>/g, '$1');
        assert.equal(cleanTranslatedText, "Dr Grosh will see you now.");  
    });

      test("Translate Lunch is at 12:15 today. to British English", () => {
        const americanText = "Lunch is at 12:15 today.";
        const translator = new Translator();
        const translatedText = translator.translateAmericanToBritish(americanText);
        assert.equal(translatedText, "Lunch is at <span class=\"highlight\">12.15</span> today.");
      });

      test("Translate We watched the footie match for a while. to American English", () => {
        const britishText = "We watched the footie match for a while.";
        const translator = new Translator();
        const translatedText = translator.translateBritishToAmerican(britishText);
        const cleanTranslatedText = translatedText.replace(/<span class="highlight">([^<]*)<\/span>/g, '$1');
        assert.equal(cleanTranslatedText, "We watched the soccer match for a while.");
      });

      test("Translate Paracetamol takes up to an hour to work. to American English", () => {
        const britishText = "Paracetamol takes up to an hour to work.";
        const translator = new Translator();
        const translatedText = translator.translateBritishToAmerican(britishText);
        const cleanTranslatedText = translatedText.replace(/<span class="highlight">([^<]*)<\/span>/g, '$1');
        assert.equal(cleanTranslatedText, "Tylenol takes up to an hour to work.");
      });

      test("Translate First, caramelise the onions. to American English", () => {
        const britishText = "First, caramelise the onions.";
        const translator = new Translator();
        const translatedText = translator.translateBritishToAmerican(britishText);
        const cleanTranslatedText = translatedText.replace(/<span class="highlight">([^<]*)<\/span>/g, '$1');
        assert.equal(cleanTranslatedText, "First, caramelize the onions.");
      });

      test("Translate I spent the bank holiday at the funfair. to American English", () => {
        const britishText = "I spent the bank holiday at the funfair.";
        const translator = new Translator();
        const translatedText = translator.translateBritishToAmerican(britishText);
        const cleanTranslatedText = translatedText.replace(/<span class="highlight">([^<]*)<\/span>/g, '$1');
        assert.equal(cleanTranslatedText, "I spent the public holiday at the carnival.");
      });

      test("Translate I had a bicky then went to the chippy. to American English", () => {
        const britishText = "I had a bicky then went to the chippy.";
        const translator = new Translator();
        const translatedText = translator.translateBritishToAmerican(britishText);
        const cleanTranslatedText = translatedText.replace(/<span class="highlight">([^<]*)<\/span>/g, '$1');
        assert.equal(cleanTranslatedText, "I had a cookie then went to the <span class=\"highlight\">fish-and-fish-and-chip shop</span>.");
      });

      test("Translate I've just got bits and bobs in my bum bag. to American English", () => {
        const britishText = "I've just got bits and bobs in my bum bag.";
        const translator = new Translator();
        const translatedText = translator.translateBritishToAmerican(britishText);
        const cleanTranslatedText = translatedText.replace(/<span class="highlight">([^<]*)<\/span>/g, '$1');
        assert.equal(cleanTranslatedText, "I've just got odds and ends in my fanny pack.");
      });

      test("Translate The car boot sale at Boxted Airfield was called off. to American English", () => {
        const britishText = "The car boot sale at Boxted Airfield was called off.";
        const translator = new Translator();
        const translatedText = translator.translateBritishToAmerican(britishText);
        const cleanTranslatedText = translatedText.replace(/<span class="highlight">([^<]*)<\/span>/g, '$1');
        assert.equal(cleanTranslatedText, "The swap meet at Boxted Airfield was called off.");
      });

      test("Translate Have you met Mrs Kalyani? to American English", () => {
        const britishText = "Have you met Mrs Kalyani?";
        const translator = new Translator();
        const translatedText = translator.translateBritishToAmerican(britishText);
        const cleanTranslatedText = translatedText.replace(/<span class="highlight">([^<]*)<\/span>/g, '$1');
        assert.equal(cleanTranslatedText, "Have you met mrs. Kalyani?");
      });

      test("Translate Prof Joyner of King's College, London. to American English", () => {
        const britishText = "Prof Joyner of King's College, London.";
        const translator = new Translator();
        const translatedText = translator.translateBritishToAmerican(britishText);
        const cleanTranslatedText = translatedText.replace(/<span class="highlight">([^<]*)<\/span>/g, '$1');
        assert.equal(cleanTranslatedText, "prof. Joyner of King's College, London.");
      });

      test("Translate Tea time is usually around 4 or 4.30. to American English", () => {
        const britishText = "Tea time is usually around 4 or 4.30.";
        const translator = new Translator();
        const translatedText = translator.translateBritishToAmerican(britishText);
        assert.equal(translatedText, "Tea time is usually around 4 or <span class=\"highlight\">4:30</span>.");
      });

      test("Highlight translation in Mangoes are my favorite fruit.", () => {
        const britishText = "Mangoes are my favorite fruit.";
        const translator = new Translator();
        const translatedText = translator.translateAmericanToBritish(britishText);
        assert.equal(translatedText, "Mangoes are my <span class=\"highlight\">favourite</span> fruit.");
      });

      test("Highlight translation in I ate yogurt for breakfast.", () => {
        const britishText = "I ate yogurt for breakfast.";
        const translator = new Translator();
        const translatedText = translator.translateAmericanToBritish(britishText);
        assert.equal(translatedText, "I ate <span class=\"highlight\">yoghurt</span> for breakfast.");
      });

      test("Highlight translation in We watched the footie match for a while.", () => {
        const britishText = "We watched the footie match for a while.";
        const translator = new Translator();
        const translatedText = translator.translateBritishToAmerican(britishText);
        assert.equal(translatedText, "We watched the <span class=\"highlight\">soccer</span> match for a while.");
      });

      test("Highlight translation in Paracetamol takes up to an hour to work.", () => {
        const britishText = "Paracetamol takes up to an hour to work.";
        const translator = new Translator();
        const translatedText = translator.translateBritishToAmerican(britishText);
        assert.equal(translatedText, "<span class=\"highlight\">Tylenol</span> takes up to an hour to work.");
      });

});
