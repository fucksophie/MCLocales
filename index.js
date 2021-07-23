import fs from 'fs';

export default class MCLocales {
  constructor(dir = './locales/') {
    this.dir = dir;
    this.languages = fs.readdirSync(this.dir).map((e) => e.split('.json')[0]);
  }

  translate(language, key, values = undefined) {
    if (this.languages.includes(language)) {
      const lang = JSON.parse(fs.readFileSync(`${this.dir + language}.json`).toString());
      const keys = lang.map((e) => e[0]);

      if (keys.includes(key)) {
        let value = lang[keys.indexOf(key)][1];
        const matches = value.matchAll(/%(\w*)%/gm);

        for (const match of matches) {
          value = value.replace(match[0], values[match[1]]);
        }

        return value;
      }
      throw Error(`Key ${key} does not exist in ${language}!`);
    } else {
      throw Error(`Language ${language} does not exist!`);
    }
  }
}
