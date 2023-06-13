window.onload = function(){
    $(function(){
        const foods = {
            '高級棺材1': '../期末/box1.jpg',
            '高級棺材2': '../期末/box2.jpg',
            '高級棺材3': '../期末/box3.jpg',
            '高級骨灰罈4': '../期末/box4.jpg',
            '高級骨灰罈5': '../期末/box5.jpg',
            '高級骨灰罈6': '../期末/box6.jpg',
        };
          
        $("input").on("click",function(){
            var numberOfListItem = $("li").length;
            var randomChildNumber = Math.floor(Math.random()*numberOfListItem);
            var selectedFood = $("li").eq(randomChildNumber).text();
            $("h1").text(selectedFood);
            $("#food-image").attr('src', foods[selectedFood]);
        });
    });
};

