//JavaScript for Files webpage
//Written by Alexis Ouellette
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'thomas_edison' || username === 'Thomas_Edison' & password === '1879') {
        window.location.href = 'files.html';
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Invalid login',
            text: 'Invalid username or password. Please try again.'
        });
    }
});

/*Sweet alert for Sulfur*/
function showSulfurAlert() {
    let timerInterval;
    Swal.fire({
        icon: "error",
        title: "CORPUTTED FILE!",
        html: "I will self destruct in <b></b> milliseconds.",
        timer: 5000,
        timerProgressBar: true,
        didOpen: () => {
            Swal.showLoading();
            const timer = Swal.getHtmlContainer().querySelector("b");
            timerInterval = setInterval(() => {
                timer.textContent = Swal.getTimerLeft();
            }, 100);
        },
        willClose: () => {
            clearInterval(timerInterval);
        }
    }).then((result) => {
        if (result.dismiss === Swal.DismissReason.timer) {
            console.log("I was closed by the timer");
        }
    });
}

/*Sweet alert for Nitrogen*/
function showNitrogenAlert() {
    let timerInterval;
    Swal.fire({
        icon: "error",
        title: "CORPUTTED FILE!",
        html: "I will self destruct in <b></b> milliseconds.",
        timer: 5000,
        timerProgressBar: true,
        didOpen: () => {
            Swal.showLoading();
            const timer = Swal.getHtmlContainer().querySelector("b");
            timerInterval = setInterval(() => {
                timer.textContent = Swal.getTimerLeft();
            }, 100);
        },
        willClose: () => {
            clearInterval(timerInterval);
        }
    }).then((result) => {
        if (result.dismiss === Swal.DismissReason.timer) {
            console.log("I was closed by the timer");
        }
    });
}

/*Sweet alert for Nitrogen*/
function showUraniumAlert() {
    let timerInterval;
    Swal.fire({
        icon: "error",
        title: "CORPUTTED FILE!",
        html: "I will self destruct in <b></b> milliseconds.",
        timer: 4000,
        timerProgressBar: true,
        didOpen: () => {
            Swal.showLoading();
            const timer = Swal.getHtmlContainer().querySelector("b");
            timerInterval = setInterval(() => {
                timer.textContent = Swal.getTimerLeft();
            }, 100);
        },
        willClose: () => {
            clearInterval(timerInterval);
        }
    }).then((result) => {
        if (result.dismiss === Swal.DismissReason.timer) {
            console.log("I was closed by the timer");
        }
    });
}

/*Sweet alert for Gold*/
function showGoldAlert() {
    let timerInterval;
    Swal.fire({
        icon: "error",
        title: "CORPUTTED FILE!",
        html: "I will self destruct in <b></b> milliseconds.",
        timer: 4000,
        timerProgressBar: true,
        didOpen: () => {
            Swal.showLoading();
            const timer = Swal.getHtmlContainer().querySelector("b");
            timerInterval = setInterval(() => {
                timer.textContent = Swal.getTimerLeft();
            }, 100);
        },
        willClose: () => {
            clearInterval(timerInterval);
        }
    }).then((result) => {
        if (result.dismiss === Swal.DismissReason.timer) {
            console.log("I was closed by the timer");
        }
    });
}

/*Sweet alert for Andrew Carngie*/
function showACAlert() {
    let timerInterval;
    Swal.fire({
        icon: "error",
        title: "CORPUTTED FILE!",
        html: "I will self destruct in <b></b> milliseconds.",
        timer: 4000,
        timerProgressBar: true,
        didOpen: () => {
            Swal.showLoading();
            const timer = Swal.getHtmlContainer().querySelector("b");
            timerInterval = setInterval(() => {
                timer.textContent = Swal.getTimerLeft();
            }, 100);
        },
        willClose: () => {
            clearInterval(timerInterval);
        }
    }).then((result) => {
        if (result.dismiss === Swal.DismissReason.timer) {
            console.log("I was closed by the timer");
        }
    });
}

/*Sweet alert for Abraham Lincoln*/
function showALAlert() {
    let timerInterval;
    Swal.fire({
        icon: "error",
        title: "CORPUTTED FILE!",
        html: "I will self destruct in <b></b> milliseconds.",
        timer: 4000,
        timerProgressBar: true,
        didOpen: () => {
            Swal.showLoading();
            const timer = Swal.getHtmlContainer().querySelector("b");
            timerInterval = setInterval(() => {
                timer.textContent = Swal.getTimerLeft();
            }, 100);
        },
        willClose: () => {
            clearInterval(timerInterval);
        }
    }).then((result) => {
        if (result.dismiss === Swal.DismissReason.timer) {
            console.log("I was closed by the timer");
        }
    });
}

