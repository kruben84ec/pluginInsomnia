var assert = require('assert');
var expect    = require("chai").expect;
var pluginIndex = require('../index');
let plugin =  new pluginIndex();
describe('Index de plugin para el app de Insomnia', () => {
    describe('Validar si tiene paramentros', ()=>{
        it('Debe estar inicializar las variables', () => {
             let token = null;
             let tokenProperty = null;
             let urlRegexp = null;
             //Test
             expect(token).to.equal(plugin.token);
             expect(tokenProperty).to.equal(plugin.tokenProperty);
             expect(urlRegexp).to.equal(plugin.urlRegexp);

        });

    });
});