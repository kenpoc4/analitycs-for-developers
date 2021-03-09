/**
 * 
    REFERENCA DE COLA DE COMANDOs ga()
        (https://developers.google.com/analytics/devguides/collection/analyticsjs/command-queue-reference?hl=es)

        ga(command, [...fields], [fieldsObject])    -> Uso de la función ga()

        command(tipo string y es obligatorio): 
            Identificador que representa el comando que se agregará a la cola. 
            El identificador está formado por tres partes (las dos primeras son opcionales):

                        [trackerName.][pluginName:]methodName
            
            trackerName: 
            Nombre del objeto de seguimiento en el que se invocará el comando programado. 
            Si no se especifica ningún nombre de objeto de seguimiento, el comando se invoca 
            en el objeto predeterminado.

            pluginName:
            Nombre del complemento de analytics.js que se ha solicitado. 
            Si se ha especificado pluginName, el valor de methodName debe ser un método 
            que proporcione el complemento.

            methodName:
            Nombre del método que está programado para ejecutarse. 
            Si no se especifica un nombre de complemento, este método debe ser uno de 
            los métodos de comando que se indican más adelante.

        fields(tipo string y no es obligatorio): 
            Uno o varios parámetros auxiliares opcionales para especificar rápidamente 
            los campos comunes. El número de los campos específicos que se permiten 
            varía según el método de comando al que se llame.

        fieldsObject(tipo objeto y no es obligatorio):
            Objeto para especificar los valores restantes que no se indican en ninguno 
            de los parámetros de fields.

            Si se configura un campo en el parámetro fields y fieldsObject, 
            se usará el valor de fieldsObject.

    READY CALLBACK
        Como los comandos solo se ejecutan después de que la biblioteca analytics.js 
        esté totalmente cargada, el motivo más habitual para transmitir una función a la cola 
        de comandos es usarla como retrollamada cuando la biblioteca analytics.js esté cargada 
        y preparada.

        ga(readyCallback)   -> Uso

        readyCallback(es una funcion obligatoria):
            Función de devolución de llamada que se invocará cuando la biblioteca esté totalmente 
            cargada y preparada para interactuar con ella. El primer argumento con el que se 
            invoca la función es el objeto de seguimiento predeterminado. 
            Si no se ha creado este objeto, el primer argumento es undefined.

            Nota: Cuando se invoca la función de retrollamada, pueden usarse todos los métodos 
            del objeto ga.

    DETALLES DEL MÉTODO DE COMANDOS
        1.create: Crea una instancia de objeto de seguimiento con los campos especificados.
        ga('create', [trackingId], [cookieDomain], [name], [fieldsObject]); -> Uso

        2.send: Envía un hit a Google Analytics.
        ga('[trackerName.]send', [hitType], [...fields], [fieldsObject]); -> Uso

        [hitType]   [fields]
        pageview 	page
        event 	    eventCategory, eventAction, eventLabel y eventValue
        social 	    socialNetwork, socialAction y socialTarget
        timing 	    timingCategory, timingVar, timingValue y timingLabel

        3.set: Permite configurar un solo par de campo y valor o un grupo de pares de campo-valor en un objeto de seguimiento.
        // Sets a single field and value.
        ga('[trackerName.]set', fieldName, fieldValue);

        // Sets a group of field/value pairs.
        ga('[trackerName.]set', fieldsObject);

        // Sets the page field to "/about.html".
        ga('set', 'page', '/about.html');

        4.require: Requiere un complemento de analytics.js.
        ga('[trackerName.]require', pluginName, [pluginOptions]);

        pluginName 	    string 	sí 	Nombre del plugin que es obligatorio. Nota: Si no es un complemento oficial de analytics.js, se debe proporcionar en otro lugar de la página.
        pluginOptions 	Object 	No 	Objeto de inicialización que se transmitirá al constructor del plugin después de crear la instancia.

        // Requires the Advertising Features plugin
        // named "myTracker" and override its default cookie name.
        ga('myTracker.require', 'displayfeatures', {
        cookieName: 'display_features_cookie'
        });

 */