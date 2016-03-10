/**
 * Created by Arkady Sapronov on 10.03.2016.
 */
//создаем функцию по взвешиванию собачек
function bark(name, weight) {
    if(weight > 20) {
        //если собачка весит больше 20кг, то она громко лает
        console.log(name + " says WOOF WOOF");
    } else {
        //если  собачка мелкая, то и голос у нее потише
        console.log(name + " says woof woof");
    }
}