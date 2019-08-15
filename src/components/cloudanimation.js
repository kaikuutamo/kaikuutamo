

function cloudAnim () {
    
    window.scrollTo(0, 0);

    window.addEventListener("scroll", () => {

        
        var cloud1 = document.getElementById("cloud1");
        var cloud2 = document.getElementById("cloud2");
            

        var offset = 80 - (window.pageYOffset / 300);
        

        
        if (offset > 70) {
            cloud1.style.top = offset + "%";
        }

        if (offset > 70) {
            cloud2.style.top = offset + "%";
        }

        

    })

}

export default cloudAnim;