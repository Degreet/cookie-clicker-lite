clicksCountDiv.innerText = localStorage.clicks || 0
clickDiv.onclick = () => localStorage.clicks = ++clicksCountDiv.innerText