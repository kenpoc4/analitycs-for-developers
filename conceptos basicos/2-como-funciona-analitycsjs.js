/**
 *  2. COMO FUNCIONA ANALITYCS

    Analitycs transforma toda acción establecida a un arreglo, por lo tanto la cola ga() es la cola de eventos a trackear
    
    console.log(ga.q)       ->  muestra en consola el arreglo completo de la cola ga()

    Todas las llamadas a la cola de comandos de ga() comparten una firma común. El primer parámetro, el "comando", 
    es una cadena que identifica un método de analytics.js concreto.

    El método al que hace referencia un determinado comando puede ser un método global, comocreate; 
    un método del objeto ga; o un método de instancia de un objeto de seguimiento, como send. 
    Si la cola de comandos ga() recibe un comando que no reconoce, lo ignora, por lo que las llamadas 
    a la función ga() son muy seguras, ya que prácticamente nunca se generará un error.

    PARAMETROS DE COMANDOS

    ga('create', 'UA-XXXXX-Y', 'auto');
    ga('send', 'pageview');

    En el primer comando, create acepta que se especifiquen los campos trackingId, cookieDomain 
    y name de forma opcional como segundo, tercer y cuarto parámetro, respectivamente. 
    El comando send acepta un segundo parámetro hitType opcional.

    Todos los comandos aceptan un parámetro fieldsObject final que también se puede usar para especificar cualquier campo.
    Por ejemplo, los dos comandos anteriores de la etiqueta podrían reescribirse del siguiente modo:

    ga('create', {
    trackingId: 'UA-XXXXX-Y',
    cookieDomain: 'auto'
    });

    ga('send', {
    hitType: 'pageview'
    });
 */