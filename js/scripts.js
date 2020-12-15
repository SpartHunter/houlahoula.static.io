const video_visible = document.querySelector(".vid-item.visible");

const video_hidden = document.querySelector(".vid-item.hidden");

const ended_slide = document.querySelector(".end-slide");

const circle_arrow = document.querySelector(".circle-arrow");

const slide_contact = document.querySelector(".slide-contact");

window.addEventListener("load", (event) => {
    video_visible.addEventListener('playing', (event) => {

        video_visible.addEventListener('timeupdate', (event) => {
            if(video_visible.currentTime > 4){
                video_hidden.classList.add('view-slide');
                let stop_anim = setTimeout(() => {
                    video_visible.pause();
                }, 3000);

                video_hidden.play();
            } 
          });

        video_hidden.addEventListener('ended', (event) => {
            let stop_anim = setTimeout(() => {
                ended_slide.classList.add('no-invisible');
                let first_waiting = setTimeout(() => {
                    ended_slide.classList.add('yes-opacity');
                    video_hidden.classList.add('no-opacity');
                }, 100);
            }, 250);
            video_hidden.classList.remove('view-slide');
        });
    });

    video_visible.play()

});

circle_arrow.addEventListener('click', (event) => {
    const all_invisible = document.querySelectorAll(".content-contact .invisible");

    for(let i = 0; i <= (all_invisible.length - 1); i++){
        all_invisible[i].classList.add("no-invisible");
        circle_arrow.style.transform = "translateY(0)";
        slide_contact.style.backgroundColor = "#cdd0d9";
    }
});