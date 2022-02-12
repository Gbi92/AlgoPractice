function titleCase(str) {
  let final = [];

  str.split(' ').forEach(word => {
    let newW = '';
    newW = word[0].toUpperCase() + word.substring(1).toLowerCase();
    final.push(newW);
  });
  
  return final.join(' ');
}