class Notificacao {
    enviarNotif(mensagem){
        console.log(mensagem)
    }
}

class NotificacaoSMS {
    enviarNotif(mensagem){
        console.log(`Mensagem via sms ${mensagem}`)
    }
}

class NotificacaoEMAIL {
    enviarNotif(mensagem){
        console.log(`Mensagem via email ${mensagem}`)
    }
}

class factoryNotificacao{
    static criarNotificação(tipo){
        switch (tipo){
            case 'sms':
                return new NotificacaoSMS()

            case 'email':
                return new NotificacaoEMAIL()

            default:
                throw new Error("tipo desconhecido");
                     
        }
    }
}

const notif = new NotificacaoEMAIL()
notif.enviarNotif(`aqui vai uma mensagem`)

const notif2= factoryNotificacao.criarNotificação(`email`). enviarNotif(`aqui vai o email`)