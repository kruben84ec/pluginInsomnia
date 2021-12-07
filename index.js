class apiToken {
     token = null;
     tokenProperty = null;
     urlRegexp = null;
     templateTags = [{
        name:"getToken",
        displayName: "Get Token",
        args:[{
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
        }],
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

}

module.exports = apiToken;