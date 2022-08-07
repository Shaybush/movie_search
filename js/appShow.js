function init() {
    doApi("drama");
    decalreEvents();
}
const doApi = (searchInput) => {
    let spinner_url = "https://icon-library.com/images/spinner-icon-gif/spinner-icon-gif-24.jpg";
    document.querySelector("#id_row").innerHTML = `
    <div class="col-3 mx-auto">
      <img src=${spinner_url} width="100%">
    </div>
        
    `
    let url = `https://api.tvmaze.com/search/shows?q=${searchInput}`;
    $.get(url, (resp) => {
        createAllShows(resp);
    })
}
const createAllShows = (data) => {
    document.querySelector("#id_row").innerHTML = "";
    data.forEach((item) => {
        let show = new Show("#id_row", item)
        show.render();
    })
}
const decalreEvents = () => {
    let valueS = document.querySelector("#id_input");
    let submit = document.querySelector("#id_submit");

    valueS.addEventListener("keypress", function (event) {
        // If the user presses the "Enter" key on the keyboard
        if (event.key === "Enter") {
            valueS = document.querySelector("#id_input").value;
            doApi(valueS);
        }
    })

    submit.addEventListener("click", () => {
        valueS = document.querySelector("#id_input").value;
        doApi(valueS);
    })
}
init();