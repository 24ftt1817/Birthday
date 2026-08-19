/* =========================================
   BIRTHDAY MESSAGES
========================================= */

const messages = [

    "Selamat ulang tahun, sayang 🌸 Semoga hari ini dipenuhi banyak hal kecil yang bikin kamu senyum.",

    "Semoga di umur yang baru ini, semua hal baik pelan-pelan datang ke kamu. Jangan lupa bahagia ya, sayang ♡",

    "Semoga kamu selalu sehat, dimudahkan dalam segala urusan, dan dikelilingi orang-orang yang tulus sayang sama kamu.",

    "Aku mungkin nggak bisa kasih kamu hadiah secara langsung, jadi aku bikin sesuatu kecil ini khusus buat kamu 🌸",

    "Walaupun kita jauh, aku tetap mau jadi salah satu orang yang ikut merayakan hari spesial kamu.",

    "Makasih ya, sayang, untuk semua cerita, waktu, perhatian, dan momen-momen kecil yang pernah kita bagi bareng ♡",

    "Aku harap di umur yang baru ini kamu bisa lebih banyak ketawa, lebih sedikit sedih, dan selalu punya alasan buat tetap semangat.",

    "Dan kalau suatu hari kamu merasa sendirian, semoga kamu ingat kalau ada seseorang di sini yang selalu mendoakan yang baik-baik buat kamu 🌸",

    "Terakhir... selamat ulang tahun, sayang. Aku sayang kamu. Semoga tahun ini jadi awal dari banyak hal indah yang bisa kamu temukan. ♡"

];


/* =========================================
   GUMBALL COLORS
========================================= */

const colors = [

    "#ff6fae",

    "#65c9ff",

    "#ae86ff",

    "#ffd45f",

    "#65df9b",

    "#ff9661"

];


/* =========================================
   GET HTML ELEMENTS
========================================= */

const button =
    document.getElementById(
        "dispenseButton"
    );


const ball =
    document.getElementById(
        "dispensedBall"
    );


const machine =
    document.getElementById(
        "machine"
    );


const messageBox =
    document.getElementById(
        "messageBox"
    );


const message =
    document.getElementById(
        "message"
    );


const closeMessage =
    document.getElementById(
        "closeMessage"
    );


/* =========================================
   MESSAGE COUNTER
========================================= */

let messageIndex = 0;


/* =========================================
   DISPENSE GUMBALL
========================================= */

button.addEventListener(
    "click",
    () => {


        /* -------------------------------
           RANDOM GUMBALL COLOR
        -------------------------------- */

        const randomColor =
            colors[
                Math.floor(
                    Math.random() *
                    colors.length
                )
            ];


        ball.style.background =
            randomColor;


        /* -------------------------------
           RESET BALL ANIMATION
        -------------------------------- */

        ball.classList.remove(
            "show"
        );


        void ball.offsetWidth;


        ball.classList.add(
            "show"
        );


        /* -------------------------------
           SHAKE MACHINE
        -------------------------------- */

        machine.classList.remove(
            "shake"
        );


        void machine.offsetWidth;


        machine.classList.add(
            "shake"
        );


        /* -------------------------------
           SHOW MESSAGE
        -------------------------------- */

        setTimeout(
            () => {

                message.textContent =
                    messages[
                        messageIndex
                    ];


                messageBox.classList.add(
                    "show"
                );


                /* Next message */

                messageIndex++;


                /* Restart after last */

                if (
                    messageIndex >=
                    messages.length
                ) {

                    messageIndex = 0;

                }

            },

            700
        );

    }
);


/* =========================================
   CLOSE MESSAGE
========================================= */

closeMessage.addEventListener(
    "click",
    () => {

        messageBox.classList.remove(
            "show"
        );

    }
);


/* =========================================
   SAKURA PETALS
========================================= */

const sakuraContainer =
    document.getElementById(
        "sakura-container"
    );


for (
    let i = 0;
    i < 40;
    i++
) {


    const petal =
        document.createElement(
            "div"
        );


    petal.classList.add(
        "petal"
    );


    /* Random horizontal position */

    petal.style.left =
        Math.random() *
        100 +
        "%";


    /* Random size */

    const size =
        6 +
        Math.random() *
        8;


    petal.style.width =
        size +
        "px";


    petal.style.height =
        size *
        1.4 +
        "px";


    /* Random speed */

    petal.style.animationDuration =
        5 +
        Math.random() *
        8 +
        "s";


    /* Random delay */

    petal.style.animationDelay =
        Math.random() *
        8 +
        "s";


    /* Random opacity */

    petal.style.opacity =
        0.3 +
        Math.random() *
        0.6;


    sakuraContainer.appendChild(
        petal
    );

}