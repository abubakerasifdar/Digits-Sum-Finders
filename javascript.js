
         document.addEventListener("keydown", (e) => {
            if (e.key == "Enter") {
                myFunction();
                document.getElementById("input").value = "";
            }
        })
         function myFunction() {
            let input = Number(document.getElementById('input').value);
            let result = "";
            let i = 0;
            let sum = 0;
            while (i<=input){
                sum = i + i;
                result+=`The Sum of ${i} + ${i} = ${sum}<br>`
                i++;
            }
            document.getElementById('output').style.display = "flex";
            document.getElementById('output').innerHTML = `Your Entered ${input} and Sum of it is ${result}`;
}   