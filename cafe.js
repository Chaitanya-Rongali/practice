function showhome() {
    document.getElementById('homeSection').style.display = 'block';
    document.getElementById('orderSection').style.display = 'none';
    document.getElementById('aboutSection').style.display = 'none';
    document.getElementById('contactSection').style.display = 'none';
}
function showorder() {
    document.getElementById('homeSection').style.display = 'none';
    document.getElementById('orderSection').style.display = 'block';
    document.getElementById('aboutSection').style.display = 'none';
    document.getElementById('contactSection').style.display = 'none';
}
function showabout() {
    document.getElementById('homeSection').style.display = 'none';
    document.getElementById('orderSection').style.display = 'none';
    document.getElementById('aboutSection').style.display = 'block';
    document.getElementById('contactSection').style.display = 'none';
}
function showcontact() {
    document.getElementById('homeSection').style.display = 'none';
    document.getElementById('orderSection').style.display = 'none';
    document.getElementById('aboutSection').style.display = 'none';
    document.getElementById('contactSection').style.display = 'block';
}
function additem() {
    const table = document.getElementById('tableselect').value;
    const item = document.getElementById('fooditem').value;
    if (table && item) {
        const listItem = document.createElement('li');
        listItem.className = 'item';
        listItem.innerHTML = `${item} (Table: ${table}) <button class='quantitybtn' onclick='changequantity(this, -1)'>-</button> <span>1</span> <button class='quantitybtn' onclick='changequantity(this, 1)'>+</button> <button class='delbtn' onclick='removeitem(this)'>Delete</button>`;
        document.getElementById('itemList').appendChild(listItem);
    } else {
        alert('Please select  your table and item.');
    }
}
function changequantity(button, amount) {
    const quantitySpan = button.parentElement.querySelector('span');
     let quantity = parseInt(quantitySpan.textContent);
     quantity = Math.max(1, quantity + amount);
     quantitySpan.textContent = quantity;
 }
 function removeitem(button) {
     button.parentElement.remove();
 }
 function submitorder() {
     const items = document.querySelectorAll('.item');
     const summaryList = document.getElementById('summaryList');
     summaryList.innerHTML = '';
     items.forEach(item => {
         const text = item.textContent.replace('Delete', '').trim();
         const listItem = document.createElement('li');
         listItem.textContent = text;
         summaryList.appendChild(listItem);
     });
     document.getElementById('summaryContainer').style.display = 'block';
 }
 

