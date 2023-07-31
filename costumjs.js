//alert('hii');

/*let btnElement=document.getElementById('button');
let tooltip=new bootstrap.Tooltip(btnElement);*/

let elements=document.querySelectorAll('[data-bs-toggle="tooltip"]');
let tooltips=[...elements].map(val=>{new bootstrap.Tooltip(val)});

