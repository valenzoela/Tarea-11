function writeFromInput()
{
	var titulo = document.getElementById("title");
	var contenido = document.getElementById("content");
	if (titulo.value.trim() == "" || contenido.value.trim() == "") {
		alert("Ingrese Contenido Para Continuar")
		return
	}

writeNew(
	titulo.value,
	contenido.value
	);

	titulo.value = "";
	contenido.value = "";
}

function writeNew(title, content)
{
	var div = document.createElement("div");

	var article = document.createElement("article");

	var m = document.createElement("marquee");
	m.textContent = title;

	var p = document.createElement("p");
	p.textContent = content;

	article.append(title);
	article.append(p);
	div.append(article);

	var button = document.createElement("button")
	button.textContent = "Borrar"
	button.classList.add("btn", "btn-danger");
	button.setAttribute("onclick", "remove(this)");

	article.append(button);

	
	document.getElementById("container").append(div);
}

function remove(button)
{
	if (confirm("Desea Borrar?")) {
	button.closest("div").remove();
	}
}

