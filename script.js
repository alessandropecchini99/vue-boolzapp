/* Descrizione:
Milestone 1 ----- FATTO
- Replica della grafica con la possibilità di avere messaggi scritti dall’utente (verdi) e dall’interlocutore (bianco) assegnando due classi CSS diverse
- Visualizzazione dinamica della lista contatti: tramite la direttiva v-for, visualizzare nome e immagine di ogni contatto
 - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
Milestone 2 ----- FATTO
- Visualizzazione dinamica dei messaggi: tramite la direttiva v-for, visualizzare tutti i messaggi relativi al contatto attivo all’interno del pannello della conversazione
- Click sul contatto mostra la conversazione del contatto cliccato
 - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
Milestone 3 ----- FATTO
Aggiunta di un messaggio: l’utente scrive un testo nella parte bassa e digitando “enter” il testo viene aggiunto al thread sopra, come messaggio verde
Risposta dall’interlocutore: ad ogni inserimento di un messaggio, l’utente riceverà un “ok” come risposta, che apparirà dopo 1 secondo.
 - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
Milestone 4 ----- FATTO
Ricerca utenti: scrivendo qualcosa nell’input a sinistra, vengono visualizzati solo i contatti il cui nome contiene le lettere inserite (es, Marco, Matteo Martina -> Scrivo “mar” rimangono solo Marco e Martina)
 - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
Milestone 5 - opzionale ----- FATTO
- Cancella messaggio: cliccando sul messaggio appare un menu a tendina che permette di cancellare il messaggio selezionato
- Visualizzazione ora e ultimo messaggio inviato/ricevuto nella lista dei contatti 
*/

