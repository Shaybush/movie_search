class Show {
    constructor(_parent, _item) {
        this.parent = _parent;
        this.name = _item.show.name;
        this.fDate = _item.show.premiered;
        // if image exists
        if (_item.show.image) {
            this.image = _item.show.image.medium;
        }
        else {
            this.image = "https://static.tvmaze.com/uploads/images/medium_portrait/37/94857.jpg"
        }
        this.summary = _item.show.summary;
        this.url = _item.show.url;
        this.score = Math.floor(_item.score * 100);
        this.flag = false;
        // this.render();
    }
    render() {
        let div = document.createElement("div");
        div.className = "col-lg-4 col-md-6 p-2 mb-2";
        document.querySelector(this.parent).append(div);
        div.innerHTML = `
        <div class="col-12 border h-100">
        <img class="w-25 me-3 float-start border border-dark" src="${this.image}" alt="">
        <h2>${this.name}</h2>
        <p class="movie_date">${this.fDate}</p>
        <h6 class="rating_mv mb-1">Rating : ${this.score}%</h6>
        <button class="btn btn-secondary btn-sm more_info">More info</button>
        <br>
        <br>
        <div class="details_box p-2"></div>
        </div>
        `
        let rate_h5 = div.querySelector(".rating_mv");
        rate_h5.style.color = colorScore(this.score);
        let dateM = div.querySelector(".movie_date");
        dateM.innerHTML = dateToYear(this.fDate);
        let btn = div.querySelector(".more_info");
        btn.addEventListener("click", () => {
            if (!this.flag) {
                this.flag = true;
                btn.innerHTML = "Less info";
                div.querySelector(".details_box").innerHTML = `${this.summary}`;
            }
            else {
                this.flag = false;
                btn.innerHTML = "Show info";
                div.querySelector(".details_box").innerHTML = ""
            }
            // alert(this.summary);
        })
    }
}
/** color score changer */
function colorScore(score_movie) {
    if (score_movie <= 50) {
        return "red";
    }
    else if (score_movie > 50 && score_movie <= 80) {
        return "darkgrey";
    }
    return "green";

}
/** change the full date to year */
function dateToYear(date) {
    let str = date;
    let index = str.indexOf("-");
    if (index != -1) {
        return str.substring(0, index);
    }
    else{
        return "0000";
    }
}