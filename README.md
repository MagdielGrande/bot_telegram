# Bot de Telegram

> Semana 5 de Launch X

### Configurar tu bot:

1. Crea una cuenta de telegram app.
2. Entra en el link https://telegram.me/BotFather .
3. Escribe ```/newbot```.
4. Escribe un nombre para el bot .
5. Escribe un nombre de usuario del bot.
6. Usa el token generado (Cuidado de publicarlo o versionarlo).
7. Te da el link a tu bot, entra a el y dale en iniciar


### Configurar el bot en nuestro proyecto.

1. Instalar las dependecias del bot ```npm install node-telegram-bot-api --save```
    -   puedes ver la documentación en [node-telegram-bot-api](https://www.npmjs.com/package/node-telegram-bot-api)
2. Creamos un script (```bot.js```) y colocamos el código básico del bot:
3. En package.json en la parte de scripts agrega: "bot": "node ./lib/bot.js"
4. Agregamos el token generado anteriormente y lo colocamos en: ```const token = "";```
5. Ejecutamos el Bot con el comando siguiente: ```npm run bot```

### Resultados 

El bot se conecta a tu proyecto y al introducir un numero ```(3, 5, 15)``` o la misión ```(node, java)```, te devolvera la respuesta al número introducído, o la lista de explorers dependiendo de la misión que hayas escrito.
