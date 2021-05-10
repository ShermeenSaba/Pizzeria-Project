name_of_the_pizza_array = [];

function submit() {
    var display_pizza_array = [];

    for (var j = 1; j <= 6; j++) {
        var name_of_the_pizza = document.getElementById("Pizza_" + j).value;
        console.log(name_of_the_pizza);
        name_of_the_pizza_array.push(name_of_the_pizza);
    }

    console.log(name_of_the_pizza_array);

    var length_of_name_of_pizza_array = name_of_the_pizza_array.length;
    console.log(length_of_name_of_pizza_array);

    for (var k = 0; k < length_of_name_of_pizza_array; k++) {
        display_pizza_array.push(name_of_the_pizza_array[k]);
        console.log(display_pizza_array);

    }
    var remove_commas = display_pizza_array.join(" ");
    console.log(remove_commas);
    document.getElementById("display_addedmenu").innerHTML = remove_commas;

}

function sorting() {
    name_of_the_pizza_array.sort();
    console.log(name_of_the_pizza_array);
    document.getElementById("display_addedmenu").innerHTML = name_of_the_pizza_array;
}

menu_list_array = ["Chicken Tandori Pizza",
    "Veg Supreme Pizza",
    "Paneer Tikka Pizza",
    "Deluxe Veggie Pizza",
    "Veg Extravaganza Pizza"
]

function getmenu() {
    var htmldata;
    htmldata = "<ol class='menulist'>"
    menu_list_array.sort();
    for (var i = 0; i < menu_list_array.length; i++) {
        htmldata = htmldata + '<li>' + menu_list_array[i] + '</li>'
    }
    htmldata = htmldata + "</ol>"
    document.getElementById("display_menu").innerHTML = htmldata;
}

function add_item() {
    var htmldata;
    var item = document.getElementById("add_item").value;
    menu_list_array.push(item);
    menu_list_array.sort();
    htmldata = "<section class='cards'>"
    for (var i = 0; i < menu_list_array.length; i++) {

    }
    htmldata = htmldata + "</section>"
    document.getElementById("display_addmenu").innerHTML = htmldata;
}