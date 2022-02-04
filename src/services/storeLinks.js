//buscar os links

export async function getLinksSave(key) {
    const myLinks = await localStorage.getItem('key')

    let linksSaved = JSON.parse(myLinks) || [];
    return linksSaved;

}



//salvar o link quando encurtar
export async function saveLink(key, newLink) {
    let linksStored = await getLinksSave(key);

    //se ja existir um link salvo nao permitir a duplicação de links
    const hasLink = linksStored.some(link => link.id === newLink.id)

    if (hasLink) {
        console.log('esse link ja existe')
        return;
    }

    //adicionar
    linksStored.push(newLink);
    await localStorage.setItem(key, JSON.stringify(linksStored))
    console.log('salvo com sucesso');

}
//deletar algum link salvo

export function deleteLink(links, id){

let myLinks = links.filter( item => {
return (item.id !== id)

})

localStorage.setItem('shortenLink', JSON.stringify(myLinks))
console.log('link deletado com sucesso')

return myLinks;

}