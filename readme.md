# MCLocales

## yourfriend's miniprojects, project #9

Translation libary that's so fucking easy to use!

### Usage:
```js
const MCLocales = require("MCLocales");

const mcl = new MCLocales();

console.log(mcl.translate("en", "addRole", {
	role: "Role123",
	guild: "Guild123"
}))
```