const items = ["Wears high heels", "Wears hats / head accessories", "Wears glasses", "Lady with short hair", "Shinning scarf", "Man with earrings", "Man with beard / moustache", "With Laptop / Mouse / Keyboard", "Nail manicure", "Wears sportswear", "Brings own bottle / mug", "Wears star pattern outfit", "Dressed as celebrity", "Other nationalities on the same table", "Brings mask", "Brings perfume"];

function init() {
    const grid = document.getElementById('grid');
    const shuffled = items.sort(() => 0.5 - Math.random());
    grid.innerHTML = '';
    shuffled.forEach(item => {
        const btn = document.createElement('div');
        btn.className = "h-24 p-2 border text-xs flex items-center justify-center text-center cursor-pointer bg-gray-50 transition";
        btn.innerText = item;
        btn.onclick = () => btn.classList.toggle('selected');
        grid.appendChild(btn);
    });
}

function submitBingo() {
    const name = document.getElementById('tableName').value;
    if(!name) return alert("Please enter table name");
    document.getElementById('setup').classList.add('hidden');
    document.getElementById('result').classList.remove('hidden');
    document.getElementById('displayTable').innerText = "Table: " + name;
    document.getElementById('resultGrid').innerHTML = document.getElementById('grid').innerHTML;
}

function resetBingo() { location.reload(); }
init();