const app = Vue.createApp({
    data() {
        return {
            contacts: [
                {
                    name: 'Michele',
                    avatar: './img/avatar_1.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Hai portato a spasso il cane?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Ricordati di stendere i panni',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            message: 'Tutto fatto!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Fabio',
                    avatar: './img/avatar_2.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '20/03/2020 16:30:00',
                            message: 'Ciao come stai?',
                            status: 'sent'
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            message: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received'
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Samuele',
                    avatar: './img/avatar_3.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '28/03/2020 10:10:40',
                            message: 'La Marianna va in campagna',
                            status: 'received'
                        },
                        {
                            date: '28/03/2020 10:20:10',
                            message: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent'
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            message: 'Ah scusa!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro B.',
                    avatar: './img/avatar_4.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Si, ma preferirei andare al cinema',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro P.',
                    avatar: './img/avatar_5.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ricordati di chiamare la nonna',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Va bene, stasera la sento',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Claudia',
                    avatar: './img/avatar_io.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao Claudia, hai novità?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Boh',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'Nessuna nuova, buona nuova',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Federico',
                    avatar: './img/avatar_7.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Fai gli auguri a Martina che è il suo compleanno!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Grazie per avermelo ricordato, le scrivo subito!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Davide',
                    avatar: './img/avatar_8.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao, andiamo a mangiare la pizza stasera?',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'OK!!',
                            status: 'received'
                        }
                    ],
                },
            ],
            arrReplies: [
                `Ok! 🙃`,
                `Scusa, ora sto giocando 🎮`,
                `Ottimo!`,
                `Adesso sono un po' occupato 💻`,
                `Non so che dirti 😵‍💫`,
                `Non ne sono sicuro`,
                `Fai in fretta!`,
                `Va bene`,
                `D'accordo 🌚`,
                `Perfetto!`,
                `Non sono d'accordo`,
                `Magari un'altro giorno 😅`

            ],
            emoticons: [
            '\u{1F600}', 
            '\u{1F601}', 
            '\u{1F602}', 
            '\u{1F603}', 
            '\u{1F604}', 
            '\u{1F605}', 
            '\u{1F606}', 
            '\u{1F607}',
            '\u{1F608}', 
            '\u{1F609}', 
            '\u{1F60A}', 
            '\u{1F60B}', 
            '\u{1F60C}', 
            '\u{1F60D}', 
            '\u{1F60E}', 
            '\u{1F60F}',
            '\u{1F610}', 
            '\u{1F611}', 
            '\u{1F612}', 
            '\u{1F613}', 
            '\u{1F614}', 
            '\u{1F615}', 
            '\u{1F616}', 
            '\u{1F617}',
            '\u{1F618}', 
            '\u{1F619}', 
            '\u{1F61A}', 
            '\u{1F61B}', 
            '\u{1F61C}', 
            '\u{1F61D}', 
            '\u{1F61E}', 
            '\u{1F61F}',
            '\u{1F620}', 
            '\u{1F621}', 
            '\u{1F622}', 
            '\u{1F623}', 
            '\u{1F624}', 
            '\u{1F625}', 
            '\u{1F626}', 
            '\u{1F627}',
            '\u{1F628}', 
            '\u{1F629}',
            '\u{1F62A}', 
            '\u{1F62B}', 
            '\u{1F62C}', 
            '\u{1F62D}', 
            '\u{1F62E}', 
            '\u{1F62F}',
            '\u{1F630}', 
            '\u{1F631}', 
            '\u{1F632}', 
            '\u{1F633}', 
            '\u{1F634}', 
            '\u{1F635}', 
            '\u{1F636}', 
            '\u{1F637}',
            '\u{1F638}', 
            '\u{1F639}',
            '\u{1F63A}', 
            '\u{1F63B}', 
            '\u{1F63C}', 
            '\u{1F63D}', 
            '\u{1F63E}', 
            '\u{1F63F}',
            '\u{1F640}', 
            '\u{1F641}', 
            '\u{1F642}', 
            '\u{1F643}', 
            '\u{1F644}', 
            '\u{1F645}', 
            '\u{1F646}', 
            '\u{1F647}',
            '\u{1F648}', 
            '\u{1F649}',
            '\u{1F64A}', 
            '\u{1F64B}', 
            '\u{1F64C}', 
            '\u{1F64D}', 
            '\u{1F64E}', 
            '\u{1F64F}',
            '\u{1F31A}'
            ],
            newInputSent: {
                date: '',
                message: '',
                status: 'sent'
            },
            newInputReceived: {
                date: '',
                message: '',
                status: 'received'
            },
            userSearch: ``,
            messageSearch: ``,
            activeIndex: 0,
            colorMode: false,
            backgroundImageClass: `bck-image2`,
        };
    },
    methods:  {
        openChat(element) {
            this.activeIndex = this.contacts.indexOf(element);

            // fissare la scrollbar in basso
            this.fixScrollToBottom();
        },
        newMessages() {
            // orario del momento
            let Time = luxon.DateTime;

            // setto orario messaggio inviato
            this.newInputSent.date = Time.now().toFormat('dd/MM/yyyy HH:mm:ss');

            // controllo che sia inserita una parola e se è inserita una sola parola, che non sia lunga più di 30 caratteri
            if (this.newInputSent.message.length == 0) {
                console.log(`non c'è contenuto`)
            } else {
            
            if (this.newInputSent.message.length > 30 && this.newInputSent.message.includes(` `) == false) {
                    let checkStringa = this.checkLength(this.newInputSent.message);
                    this.newInputSent.message = checkStringa;
                }
                
                // per poi insesire il nuovo messaggio
                this.contacts[this.activeIndex].messages.push(this.newInputSent);

                // per poi pulire il contenitore dei nuovi messaggi
                this.newInputSent = {
                    date: '',
                    message: '',
                    status: 'sent'
                };

                // e fissare la scrollbar in basso
                this.fixScrollToBottom();
    
                // risposta automatica dopo 1 sec
                setTimeout(() => {
                    // setto orario del messaggio rivevuto
                    this.newInputReceived.date = Time.now().toFormat('dd/MM/yyyy HH:mm:ss');

                    // risposte randomizzate
                    this.newInputReceived.message = this.arrReplies[this.getRandomInt(0, this.arrReplies.length - 1)];

                    this.contacts[this.activeIndex].messages.push(this.newInputReceived);

                    this.newInputReceived = {
                        date: '',
                        message: '',
                        status: 'received'
                    };

                    this.fixScrollToBottom();
                }, 1000);
            }

        },
		getRandomInt(min, max) {
			return Math.floor(Math.random() * (max - min + 1) ) + min;
		},
        deleteMessage(i) {
            // elimino il messaggio selezionato
            console.log(`click`);
            this.contacts[this.activeIndex].messages.splice(i, 1);
        },
        checkLength(value) {
            // controllo utilizzato in newMessages()
            console.log(`stringa accorciata`)
            let stringa = value.substring(0, 53);
            let nuovaStringa = stringa.substring(0, stringa.length - 3) + "...";
            return nuovaStringa
        },
        fixScrollToBottom() {
            // Scroll sempre fissato in basso
            this.$nextTick(() => {
                let container = this.$refs.fixScroll;
                container.scrollTop = container.scrollHeight;
            });
        },
        changeColorMode() {
            this.colorMode = !this.colorMode;
            if (this.backgroundImageClass === 'bck-image1') {
                this.backgroundImageClass = 'bck-image2';
              } else {
                this.backgroundImageClass = 'bck-image1';
              }
        },
        addEmoticon(index) {
            this.newInputSent.message += `${this.emoticons[index]}`
            this.$refs.writeHere.focus();
        },
    },
    computed: {
        filteredContacts() {
          if (!this.userSearch) {
            // se la ricerca è vuota, restituisce tutti gli oggetti
            return this.contacts;
          } else {
            // altrimenti, filtra gli oggetti in base alla ricerca
            return this.contacts.filter((contacts) => {
              return contacts.name.toLowerCase().includes(this.userSearch.toLowerCase());
            })
          }
        },
        filteredMessages() {
            if (!this.messageSearch) {
              // se la ricerca è vuota, restituisce tutti gli oggetti
              return this.contacts[this.activeIndex].messages;
            } else {
              // altrimenti, filtra gli oggetti in base alla ricerca
              return this.contacts[this.activeIndex].messages.filter((messages) => {
                return messages.message.toLowerCase().includes(this.messageSearch.toLowerCase());
              })
            }
          }
    }
});

app.mount(`#app`);