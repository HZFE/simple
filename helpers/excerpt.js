export default function (type, options) {
    let text = type.hash.content
        ? type.hash.content.replace(/<.*?>/ig, '')
        : type.data.root.article[type.data.key].content.replace(/<.*?>/ig, '') 
    
    let tailor = type.hash.tailor ? type.hash.tailor : 50
    let ellipsis = type.hash.ellipsis ? type.hash.ellipsis : '...'

    if (text.length <= tailor) {
        return text
    } else {
        return text
            .substr(0, tailor)
            .replace(/\n/ig, '') + ellipsis
    }
}