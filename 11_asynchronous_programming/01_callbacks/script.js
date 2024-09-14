setTimeout(() => {
  console.log("⏰ Tick!");
  
}, 500);


// Simulated asynchronous file reading function
function readTextFile(filename, callback) {
  setTimeout(() => {
    const fileContent = "🥜 Peanut butter\n🍌 Bananas";  // Simulated content
    callback(fileContent);  // Call the callback with the content
  }, 1000);  // Simulate 1 second delay
}

// Usage of the readTextFile function
readTextFile("shopping_list.txt", content => {
  console.log(`🛒 Shopping List:\n${content}`);
});


function readTextFiles(filename, callback){
  setTimeout(() => {
    const filecontent = filename === "file1.txt"? "🍏 Apples\n🍊 Oranges":"🥜 Peanut butter\n🍌 Banana";
    callback(filecontent);
  }, 1000);
}

function compareFiles(fileA, fileB, callback){
  readTextFiles(fileA,contentA => {
    readTextFiles(fileB,contentB => {
      callback(contentA == contentB);
    });
  });
}

compareFiles('file1.txt','file2.txt',isEqual =>{
  console.log(`📁 Are the files equal? ${isEqual ? "✅ Yes" : "❌ No"}`);
  
})


