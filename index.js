const fs = require('fs');
const TelegramBot = require('node-telegram-bot-api');
const bot = new TelegramBot('675204961:AAHulK0Q4ttekpSpGbw1DVnqYnBZoaNXLaw', {polling: true});

bot.onText(/\/start/, (msg) => {

bot.sendPhoto(msg.chat.id, './Frame.jpg', {"reply_markup":{"inline_keyboard":[[{"text":"Привезти продукты","callback_data":"food","hide":false}], [{"text":"Пожертвовать одежду","callback_data":"clothes","hide":false}], [{"text":"Пожертвовать предметы быта","callback_data":"things","hide":false}], [{"text":"Зарегистрировать человека, кому нужна помощь","callback_data":"report_person_in_need","hide":false}] ]}, caption: 'Привет, я помогу тебе стать волонтером. Как бы ты хотел помочь? :)'})

    
    
         
});
    
    const helpType = {
        parse_mode: 'markdown',
        disable_web_page_preview: false,
        reply_markup: {
            inline_keyboard: [
                [{text: `Привезти продукты`, callback_data:'food'}],
                [{text: `Привезти одежду`, callback_data:'clothes'}],
                [{text: `Привезти предметы быта`, callback_data:'things'}],
                [{text: `Сообщить о человеке, кому нужна помощь`, callback_data:'report_person_in_need'}]               
            ]
        }
     }

     bot.on('callback_query', function (msg) {
        if (msg.data === 'food'){
            bot.sendMessage(msg.from.id,"Отлично! Выберите ваш город:", foodCity);
        }
        if (msg.data === 'clothes'){
            bot.sendMessage(msg.from.id,"Отлично! Выберите ваш город:", clothesCity);
        }
        if (msg.data === 'things'){
            bot.sendMessage(msg.from.id,"Отлично! Выберите ваш город:", thingsCity);
        }
        if (msg.data === 'report_person_in_need'){
            bot.sendMessage(msg.from.id,"Отлично! Введите имя человека:");
        }

        }); 
    
        const foodCity = {
            parse_mode: 'markdown',
            disable_web_page_preview: false,
            reply_markup: {
                inline_keyboard: [
                    [{text: `Нур-Султан`, callback_data:'food_nursultan'}],
                    [{text: `Алматы`, callback_data:'food_almaty'}],
                    [{text: `Шымкент`, callback_data:'food_shymkent'}],
                    [{text: `Арысь`, callback_data:'food_arys'}]               
                ]
            }
        }

        const clothesCity = {
            parse_mode: 'markdown',
            disable_web_page_preview: false,
            reply_markup: {
                inline_keyboard: [
                    [{text: `Нур-Султан`, callback_data:'clothes_nursultan'}],
                    [{text: `Алматы`, callback_data:'clothes_almaty'}],
                    [{text: `Шымкент`, callback_data:'clothes_shymkent'}],
                    [{text: `Арысь`, callback_data:'clothes_arys'}]               
                ]
            }
        }    
        
        const thingsCity = {
            parse_mode: 'markdown',
            disable_web_page_preview: false,
            reply_markup: {
                inline_keyboard: [
                    [{text: `Нур-Султан`, callback_data:'things_nursultan'}],
                    [{text: `Алматы`, callback_data:'things_almaty'}],
                    [{text: `Шымкент`, callback_data:'things_shymkent'}],
                    [{text: `Арысь`, callback_data:'things_arys'}]               
                ]
            }
        }

        

        bot.on('callback_query', function (msg) {
            if (msg.data === 'food_nursultan'){
                bot.sendMessage(msg.from.id,"Мы нашли несколько человек в вашем городе, которые нуждаются в продуктах питания. \nКому из них поможем сегодня? :) \n Антонина Семеновна \n Ветеран войны, живет в ветхом доме без отопления. \n Адрес: Навои 234 ");
            }

            if (msg.data === 'food_nursultan'){
                bot.sendMessage(msg.from.id,"Антонина Семеновна \n Ветеран войны, живет в ветхом доме без отопления. \n Адрес: Навои 234 ", foodCity);
            }
    
            }); 
        

        

        


    