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

    describe('Generar la interface para el uso del plugin',()=>{
        it('Debe tener templateTags',()=>{
            let templateTags = [{
                name:"getToken",
                displayName: 'Get Token',
                description: "Get token from API",
                args: [{
                    displayName: "Ingrese el URL del Login",
                    description:"Debe ingresar el url del login y tomara el token",
                    type:'strings',
                    defaultValue: 'localhost'
                },
                {
                    displayName: "Ingrese el URL del Login",
                    description:"Debe ingresar el url del login y tomara el token",
                    type:'strings',
                    defaultValue: 'localhost'
                }

            ],
            async run (context, regexp, property) {
                tokenProperty = property;
                urlRegexp = regexp;
                if (!token) {
                    return "No exite token";
                } else {
                    return token;
                }
            }
            }];

            let argsPlugin_mock = templateTags[0].args;

            let argsPlugin = plugin.templateTags[0].args;
            
            expect(templateTags[0].name).to.equal(plugin.templateTags[0].name);
            expect(templateTags[0].displayName).to.equal(plugin.templateTags[0].displayName);
            expect(argsPlugin_mock.length).to.equal(argsPlugin.length);

        });}
    );
});