/*Sweet alert for Cornelius Vanderbilt*/
function showCVAlert() {
    let timerInterval;
    Swal.fire({
        icon: "error",
        title: "CORPUTTED FILE!",
        html: "I will self destruct in <b></b> milliseconds.",
        timer: 4000,
        timerProgressBar: true,
        didOpen: () => {
            Swal.showLoading();
            const timer = Swal.getHtmlContainer().querySelector("b");
            timerInterval = setInterval(() => {
                timer.textContent = Swal.getTimerLeft();
            }, 100);
        },
        willClose: () => {
            clearInterval(timerInterval);
        }
    }).then((result) => {
        if (result.dismiss === Swal.DismissReason.timer) {
            console.log("I was closed by the timer");
        }
    });
}

/*Sweet alert for Uranium*/
function showUraniumAlert() {
    let timerInterval;
    Swal.fire({
        icon: "error",
        title: "CORPUTTED FILE!",
        html: "I will self destruct in <b></b> milliseconds.",
        timer: 4000,
        timerProgressBar: true,
        didOpen: () => {
            Swal.showLoading();
            const timer = Swal.getHtmlContainer().querySelector("b");
            timerInterval = setInterval(() => {
                timer.textContent = Swal.getTimerLeft();
            }, 100);
        },
        willClose: () => {
            clearInterval(timerInterval);
        }
    }).then((result) => {
        if (result.dismiss === Swal.DismissReason.timer) {
            console.log("I was closed by the timer");
        }
    });
}



/*Sweet alert for Silver*/
function showSilverAlert() {
    let timerInterval;
    Swal.fire({
        icon: "error",
        title: "CORPUTTED FILE!",
        html: "I will self destruct in <b></b> milliseconds.",
        timer: 4000,
        timerProgressBar: true,
        didOpen: () => {
            Swal.showLoading();
            const timer = Swal.getHtmlContainer().querySelector("b");
            timerInterval = setInterval(() => {
                timer.textContent = Swal.getTimerLeft();
            }, 100);
        },
        willClose: () => {
            clearInterval(timerInterval);
        }
    }).then((result) => {
        if (result.dismiss === Swal.DismissReason.timer) {
            console.log("I was closed by the timer");
        }
    });
}

/*Sweet alert for Garrett Morgan*/
function showGMAlert() {
    let timerInterval;
    Swal.fire({
        icon: "error",
        title: "CORPUTTED FILE!",
        html: "I will self destruct in <b></b> milliseconds.",
        timer: 4000,
        timerProgressBar: true,
        didOpen: () => {
            Swal.showLoading();
            const timer = Swal.getHtmlContainer().querySelector("b");
            timerInterval = setInterval(() => {
                timer.textContent = Swal.getTimerLeft();
            }, 100);
        },
        willClose: () => {
            clearInterval(timerInterval);
        }
    }).then((result) => {
        if (result.dismiss === Swal.DismissReason.timer) {
            console.log("I was closed by the timer");
        }
    });
}

/*Sweet alert for Lead*/
function showLeadAlert() {
    let timerInterval;
    Swal.fire({
        icon: "error",
        title: "CORPUTTED FILE!",
        html: "I will self destruct in <b></b> milliseconds.",
        timer: 4000,
        timerProgressBar: true,
        didOpen: () => {
            Swal.showLoading();
            const timer = Swal.getHtmlContainer().querySelector("b");
            timerInterval = setInterval(() => {
                timer.textContent = Swal.getTimerLeft();
            }, 100);
        },
        willClose: () => {
            clearInterval(timerInterval);
        }
    }).then((result) => {
        if (result.dismiss === Swal.DismissReason.timer) {
            console.log("I was closed by the timer");
        }
    });
}

/*Sweet alert for Madam JC Walker*/
function showMadamAlert() {
    let timerInterval;
    Swal.fire({
        icon: "error",
        title: "CORPUTTED FILE!",
        html: "I will self destruct in <b></b> milliseconds.",
        timer: 4000,
        timerProgressBar: true,
        didOpen: () => {
            Swal.showLoading();
            const timer = Swal.getHtmlContainer().querySelector("b");
            timerInterval = setInterval(() => {
                timer.textContent = Swal.getTimerLeft();
            }, 100);
        },
        willClose: () => {
            clearInterval(timerInterval);
        }
    }).then((result) => {
        if (result.dismiss === Swal.DismissReason.timer) {
            console.log("I was closed by the timer");
        }
    });
}


document.querySelector('.helium').addEventListener('click', function() {
    window.location.href = 'treasure.html';
});


